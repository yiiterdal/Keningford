'use client';

import { useMemo, useState } from 'react';
import {
  ENERGYCITE_INITIAL_VALUES,
  type EnergyCiteFormData,
} from '../lib/energycite-onboarding';
import styles from './EnergyCiteOnboardingForm.module.css';

const TOTAL_STEPS = 6;

const SIDEBAR_STEPS = [
  'Company Overview',
  'Product & Technology',
  'Market & Revenue',
  'Capital & Financials',
  'Investor Preferences',
  'Team & Exit',
];

function ChipGroup({
  options,
  value,
  multiple,
  onChange,
}: {
  options: { label: string; value: string }[];
  value: string | string[];
  multiple?: boolean;
  onChange: (value: string | string[]) => void;
}) {
  return (
    <div className={styles.chipGroup}>
      {options.map((option) => {
        const selected = multiple
          ? (value as string[]).includes(option.value)
          : value === option.value;

        return (
          <button
            key={option.value}
            type="button"
            className={`${styles.chip} ${selected ? styles.chipSelected : ''}`}
            onClick={() => {
              if (multiple) {
                const current = value as string[];
                onChange(
                  selected
                    ? current.filter((item) => item !== option.value)
                    : [...current, option.value],
                );
              } else {
                onChange(option.value);
              }
            }}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

export default function EnergyCiteOnboardingForm() {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState<EnergyCiteFormData>(ENERGYCITE_INITIAL_VALUES);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const progress = submitted ? 100 : (step / TOTAL_STEPS) * 100;

  function updateField<K extends keyof EnergyCiteFormData>(
    key: K,
    value: EnergyCiteFormData[K],
  ) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function goNext() {
    if (step < TOTAL_STEPS) {
      setStep((current) => current + 1);
      return;
    }
    void handleSubmit();
  }

  function goBack() {
    if (step > 1) setStep((current) => current - 1);
  }

  async function handleSubmit() {
    setSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/energycite-onboarding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data: values,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(payload?.error || 'Submission failed');
      }

      setSubmitted(true);
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : 'Unable to submit the form. Please try again.',
      );
    } finally {
      setSubmitting(false);
    }
  }

  const summary = useMemo(
    () => ({
      company: values.companyName,
      ceo: values.ceoName,
      raise: values.raiseTarget,
      offering: values.offeringType,
      timeline: values.closeTimeline,
      exit: values.exit,
    }),
    [values],
  );

  function renderStep() {
    switch (step) {
      case 1:
        return (
          <>
            <div className={styles.stepHeader}>
              <div className={styles.stepEyebrow}>Step 1 of 6</div>
              <h1 className={styles.stepHeading}>Company Overview</h1>
              <p className={styles.stepSubhead}>
                Basic details about EnergyCite that will appear on the cover and introduction
                slide of your pitch deck.
              </p>
            </div>
            <div className={styles.fieldGroup}>
              <div className={styles.fieldRow}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="companyName">
                    Legal Company Name <span className={styles.required}>*</span>
                  </label>
                  <input
                    id="companyName"
                    className={styles.input}
                    value={values.companyName}
                    onChange={(e) => updateField('companyName', e.target.value)}
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="incState">
                    State of Incorporation <span className={styles.required}>*</span>
                  </label>
                  <input
                    id="incState"
                    className={styles.input}
                    value={values.incState}
                    onChange={(e) => updateField('incState', e.target.value)}
                  />
                </div>
              </div>
              <div className={styles.fieldRow}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="founded">
                    Founded Year
                  </label>
                  <input
                    id="founded"
                    className={styles.input}
                    value={values.founded}
                    onChange={(e) => updateField('founded', e.target.value)}
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="hq">
                    Headquarters City & State
                  </label>
                  <input
                    id="hq"
                    className={styles.input}
                    value={values.hq}
                    onChange={(e) => updateField('hq', e.target.value)}
                  />
                </div>
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="ceoName">
                  CEO / Founder Name <span className={styles.required}>*</span>
                </label>
                <input
                  id="ceoName"
                  className={styles.input}
                  value={values.ceoName}
                  onChange={(e) => updateField('ceoName', e.target.value)}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="oneLiner">
                  One-Line Company Description <span className={styles.required}>*</span>
                </label>
                <input
                  id="oneLiner"
                  className={styles.input}
                  value={values.oneLiner}
                  onChange={(e) => updateField('oneLiner', e.target.value)}
                />
                <p className={styles.fieldHint}>
                  This becomes your deck&apos;s hero tagline. Be specific — avoid generic
                  descriptions.
                </p>
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="website">
                  Company Website
                </label>
                <input
                  id="website"
                  className={styles.input}
                  type="url"
                  value={values.website}
                  onChange={(e) => updateField('website', e.target.value)}
                />
              </div>
              <div className={styles.field}>
                <span className={styles.label}>
                  Stage / Status <span className={styles.required}>*</span>
                </span>
                <ChipGroup
                  value={values.stage}
                  onChange={(value) => updateField('stage', value as string)}
                  options={[
                    { label: 'Pre-revenue', value: 'Pre-revenue' },
                    { label: 'Pre-launch', value: 'Pre-launch' },
                    { label: 'Revenue generating', value: 'Revenue generating' },
                    { label: 'Profitable', value: 'Profitable' },
                  ]}
                />
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className={styles.stepHeader}>
              <div className={styles.stepEyebrow}>Step 2 of 6</div>
              <h1 className={styles.stepHeading}>Product & Technology</h1>
              <p className={styles.stepSubhead}>
                Details about your product, IP, and competitive advantage — this feeds the
                &quot;Product&quot; and &quot;IP&quot; slides.
              </p>
            </div>
            <div className={styles.fieldGroup}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="productName">
                  Product Name
                </label>
                <input
                  id="productName"
                  className={styles.input}
                  value={values.productName}
                  onChange={(e) => updateField('productName', e.target.value)}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="productDesc">
                  Product Description <span className={styles.required}>*</span>
                </label>
                <textarea
                  id="productDesc"
                  className={styles.textarea}
                  value={values.productDesc}
                  onChange={(e) => updateField('productDesc', e.target.value)}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="moat">
                  Core Differentiator / Moat <span className={styles.required}>*</span>
                </label>
                <textarea
                  id="moat"
                  className={styles.textarea}
                  value={values.moat}
                  onChange={(e) => updateField('moat', e.target.value)}
                />
              </div>
              <div className={styles.field}>
                <span className={styles.label}>
                  Current Development Stage <span className={styles.required}>*</span>
                </span>
                <ChipGroup
                  value={values.devStage}
                  onChange={(value) => updateField('devStage', value as string)}
                  options={[
                    { label: 'Concept', value: 'Concept' },
                    { label: 'Prototype', value: 'Prototype' },
                    { label: 'Pre-production', value: 'Pre-production' },
                    { label: 'Launched', value: 'Launched' },
                  ]}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="partnerships">
                  Key Strategic Partnerships
                </label>
                <textarea
                  id="partnerships"
                  className={styles.textarea}
                  value={values.partnerships}
                  onChange={(e) => updateField('partnerships', e.target.value)}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="competitors">
                  Key Competitors
                </label>
                <input
                  id="competitors"
                  className={styles.input}
                  value={values.competitors}
                  onChange={(e) => updateField('competitors', e.target.value)}
                />
              </div>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className={styles.stepHeader}>
              <div className={styles.stepEyebrow}>Step 3 of 6</div>
              <h1 className={styles.stepHeading}>Market & Revenue Model</h1>
              <p className={styles.stepSubhead}>
                Market sizing and revenue details — feeds the &quot;Market Opportunity&quot; and
                &quot;Business Model&quot; slides.
              </p>
            </div>
            <div className={styles.fieldGroup}>
              <div className={styles.infoBox}>
                EnergyCite&apos;s numbers: 140M installed US smart meters, 168 IOUs + top 100
                municipal utilities, $0.50/month/meter lease model = $588M+ annual gross at 70%
                penetration. Confirm or update below.
              </div>
              <div className={styles.fieldRow}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="tam">
                    Total Addressable Market (TAM)
                  </label>
                  <input
                    id="tam"
                    className={styles.input}
                    value={values.tam}
                    onChange={(e) => updateField('tam', e.target.value)}
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="sam">
                    Served Addressable Market (SAM)
                  </label>
                  <input
                    id="sam"
                    className={styles.input}
                    value={values.sam}
                    onChange={(e) => updateField('sam', e.target.value)}
                  />
                </div>
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="revenueModel">
                  Revenue Model <span className={styles.required}>*</span>
                </label>
                <textarea
                  id="revenueModel"
                  className={styles.textarea}
                  value={values.revenueModel}
                  onChange={(e) => updateField('revenueModel', e.target.value)}
                />
              </div>
              <div className={styles.fieldRow}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="unitPrice">
                    Price Per Unit / Per Month
                  </label>
                  <input
                    id="unitPrice"
                    className={styles.input}
                    value={values.unitPrice}
                    onChange={(e) => updateField('unitPrice', e.target.value)}
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="projRevenue">
                    Projected Annual Revenue at Scale
                  </label>
                  <input
                    id="projRevenue"
                    className={styles.input}
                    value={values.projRevenue}
                    onChange={(e) => updateField('projRevenue', e.target.value)}
                  />
                </div>
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="launchDate">
                  Target Launch Date / Beta Site Completion
                </label>
                <input
                  id="launchDate"
                  className={styles.input}
                  value={values.launchDate}
                  onChange={(e) => updateField('launchDate', e.target.value)}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="profitability">
                  Expected Time to Profitability
                </label>
                <input
                  id="profitability"
                  className={styles.input}
                  value={values.profitability}
                  onChange={(e) => updateField('profitability', e.target.value)}
                />
              </div>
              <div className={styles.field}>
                <span className={styles.label}>Sales Channel</span>
                <ChipGroup
                  value={values.channel}
                  onChange={(value) => updateField('channel', value as string)}
                  options={[
                    { label: 'B2B — Utilities', value: 'B2B (Utility)' },
                    { label: 'B2C — Consumer', value: 'B2C (Consumer)' },
                    { label: 'Both', value: 'Both' },
                  ]}
                />
              </div>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <div className={styles.stepHeader}>
              <div className={styles.stepEyebrow}>Step 4 of 6</div>
              <h1 className={styles.stepHeading}>Capital & Financials</h1>
              <p className={styles.stepSubhead}>
                Funding history, current raise details, and use of proceeds — feeds the
                &quot;Financials&quot; and &quot;The Ask&quot; slides.
              </p>
            </div>
            <div className={styles.fieldGroup}>
              <div className={styles.fieldRow}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="totalRaised">
                    Total Capital Raised to Date
                  </label>
                  <input
                    id="totalRaised"
                    className={styles.input}
                    value={values.totalRaised}
                    onChange={(e) => updateField('totalRaised', e.target.value)}
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="raiseTarget">
                    Current Raise Target <span className={styles.required}>*</span>
                  </label>
                  <input
                    id="raiseTarget"
                    className={styles.input}
                    value={values.raiseTarget}
                    onChange={(e) => updateField('raiseTarget', e.target.value)}
                  />
                </div>
              </div>
              <div className={styles.field}>
                <span className={styles.label}>
                  Offering Type <span className={styles.required}>*</span>
                </span>
                <ChipGroup
                  value={values.offeringType}
                  onChange={(value) => updateField('offeringType', value as string)}
                  options={[
                    { label: 'Reg D 504 — Common Equity', value: 'Reg D 504 Equity' },
                    { label: 'SAFE', value: 'SAFE' },
                    { label: 'Convertible Note', value: 'Convertible Note' },
                    { label: 'Debt', value: 'Debt' },
                  ]}
                />
              </div>
              <div className={styles.fieldRow}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="priceA">
                    Share Price (Series A)
                  </label>
                  <input
                    id="priceA"
                    className={styles.input}
                    value={values.priceA}
                    onChange={(e) => updateField('priceA', e.target.value)}
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="priceB">
                    Share Price (Series B)
                  </label>
                  <input
                    id="priceB"
                    className={styles.input}
                    value={values.priceB}
                    onChange={(e) => updateField('priceB', e.target.value)}
                  />
                </div>
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="useProceeds">
                  Use of Proceeds <span className={styles.required}>*</span>
                </label>
                <textarea
                  id="useProceeds"
                  className={styles.textarea}
                  value={values.useProceeds}
                  onChange={(e) => updateField('useProceeds', e.target.value)}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="priorInvestors">
                  Key Prior Investors
                </label>
                <textarea
                  id="priorInvestors"
                  className={styles.textarea}
                  value={values.priorInvestors}
                  onChange={(e) => updateField('priorInvestors', e.target.value)}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="minInvest">
                  Minimum Investment per Investor
                </label>
                <input
                  id="minInvest"
                  className={styles.input}
                  value={values.minInvest}
                  onChange={(e) => updateField('minInvest', e.target.value)}
                />
              </div>
            </div>
          </>
        );
      case 5:
        return (
          <>
            <div className={styles.stepHeader}>
              <div className={styles.stepEyebrow}>Step 5 of 6</div>
              <h1 className={styles.stepHeading}>Investor Preferences</h1>
              <p className={styles.stepSubhead}>
                Who you want to reach and how — feeds the outreach strategy and investor
                targeting sections.
              </p>
            </div>
            <div className={styles.fieldGroup}>
              <div className={styles.field}>
                <span className={styles.label}>
                  Preferred Investor Types <span className={styles.required}>*</span>
                </span>
                <ChipGroup
                  multiple
                  value={values.invType}
                  onChange={(value) => updateField('invType', value as string[])}
                  options={[
                    { label: 'Utility CVC', value: 'Utility CVC' },
                    { label: 'Smart Meter OEM', value: 'Smart Meter Manufacturer' },
                    { label: 'Fusion / Energy VC', value: 'Fusion/Energy VC' },
                    { label: 'Family Office', value: 'Family Office' },
                    { label: 'Angel', value: 'Angel Investor' },
                    { label: 'Govt / SWF', value: 'Government / SWF' },
                  ]}
                />
              </div>
              <div className={styles.field}>
                <span className={styles.label}>
                  Geographic Focus <span className={styles.required}>*</span>
                </span>
                <ChipGroup
                  multiple
                  value={values.geo}
                  onChange={(value) => updateField('geo', value as string[])}
                  options={[
                    { label: 'USA', value: 'USA' },
                    { label: 'Canada', value: 'Canada' },
                    { label: 'Europe', value: 'Europe' },
                    { label: 'Middle East', value: 'Middle East' },
                    { label: 'Asia', value: 'Asia' },
                  ]}
                />
              </div>
              <div className={styles.fieldRow}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="checkSize">
                    Target Check Size per Investor
                  </label>
                  <input
                    id="checkSize"
                    className={styles.input}
                    value={values.checkSize}
                    onChange={(e) => updateField('checkSize', e.target.value)}
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="numInvestors">
                    Ideal Number of Investors to Close
                  </label>
                  <input
                    id="numInvestors"
                    className={styles.input}
                    value={values.numInvestors}
                    onChange={(e) => updateField('numInvestors', e.target.value)}
                  />
                </div>
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="strategicValue">
                  Strategic Value Beyond Capital
                </label>
                <textarea
                  id="strategicValue"
                  className={styles.textarea}
                  value={values.strategicValue}
                  onChange={(e) => updateField('strategicValue', e.target.value)}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="excludeInvestors">
                  Any Investors to Avoid / Exclude
                </label>
                <input
                  id="excludeInvestors"
                  className={styles.input}
                  value={values.excludeInvestors}
                  onChange={(e) => updateField('excludeInvestors', e.target.value)}
                />
              </div>
              <div className={styles.field}>
                <span className={styles.label}>
                  Timeline to Close <span className={styles.required}>*</span>
                </span>
                <ChipGroup
                  value={values.closeTimeline}
                  onChange={(value) => updateField('closeTimeline', value as string)}
                  options={[
                    { label: 'ASAP (<3 months)', value: 'ASAP (< 3 months)' },
                    { label: 'Summer 2026 (3–4 months)', value: 'Summer 2026 (3-4 months)' },
                    { label: 'Flexible (6+ months)', value: 'Flexible (6+ months)' },
                  ]}
                />
              </div>
            </div>
          </>
        );
      case 6:
        return (
          <>
            <div className={styles.stepHeader}>
              <div className={styles.stepEyebrow}>Step 6 of 6</div>
              <h1 className={styles.stepHeading}>Team & Exit Strategy</h1>
              <p className={styles.stepSubhead}>
                Leadership and long-term vision — feeds the &quot;Team&quot; and &quot;Exit&quot;
                slides of the pitch deck.
              </p>
            </div>
            <div className={styles.fieldGroup}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="team">
                  Key Team Members
                </label>
                <textarea
                  id="team"
                  className={styles.textarea}
                  value={values.team}
                  onChange={(e) => updateField('team', e.target.value)}
                />
              </div>
              <div className={styles.fieldRow}>
                <div className={styles.field}>
                  <span className={styles.label}>Exit Strategy</span>
                  <ChipGroup
                    value={values.exit}
                    onChange={(value) => updateField('exit', value as string)}
                    options={[
                      { label: '10x Shareholder Buyback', value: 'Shareholder Buyback 10x' },
                      { label: 'IPO', value: 'IPO' },
                      { label: 'Strategic Acquisition', value: 'Strategic Acquisition' },
                    ]}
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="exitTimeline">
                    Exit Timeline
                  </label>
                  <input
                    id="exitTimeline"
                    className={styles.input}
                    value={values.exitTimeline}
                    onChange={(e) => updateField('exitTimeline', e.target.value)}
                  />
                </div>
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="exitDetails">
                  Exit Details
                </label>
                <textarea
                  id="exitDetails"
                  className={styles.textarea}
                  value={values.exitDetails}
                  onChange={(e) => updateField('exitDetails', e.target.value)}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="additionalNotes">
                  Anything Else for Keningford to Know?
                </label>
                <textarea
                  id="additionalNotes"
                  className={styles.textarea}
                  value={values.additionalNotes}
                  onChange={(e) => updateField('additionalNotes', e.target.value)}
                />
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  }

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarBrand}>Keningford Partners</div>
        <div className={styles.sidebarTagline}>Capital Advisory · M&A · Debt Advisory</div>
        <div className={styles.sidebarTitle}>EnergyCite Client Onboarding</div>
        <p className={styles.sidebarDesc}>
          Complete this form to help us build your investor pitch deck and launch your $5M capital
          raise.
        </p>

        <ul className={styles.stepsList}>
          {SIDEBAR_STEPS.map((label, index) => {
            const stepNumber = index + 1;
            const isActive = !submitted && step === stepNumber;
            const isCompleted = submitted || step > stepNumber;

            return (
              <li
                key={label}
                className={`${styles.stepItem} ${isActive ? styles.stepItemActive : ''} ${
                  isCompleted ? styles.stepItemCompleted : ''
                }`}
              >
                <div className={styles.stepNum}>{stepNumber}</div>
                <div className={styles.stepLabel}>{label}</div>
              </li>
            );
          })}
        </ul>

        <p className={styles.sidebarFooter}>
          All information is kept strictly confidential under the terms of our mutual NDA.
        </p>
      </aside>

      <div className={styles.main}>
        <div className={styles.progressBarWrap}>
          <div className={styles.progressBar} style={{ width: `${progress}%` }} />
        </div>

        {error && !submitted && <div className={styles.errorBanner}>{error}</div>}

        {submitted ? (
          <div className={styles.successScreen}>
            <div className={styles.successIcon}>✓</div>
            <h1 className={styles.successTitle}>Onboarding Complete</h1>
            <p className={styles.successBody}>
              Thank you. Keningford Partners has everything needed to begin building your pitch
              deck and investor outreach materials. We will have a first draft of the investor
              teaser to you within 5 business days.
            </p>
            <div className={styles.summaryBox}>
              <div className={styles.summaryTitle}>Submission Summary</div>
              <div className={styles.summaryItem}>
                <span className={styles.summaryKey}>Company</span>
                <span className={styles.summaryVal}>{summary.company}</span>
              </div>
              <div className={styles.summaryItem}>
                <span className={styles.summaryKey}>CEO</span>
                <span className={styles.summaryVal}>{summary.ceo}</span>
              </div>
              <div className={styles.summaryItem}>
                <span className={styles.summaryKey}>Raise Target</span>
                <span className={styles.summaryVal}>{summary.raise}</span>
              </div>
              <div className={styles.summaryItem}>
                <span className={styles.summaryKey}>Offering Type</span>
                <span className={styles.summaryVal}>{summary.offering}</span>
              </div>
              <div className={styles.summaryItem}>
                <span className={styles.summaryKey}>Timeline to Close</span>
                <span className={styles.summaryVal}>{summary.timeline}</span>
              </div>
              <div className={styles.summaryItem}>
                <span className={styles.summaryKey}>Exit Strategy</span>
                <span className={styles.summaryVal}>{summary.exit}</span>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className={styles.formArea}>{renderStep()}</div>
            <div className={styles.formFooter}>
              <button
                type="button"
                className={`${styles.btnBack} ${step === 1 ? styles.btnBackHidden : ''}`}
                onClick={goBack}
              >
                ← Back
              </button>
              <span className={styles.stepCounter}>
                Step {step} of {TOTAL_STEPS}
              </span>
              <button
                type="button"
                className={`${styles.btnNext} ${step === TOTAL_STEPS ? styles.btnNextGold : ''}`}
                onClick={goNext}
                disabled={submitting}
              >
                {submitting ? 'Submitting…' : step === TOTAL_STEPS ? 'Submit →' : 'Continue →'}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
