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
          <p className="mb-2 text-sm font-medium text-navy">Thank you — your resource is below.</p>
          <p className="whitespace-pre-line text-sm leading-relaxed text-gray-700">{resource.content}</p>
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
