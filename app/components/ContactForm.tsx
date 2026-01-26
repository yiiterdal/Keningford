// app/components/ContactForm.tsx
'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log({ name, email, company, message });
    setSent(true);
  }

  if (sent) {
    return (
      <div className="p-6 bg-gray-50 border border-gray-200">
        <p className="text-gray-700">Thank you. We will respond shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 px-4 py-2.5 focus:outline-none focus:border-navy"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 px-4 py-2.5 focus:outline-none focus:border-navy"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Company
        </label>
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full border border-gray-300 px-4 py-2.5 focus:outline-none focus:border-navy"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Message
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          className="w-full border border-gray-300 px-4 py-2.5 focus:outline-none focus:border-navy"
          required
        />
      </div>

      <div>
        <button
          type="submit"
          className="px-8 py-3 bg-navy text-white text-sm font-medium hover:bg-navy-dark"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
