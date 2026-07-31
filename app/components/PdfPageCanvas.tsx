'use client';

import { useEffect, useRef, useState } from 'react';
import { getDocument, GlobalWorkerOptions, type PDFDocumentProxy } from 'pdfjs-dist';

GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

interface PdfPageCanvasProps {
  url: string;
  page: number;
  className?: string;
  onDocumentLoad?: (pageCount: number) => void;
}

export default function PdfPageCanvas({
  url,
  page,
  className = '',
  onDocumentLoad,
}: PdfPageCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const docRef = useRef<PDFDocumentProxy | null>(null);
  const onLoadRef = useRef(onDocumentLoad);
  const [error, setError] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    onLoadRef.current = onDocumentLoad;
  }, [onDocumentLoad]);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setError(null);
      setReady(false);
      try {
        if (docRef.current) {
          await docRef.current.destroy();
          docRef.current = null;
        }
        const loadingTask = getDocument({ url, withCredentials: false });
        const pdf = await loadingTask.promise;
        if (cancelled) {
          await pdf.destroy();
          return;
        }
        docRef.current = pdf;
        onLoadRef.current?.(pdf.numPages);
        setReady(true);
      } catch {
        if (!cancelled) setError('Unable to load PDF page.');
      }
    }

    void load();

    return () => {
      cancelled = true;
      if (docRef.current) {
        void docRef.current.destroy();
        docRef.current = null;
      }
    };
  }, [url]);

  useEffect(() => {
    if (!ready || !docRef.current || !canvasRef.current) return;

    let cancelled = false;
    let renderTask: { cancel: () => void } | null = null;

    async function renderPage() {
      const pdf = docRef.current;
      const canvas = canvasRef.current;
      if (!pdf || !canvas) return;

      try {
        const pdfPage = await pdf.getPage(page);
        if (cancelled) return;

        const parent = canvas.parentElement;
        const targetWidth = parent?.clientWidth || 544;
        const unscaled = pdfPage.getViewport({ scale: 1 });
        const scale = targetWidth / unscaled.width;
        const viewport = pdfPage.getViewport({ scale: scale * 2 }); // retina

        const context = canvas.getContext('2d');
        if (!context) return;

        canvas.width = viewport.width;
        canvas.height = viewport.height;
        canvas.style.width = `${viewport.width / 2}px`;
        canvas.style.height = `${viewport.height / 2}px`;

        const task = pdfPage.render({
          canvasContext: context,
          viewport,
        });
        renderTask = task;
        await task.promise;
      } catch (err) {
        if (!cancelled && (err as { name?: string }).name !== 'RenderingCancelledException') {
          setError('Unable to render PDF page.');
        }
      }
    }

    void renderPage();

    return () => {
      cancelled = true;
      renderTask?.cancel();
    };
  }, [page, ready]);

  if (error) {
    return (
      <div className={`flex items-center justify-center bg-white p-8 text-sm text-gray-500 ${className}`}>
        {error}
      </div>
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className={`block h-auto w-full bg-white ${className}`}
      aria-label={`PDF page ${page}`}
    />
  );
}
