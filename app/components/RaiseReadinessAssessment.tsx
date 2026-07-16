'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './RaiseReadinessAssessment.module.css';

type QuestionOption = {
  label: string;
  score: number;
  hint?: string;
};

type Question = {
  id: number;
  title: string;
  category: string;
  maxScore: number;
  options: QuestionOption[];
};

type VerdictTier = 'ready' | 'nearly' | 'prepare' | 'notYet';

const QUESTIONS: Question[] = [
  {
    id: 1,
    category: 'Financial profile',
    title: 'What is your current annual revenue or ARR?',
    maxScore: 18,
    options: [
      { label: 'Pre-revenue', score: 0, hint: 'Requires strong IP or grant validation' },
      { label: 'Under $1M', score: 5 },
      { label: '$1M – $5M', score: 10 },
      { label: '$5M – $20M', score: 15 },
      { label: '$20M+', score: 18 },
    ],
  },
  {
    id: 2,
    category: 'Financial profile',
    title: 'What is your revenue growth rate over the last 12 months?',
    maxScore: 18,
    options: [
      { label: 'Declining or flat', score: 0 },
      { label: 'Under 20% growth', score: 5 },
      { label: '20% – 50% growth', score: 10 },
      { label: '50% – 100% growth', score: 15 },
      { label: '100%+ growth', score: 18 },
    ],
  },
  {
    id: 3,
    category: 'Capital position',
    title: 'How long is your current cash runway?',
    maxScore: 18,
    options: [
      { label: 'Under 3 months', score: 0, hint: 'Distressed raises rarely close on favourable terms' },
      { label: '3 – 6 months', score: 5 },
      { label: '6 – 12 months', score: 10 },
      { label: '12 – 18 months', score: 15 },
      { label: '18 months or more', score: 18, hint: 'Strongest negotiating position' },
    ],
  },
  {
    id: 4,
    category: 'Business fundamentals',
    title: 'How would you describe your product and IP position?',
    maxScore: 18,
    options: [
      { label: 'Concept stage, no product yet', score: 0 },
      { label: 'MVP or prototype, limited validation', score: 5 },
      { label: 'Launched product, growing customer base', score: 10 },
      { label: 'Established product with strong IP or patents', score: 15 },
      { label: 'Market-leading position with defensible moat', score: 18 },
    ],
  },
  {
    id: 5,
    category: 'Market credibility',
    title: 'Do you have third-party validation, grants, or strategic partnerships?',
    maxScore: 18,
    options: [
      { label: 'None yet', score: 0 },
      { label: 'LOIs or pilot agreements from potential customers', score: 6 },
      { label: 'Government grant or competitive award', score: 10 },
      { label: 'Signed commercial contracts with paying customers', score: 14 },
      { label: 'Strategic partnership or investment from an industry leader', score: 18 },
    ],
  },
  {
    id: 6,
    category: 'Organization',
    title: 'How complete is your management team?',
    maxScore: 18,
    options: [
      { label: 'Solo founder, no senior team yet', score: 0 },
      { label: 'Founding team only, key hires still needed', score: 5 },
      { label: 'Core team in place, some gaps', score: 10 },
      { label: 'Full senior team with relevant domain experience', score: 15 },
      { label: 'Experienced team with prior exits or institutional backgrounds', score: 18 },
    ],
  },
  {
    id: 7,
    category: 'Capital strategy',
    title: 'Do you have a clear, specific use of proceeds for this raise?',
    maxScore: 18,
    options: [
      { label: 'Not yet defined', score: 0 },
      { label: 'General growth capital', score: 6 },
      { label: 'Specific milestones identified, not yet modelled', score: 12 },
      { label: 'Clear milestones with financial model and timeline', score: 18 },
    ],
  },
  {
    id: 8,
    category: 'Market readiness',
    title: 'Have you spoken to investors before, formally or informally?',
    maxScore: 12,
    options: [
      { label: 'No investor conversations yet', score: 0 },
      { label: 'A few informal conversations, no formal process', score: 4 },
      { label: 'Have run a process but did not close', score: 8 },
      { label: 'Previously raised institutional capital successfully', score: 12 },
    ],
  },
];

const LABELS: Record<number, string> = {
  1: 'Revenue',
  2: 'Growth',
  3: 'Runway',
  4: 'Product & IP',
  5: 'Validation',
  6: 'Team',
  7: 'Use of proceeds',
  8: 'Investor experience',
};

const GAP_MESSAGES: Record<string, string> = {
  Revenue:
    'Investors will want to see meaningful revenue traction before committing to a growth equity round. Consider whether a smaller bridge round or non-dilutive capital makes more sense at this stage.',
  Growth:
    'Flat or low growth significantly limits investor appetite. If growth has stalled, the story needs to explain why and when it will accelerate before investors will engage seriously.',
  Runway:
    'Raising with under six months of runway puts you in a weak negotiating position. Investors know you are under pressure, which directly affects terms.',
  'Product & IP':
    'A stronger product or IP position significantly de-risks the investment thesis. If this is early stage, a government grant or competitive award can substitute for some of this credibility.',
  Validation:
    'Third-party validation, whether a competitive grant, a named strategic partner, or signed commercial contracts, is one of the most important trust signals for institutional investors.',
  Team:
    'Institutional investors invest in teams as much as products. Key hires or advisors with domain-specific credibility can materially change how investors assess your risk profile.',
  'Use of proceeds':
    'Investors want to see a clear link between the capital being raised and specific, measurable milestones. Vague use of proceeds is a common reason investor conversations stall.',
  'Investor experience':
    'Prior experience raising institutional capital is not required, but it helps. Consider bringing in an advisor who has run this process before to help you avoid the most common pitfalls.',
};

const TOTAL_QUESTIONS = QUESTIONS.length;
const CIRCUMFERENCE = 339.3;
const MAX_TOTAL_SCORE = QUESTIONS.reduce((sum, q) => sum + q.maxScore, 0);

const VERDICT_BADGE: Record<VerdictTier, string> = {
  ready: 'Institutionally ready',
  nearly: 'Approaching readiness',
  prepare: 'Preparation required',
  notYet: 'Early stage',
};

const VERDICT_CLASS: Record<VerdictTier, string> = {
  ready: styles.verdictReady,
  nearly: styles.verdictNearly,
  prepare: styles.verdictPrepare,
  notYet: styles.verdictNotYet,
};

type ScoreEntry = { score: number; max: number };

function getVerdict(pct: number) {
  if (pct >= 80) {
    return {
      tier: 'ready' as VerdictTier,
      verdict: 'Ready to raise',
      sub: 'Your company has the fundamentals investors look for. The focus now is on targeting the right investors with the right positioning, not on building the business case further.',
    };
  }
  if (pct >= 60) {
    return {
      tier: 'nearly' as VerdictTier,
      verdict: 'Nearly ready',
      sub: 'You have strong foundations but a few gaps that are likely to slow down or complicate an investor process. Addressing these before going to market will significantly improve your outcome.',
    };
  }
  if (pct >= 40) {
    return {
      tier: 'prepare' as VerdictTier,
      verdict: 'Some preparation needed',
      sub: 'There are meaningful gaps in your readiness profile that investors will probe. Going to market now risks burning the best investor relationships before the business is in the strongest position.',
    };
  }
  return {
    tier: 'notYet' as VerdictTier,
    verdict: 'Not yet ready',
    sub: 'The fundamentals need further development before a formal investor process makes sense. This is a sequencing question, the right capital for this stage likely looks different from institutional equity.',
  };
}

function analyzeScores(scores: Record<number, ScoreEntry>) {
  const strengths: { name: string }[] = [];
  const gaps: { name: string }[] = [];

  Object.entries(scores).forEach(([q, data]) => {
    const ratio = data.score / data.max;
    const name = LABELS[Number(q)];
    if (ratio >= 0.7) strengths.push({ name });
    else if (ratio < 0.5) gaps.push({ name });
  });

  return { strengths, gaps };
}

function CheckIcon() {
  return (
    <svg className={styles.sCardIcon} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5.5 9l2 2 5-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function RaiseReadinessAssessment() {
  const [step, setStep] = useState(1);
  const [scores, setScores] = useState<Record<number, ScoreEntry>>({});
  const [showResult, setShowResult] = useState(false);
  const [ringOffset, setRingOffset] = useState(CIRCUMFERENCE);
  const [resultPct, setResultPct] = useState(0);
  const [verdict, setVerdict] = useState<ReturnType<typeof getVerdict> | null>(null);
  const [strengths, setStrengths] = useState<{ name: string }[]>([]);
  const [gaps, setGaps] = useState<{ name: string }[]>([]);

  const progress = showResult ? 100 : ((step - 1) / TOTAL_QUESTIONS) * 100;
  const hasAnswer = scores[step] !== undefined;

  useEffect(() => {
    if (!showResult) return;
    const total = Object.values(scores).reduce((a, b) => a + b.score, 0);
    const pct = Math.round((total / MAX_TOTAL_SCORE) * 100);
    const offset = CIRCUMFERENCE - (CIRCUMFERENCE * pct) / 100;

    const frame = requestAnimationFrame(() => {
      setRingOffset(offset);
    });
    return () => cancelAnimationFrame(frame);
  }, [showResult, scores]);

  function selectOption(questionId: number, score: number, max: number) {
    setScores((prev) => ({ ...prev, [questionId]: { score, max } }));
  }

  function next() {
    if (step < TOTAL_QUESTIONS) setStep(step + 1);
  }

  function prev() {
    if (step > 1) setStep(step - 1);
  }

  function showResults() {
    const total = Object.values(scores).reduce((a, b) => a + b.score, 0);
    const pct = Math.round((total / MAX_TOTAL_SCORE) * 100);

    setResultPct(pct);
    setRingOffset(CIRCUMFERENCE);
    setVerdict(getVerdict(pct));
    setStrengths(analyzeScores(scores).strengths);
    setGaps(analyzeScores(scores).gaps);
    setShowResult(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function restart() {
    setScores({});
    setStep(1);
    setShowResult(false);
    setRingOffset(CIRCUMFERENCE);
    setResultPct(0);
    setVerdict(null);
    setStrengths([]);
    setGaps([]);
  }

  return (
    <div className={styles.assessment}>
      <h2 className="sr-only">
        Keningford Partners raise readiness assessment, answer eight questions to find out if your
        company is ready to raise institutional capital
      </h2>

      <div className={styles.card}>
        {!showResult && (
          <div className={styles.progressHeader}>
            <div className={styles.progressMeta}>
              <span className={styles.progressLabel}>Raise readiness</span>
              <span className={styles.progressCount}>
                {step} of {TOTAL_QUESTIONS}
              </span>
            </div>
            <div className={styles.progBar}>
              <div className={styles.progFill} style={{ width: `${progress}%` }} />
            </div>
            <div className={styles.stepDots} aria-hidden="true">
              {QUESTIONS.map((q) => (
                <div
                  key={q.id}
                  className={`${styles.stepDot} ${
                    q.id < step
                      ? styles.stepDotDone
                      : q.id === step
                        ? styles.stepDotCurrent
                        : ''
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {!showResult &&
          QUESTIONS.map((question) => (
            <div
              key={question.id}
              className={`${styles.step} ${step === question.id ? styles.stepActive : ''}`}
              role="group"
              aria-labelledby={`q-${question.id}`}
            >
              <div className={styles.category}>{question.category}</div>
              <h3 className={styles.qTitle} id={`q-${question.id}`}>
                {question.title}
              </h3>
              <div className={styles.opts} role="radiogroup" aria-label={question.title}>
                {question.options.map((option) => {
                  const selected = scores[question.id]?.score === option.score;
                  return (
                    <button
                      key={option.label}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      className={`${styles.opt} ${selected ? styles.optSel : ''}`}
                      onClick={() => selectOption(question.id, option.score, question.maxScore)}
                    >
                      <span className={styles.radio} aria-hidden="true">
                        <span className={styles.radioInner} />
                      </span>
                      <span className={styles.optContent}>
                        <span className={styles.optLabel}>{option.label}</span>
                        {option.hint && <span className={styles.hint}>{option.hint}</span>}
                      </span>
                    </button>
                  );
                })}
              </div>
              <div className={styles.btns}>
                {question.id > 1 ? (
                  <button type="button" className={styles.btnSecondary} onClick={prev}>
                    Back
                  </button>
                ) : (
                  <span />
                )}
                <div className={styles.btnsRight}>
                  {question.id < TOTAL_QUESTIONS ? (
                    <button
                      type="button"
                      className={styles.btnPrimary}
                      onClick={next}
                      disabled={!hasAnswer}
                    >
                      Continue
                    </button>
                  ) : (
                    <button
                      type="button"
                      className={styles.btnPrimary}
                      onClick={showResults}
                      disabled={!hasAnswer}
                    >
                      View results
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}

        {showResult && verdict && (
          <div className={`${styles.result} ${styles.resultShow}`}>
            <div className={styles.resultHeader}>
              <div className={styles.scoreRing}>
                <svg viewBox="0 0 130 130" aria-hidden="true">
                  <circle
                    cx="65"
                    cy="65"
                    r="54"
                    fill="none"
                    stroke="#f3f4f6"
                    strokeWidth="8"
                  />
                  <circle
                    cx="65"
                    cy="65"
                    r="54"
                    fill="none"
                    stroke="#001f4d"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={CIRCUMFERENCE}
                    strokeDashoffset={ringOffset}
                    transform="rotate(-90 65 65)"
                    style={{ transition: 'stroke-dashoffset 1s cubic-bezier(0.4, 0, 0.2, 1)' }}
                  />
                </svg>
                <div className={styles.scoreNum}>{resultPct}%</div>
              </div>
              <div className={styles.scoreLabel}>Readiness score</div>
              <div className={`${styles.verdictBadge} ${VERDICT_CLASS[verdict.tier]}`}>
                {VERDICT_BADGE[verdict.tier]}
              </div>
              <div className={styles.rVerdict}>{verdict.verdict}</div>
              <p className={styles.rSub}>{verdict.sub}</p>
            </div>

            {strengths.length > 0 && (
              <div>
                <div className={styles.sectionHeading}>Strengths</div>
                <div className={styles.strengthGrid}>
                  {strengths.map((s) => (
                    <div key={s.name} className={styles.sCard}>
                      <CheckIcon />
                      <span className={styles.sCardTitle}>{s.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {gaps.length > 0 && (
              <div className={styles.gapList}>
                <div className={styles.sectionHeading}>Areas to address before going to market</div>
                {gaps.map((g) => (
                  <div key={g.name} className={styles.gapItem}>
                    <strong>{g.name}.</strong> {GAP_MESSAGES[g.name]}
                  </div>
                ))}
              </div>
            )}

            <div className={styles.ctaBlock}>
              <div className={styles.ctaTitle}>Request a confidential diagnostic</div>
              <p className={styles.ctaSub}>
                Keningford offers a short diagnostic call with founders before any engagement. No
                pitch, no pressure, an honest view of where you stand and what needs to happen
                before investors will engage seriously.
              </p>
              <Link href="/contact" className={styles.ctaBtn}>
                Schedule a conversation
              </Link>
            </div>

            <div className={styles.footer}>
              <button type="button" className={styles.restart} onClick={restart}>
                Retake assessment
              </button>
              <p className={styles.disclaimer}>
                Indicative only. Not a substitute for professional advice.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
