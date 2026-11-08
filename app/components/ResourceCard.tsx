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
    <article className="flex h-full flex-col bg-white p-8">
      <p className="mb-10 w-fit bg-[#f0f0f0] px-3 py-1 text-[12px] font-medium text-gray-600">
        {resource.pages}
      </p>
      <h2 className="font-sans text-xl font-medium leading-[1.18] tracking-[-0.01em] text-navy md:text-[22px]">
        {resource.title}
      </h2>
      <p className="mb-8 mt-3 text-[15px] leading-[1.5] tracking-[-0.02em] text-gray-500">{resource.description}</p>

      {status === 'success' ? (
        <div className="mt-auto bg-[#f0f0f0] p-6">
          <p className="mb-4 text-sm font-medium text-navy">Thank you, your PDF is ready to download.</p>
          <a
            href={resource.pdfUrl}
            download
            aria-label={`Download ${resource.title} PDF`}
            className="inline-flex items-center gap-2 bg-navy px-6 py-3 text-[13px] font-medium text-white transition hover:bg-navy-dark"
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
        <form onSubmit={handleSubmit} className="mt-auto space-y-4">
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
              className="w-full border border-gray-200 bg-[#f7f7f7] px-4 py-3 text-sm focus:border-navy focus:bg-white focus:outline-none"
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
              className="w-full border border-gray-200 bg-[#f7f7f7] px-4 py-3 text-sm focus:border-navy focus:bg-white focus:outline-none"
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="inline-flex items-center bg-navy px-6 py-3 text-[13px] font-medium text-white transition hover:bg-navy-dark disabled:opacity-60"
          >
            {status === 'loading' ? 'Processing…' : 'Get the resource'}
          </button>
        </form>
      )}
    </article>
  );
}
