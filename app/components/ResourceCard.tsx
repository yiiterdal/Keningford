'use client';

import { useState } from 'react';
import type { Resource } from '../data/resources';

interface ResourceCardProps {
  resource: Resource;
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setStatus('loading');
    setError('');

    try {
      const response = await fetch('/api/resource-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          company,
          resourceSlug: resource.slug,
          resourceTitle: resource.title,
        }),
      });

      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        throw new Error(data.error || 'Unable to process request.');
      }

      setStatus('success');
    } catch (submitError) {
      setStatus('error');
      setError(submitError instanceof Error ? submitError.message : 'Unable to process request.');
    }
  }

  return (
    <article className="border border-gray-200 bg-white p-6">
      <h2 className="mb-2 text-xl font-semibold text-navy">{resource.title}</h2>
      <p className="mb-4 text-sm leading-relaxed text-gray-600">{resource.description}</p>
      <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.12em] text-gray-400">
        {resource.pages}
      </p>

      {status === 'success' ? (
        <div className="border border-gray-200 bg-gray-50 p-5">
          <p className="mb-4 text-sm font-medium text-navy">Thank you, your PDF is ready to download.</p>
          <a
            href={resource.pdfUrl}
            download
            aria-label={`Download ${resource.title} PDF`}
            className="inline-flex items-center gap-2 bg-navy px-5 py-2.5 text-sm font-medium text-white transition hover:bg-navy-dark"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0-3-3m3 3 3-3m2 8H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z"
              />
            </svg>
            Download PDF
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor={`email-${resource.slug}`} className="mb-2 block text-sm font-medium text-gray-700">
              Work email
            </label>
            <input
              id={`email-${resource.slug}`}
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:border-navy focus:outline-none"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label htmlFor={`company-${resource.slug}`} className="mb-2 block text-sm font-medium text-gray-700">
              Company (optional)
            </label>
            <input
              id={`company-${resource.slug}`}
              type="text"
              value={company}
              onChange={(event) => setCompany(event.target.value)}
              className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:border-navy focus:outline-none"
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="inline-flex border border-navy px-5 py-2.5 text-sm font-medium text-navy transition hover:bg-navy hover:text-white disabled:opacity-60"
          >
            {status === 'loading' ? 'Processing…' : 'Get the resource'}
          </button>
        </form>
      )}
    </article>
  );
}
