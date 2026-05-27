import Link from 'next/link';
import { cookiePolicyTitle } from '../data/cookie-policy';
import {
  contactAddressLine1,
  contactAddressLine2,
  contactEmail,
  contactPhone,
  contactPhoneHref,
} from '../data/contact';

export default function Footer() {
  return (
    <footer className="w-full bg-slate-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link href="/" className="mb-3 block">
              <h3 className="text-lg font-semibold text-white">Keningford Partners</h3>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Strategic capital advisory and financial services for leading companies and institutional investors.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide text-gray-200">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/capabilities" className="hover:text-white transition-colors">
                  Capabilities
                </Link>
              </li>
              <li>
                <Link href="/transactions" className="hover:text-white transition-colors">
                  Transactions
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-white transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide text-gray-200">Contact</h4>
            <div className="text-sm text-gray-300 space-y-2">
              <div>
                <a href={`mailto:${contactEmail}`} className="hover:text-white transition-colors">
                  {contactEmail}
                </a>
              </div>
              <div>
                <a href={contactPhoneHref} className="hover:text-white transition-colors">
                  {contactPhone}
                </a>
              </div>
              <div className="space-y-0.5 leading-relaxed">
                <div>{contactAddressLine1}</div>
                <div>{contactAddressLine2}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-700">
          <Link
            href="/privacy"
            className="inline-block text-sm text-gray-300 hover:text-white transition-colors leading-relaxed mb-6 max-w-2xl"
          >
            {cookiePolicyTitle} →
          </Link>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <div className="text-sm text-gray-400">© {new Date().getFullYear()} Keningford Partners. All rights reserved.</div>
            <div className="text-sm text-gray-400">Confidential. By appointment only</div>
          </div>

          <div className="flex justify-center md:justify-start gap-6">
            <a
              href="https://www.linkedin.com/company/keningford-partners/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
