import { unsplashSrc } from '../lib/image-utils';

export interface StrategyReportCard {
  title: string;
  body: string;
  icon: 'aviation' | 'policy' | 'supply' | 'capital' | 'margin' | 'capacity' | 'defense' | 'process';
}

export interface StrategyReportMetric {
  value: string;
  label: string;
}

export interface StrategyReportCallout {
  title: string;
  body: string;
  metrics: StrategyReportMetric[];
}

export interface StrategyReportCritical {
  heading: string;
  points: string[];
  alert: string;
}

export interface StrategyReportTableRow {
  label: string;
  value: string;
}

export interface StrategyReportGeoCluster {
  region: string;
  hubs: string;
}

export interface StrategyReportMarketIntel {
  certificationsTitle: string;
  certifications: StrategyReportTableRow[];
  censusTitle: string;
  census: StrategyReportTableRow[];
  geoTitle: string;
  geo: StrategyReportGeoCluster[];
}

export interface StrategyReportFinancingNeed {
  title: string;
  ticket: string;
  body: string;
  pitch: string;
}

export interface StrategyReportBuyerRow {
  buyer: string;
  motive: string;
}

export interface StrategyReportSection {
  id: string;
  number: string;
  label: string;
  heading: string;
  callout: StrategyReportCallout;
  whyCritical: StrategyReportCritical;
  cards: StrategyReportCard[];
  marketIntel: StrategyReportMarketIntel;
  buyerLandscape: StrategyReportBuyerRow[];
  originationSignals: string[];
  financingNeeds: StrategyReportFinancingNeed[];
  imageUrl: string;
  imageAlt: string;
}

export interface StrategyReport {
  slug: string;
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  coverageNote: string;
  date: string;
  excerpt: string;
  heroImageUrl: string;
  heroImageAlt: string;
  sections: StrategyReportSection[];
}

export const strategyReports: StrategyReport[] = [
  {
    slug: 'advanced-manufacturing-materials',
    eyebrow: 'Deal Origination Strategy Report',
    titleLead: 'Tier 1 Advanced Manufacturing &',
    titleAccent: 'Materials',
    coverageNote: 'Advanced Manufacturing & Aerospace · Middle-Market Focus',
    date: 'July 2026',
    excerpt:
      'Where structural supply bottlenecks, reshoring capital, and aerospace/defense backlog meet middle-market M&A and growth financing.',
    heroImageUrl: '/images/strategy/manhattan-skyline-hero.jpg?v=2',
    heroImageAlt: 'Manhattan skyline at golden hour over New York',
    sections: [
      {
        id: 'executive-summary',
        number: '01',
        label: 'Executive Summary',
        heading: 'Why This Space Is Hot Right Now',
        imageUrl: unsplashSrc('photo-1581091226825-a6a2a5aee158', 1200),
        imageAlt: 'Engineer reviewing industrial production systems',
        callout: {
          title: 'The Structural Bottleneck Creating Deal Flow',
          body: 'Advanced manufacturing and specialty materials sit at the intersection of aerospace backlog, defense industrial-base rebuild, and sponsor demand for scarce certified capacity. The opportunity is not manufacturing broadly: it is businesses that own process capability, customer approvals, and trained labor that buyers cannot recreate on a deal timeline. In 2026, committees are clearing assets that prove program stickiness and dual-source value, not generic spindle hours.',
          metrics: [
            { value: '$180B+', label: 'NA Addressable Ecosystem' },
            { value: '11–14x', label: 'Quality Entry Multiples' },
            { value: 'High', label: 'Strategic Premium Intensity' },
          ],
        },
        whyCritical: {
          heading: 'Why this layer is strategically critical',
          points: [
            'OEM and Tier-1 build rates remain gated by machining, coatings, composites, and qualified materials capacity, not by final assembly alone.',
            'Dry powder is rotating toward hard-asset platforms with contracted demand, pricing power, and tangible switching costs.',
            'Add-on density is visible: platforms can buy certifications, cells, and geographies faster than they can organically qualify them.',
            'Reshoring and DFARS/ITAR adjacency widen the strategic buyer set without requiring a pure defense thesis.',
            'Labor and know-how (programmers, NADCAP process owners, QA leads) are now underwritten as scarce assets alongside EBITDA.',
          ],
          alert:
            'Commodity job shops without certification depth or program stickiness are screening out of institutional processes. Scarcity, audit history, and dual-source value, not volume, clear committees in 2026.',
        },
        cards: [
          {
            icon: 'aviation',
            title: 'Aviation Production Backlog',
            body: 'OEM and Tier-1 build rates remain constrained by machining capacity, specialty coatings, composites layup, and certified materials. Release schedules create multi-year visibility that supports both equity and credit underwriting.',
          },
          {
            icon: 'policy',
            title: 'Government Reshoring Mandates',
            body: 'Defense industrial-base spend, Buy American adjacency, and domestic content preferences pull capital into North American capacity, especially where foreign dual-sourcing is slow or restricted.',
          },
          {
            icon: 'supply',
            title: 'Supply-Chain Concentration',
            body: 'Single-source nodes in critical paths create acquisition urgency for strategics and platforms. Buyers will pay for redundancy when a missed shipset jeopardizes program schedules.',
          },
          {
            icon: 'capital',
            title: 'Sponsor Appetite for Hard Assets',
            body: 'Middle-market PE is reallocating toward cash-flowing industrial platforms with tangible moats: certifications, permits, customer approvals, and trained operators.',
          },
          {
            icon: 'margin',
            title: 'Pricing Power & Mix Shift',
            body: 'Migration into certified, mission-critical work expands margins without relying on volume alone. Mix quality often matters more than top-line growth in diligence.',
          },
          {
            icon: 'capacity',
            title: 'Capacity as a Scarce Asset',
            body: 'Buyers pay for time-to-capability: audits, NADCAP/AS9100 status, OEM approvals, and trained operators. Capex alone does not recreate a qualified cell.',
          },
        ],
        marketIntel: {
          certificationsTitle: 'Key certifications that drive value',
          certifications: [
            { label: 'AS9100', value: 'Baseline aerospace quality system, table-stakes for airframe/engine work' },
            { label: 'NADCAP', value: 'Process accreditation for coatings, NDT, heat treat, composites' },
            { label: 'ITAR / EAR', value: 'Required for many US defense programs and controlled tech' },
            { label: 'FAA / EASA', value: 'Repair station / airworthiness adjacency for MRO-linked assets' },
            { label: 'ISO 9001', value: 'Industrial buyer table-stakes; rarely enough alone for premium' },
            { label: 'OEM Approvals', value: 'Customer-qualified process recipes that create switching costs' },
          ],
          censusTitle: 'Company universe (North America)',
          census: [
            { label: 'Small / LMM private shops', value: '25,000–40,000' },
            { label: 'Certified aero/defense-adjacent firms', value: '4,000–7,000' },
            { label: 'Institutional-ready platforms', value: '800–1,500' },
            { label: 'Active PE-backed platforms', value: '120–200' },
            { label: 'Likely sell-side processes (12–24 mo)', value: '80–150' },
          ],
          geoTitle: 'Key geographic clusters',
          geo: [
            {
              region: 'US Aero Corridor',
              hubs: 'Wichita, Seattle, Southern California, Connecticut, Ohio, Texas',
            },
            {
              region: 'US Defense / Industrial',
              hubs: 'Southeast, Great Lakes forge belt, Gulf Coast energy adjacency',
            },
            {
              region: 'Canada',
              hubs: 'Montreal, Toronto, Winnipeg, strong aero machining & composites density',
            },
          ],
        },
        buyerLandscape: [
          {
            buyer: 'OEMs / Tier-1 strategics',
            motive: 'Supply security, dual-source depth, vertical control of bottleneck processes',
          },
          {
            buyer: 'Industrial PE platforms',
            motive: 'Add-on density, certification roll-ups, geographic fill-ins',
          },
          {
            buyer: 'Family offices / search',
            motive: 'Durable cash flow with tangible assets; often less leverage-dependent',
          },
          {
            buyer: 'Direct lenders / BSL',
            motive: 'Backlog-backed credit against program quality, selective on leverage',
          },
        ],
        originationSignals: [
          'Owner age / succession with AS9100 + sticky OEM programs and clean quality scorecards',
          'Capacity utilization >80% on hard-metal or NADCAP cells with quoted lead times stretching',
          'Recent OEM dual-source RFP activity around a single-source node',
          'Permit-constrained coatings or heat-treat capacity in dense aero corridors',
          'PE platform seeking first or second add-on in machining, coatings, or composites',
        ],
        financingNeeds: [
          {
            title: 'Working Capital / Backlog Finance',
            ticket: '$2M – $25M',
            body: 'Fund materials, labor, and WIP against long-cycle OEM releases without diluting ownership. Facilities should flex with release schedules and materials lead times, not a static trailing-revenue formula.',
            pitch:
              'Contracted backlog + certification moat is a credit story, not just an equity story, size the facility to the release schedule and customer quality.',
          },
          {
            title: 'Equipment / Capex Financing',
            ticket: '$500K – $20M',
            body: '5-axis CNC, inspection cells, thermal spray, autoclaves, and qualified process equipment that unlock higher-margin work. Buyers and lenders distinguish capacity that creates scarce hours from generic plant expansion.',
            pitch:
              'Capex that buys scarce spindle hours, NADCAP throughput, or OEM-qualified capacity clears faster than square-footage stories.',
          },
          {
            title: 'Growth / Acquisition Capital',
            ticket: '$10M – $75M',
            body: 'Buy complementary certifications, geographies, or process cells to become dual-source on more programs. Roll-ups work when customer approvals and quality systems can be integrated without losing ratings.',
            pitch:
              'Platforms that can show add-on density get sponsor attention; strategics pay for supply security, both can clear the same process.',
          },
        ],
      },
      {
        id: 'aerospace-machining',
        number: '02',
        label: 'Aerospace Machining',
        heading: 'Certified Capacity Under Constraint',
        imageUrl: unsplashSrc('photo-1540962351504-03099fad2ee4', 1200),
        imageAlt: 'Commercial aircraft on the tarmac representing aerospace supply chain demand',
        callout: {
          title: 'The Clearest Origination Corridor in the Middle Market',
          body: 'Precision machining for airframe and engine programs remains capacity-constrained across hard metals and complex geometry. Attractive targets combine AS9100 / NADCAP credentials, sticky program positions, trained programmers, and backlog that is program-tied rather than purely spot. The best processes lead with audit history and cell-level utilization, not a generic “aerospace supplier” narrative.',
          metrics: [
            { value: '5-axis', label: 'Complex Geometry Premium' },
            { value: 'AS9100', label: 'Table-Stakes Certification' },
            { value: '8–11x', label: 'Typical Entry Multiple Band' },
          ],
        },
        whyCritical: {
          heading: 'Why this layer is strategically critical',
          points: [
            'OEMs are dual-sourcing where Tier-2s are capacity-constrained, creating urgency for qualified shops with open capacity or buyable cells.',
            'Hard-metal and tight-tolerance work (titanium, Inconel, close-tolerance assemblies) commands pricing power commodity shops cannot match.',
            'Tuck-in M&A to buy adjacent certifications, CMMs, or geographies clears faster than greenfield platform builds.',
            'Program-tied backlog supports more constructive leverage conversations than spot industrial machining.',
            'Labor durability, CNC programmers, setup leads, QA, is now a first-order diligence item and a real valuation driver.',
          ],
          alert:
            'Pure job-shop volume without certification depth screens out quickly. Program stickiness, customer scorecards, and audit history belong in the first data-room folder.',
        },
        cards: [
          {
            icon: 'aviation',
            title: 'Program-Tied Backlog',
            body: 'OEM and Tier-1 release visibility supports equity and credit underwriting versus general industrial machining. Diligence should split firm releases vs. forecast demand.',
          },
          {
            icon: 'process',
            title: 'Hard-Metal & Complex Geometry',
            body: 'Titanium, Inconel, and tight-tolerance assemblies command premium pricing and longer customer qualification cycles that protect margins.',
          },
          {
            icon: 'supply',
            title: 'Customer Concentration Trade-offs',
            body: 'High OEM concentration can be acceptable with multi-year contracts, switching costs, and clean delivery history, but it must be framed early.',
          },
          {
            icon: 'capital',
            title: 'Add-On Logic',
            body: 'Platforms buy certifications, geographies, and cells to dual-source more shipsets. Integration risk is lower when quality systems already speak the same language.',
          },
          {
            icon: 'capacity',
            title: 'Spindle Hours as Inventory',
            body: 'Scarce 5-axis hours and hard-metal capability price like inventory. Utilization and quoted lead times are origination signals.',
          },
          {
            icon: 'margin',
            title: 'Mix Over Volume',
            body: 'A shop migrating from soft-metal spot work into certified aero mixes often re-rates before revenue doubles.',
          },
        ],
        marketIntel: {
          certificationsTitle: 'Key certifications that drive value',
          certifications: [
            { label: 'AS9100', value: 'Baseline aerospace quality, required for most Tier-1 RFQs' },
            { label: 'NADCAP', value: 'Special process adjacency (NDT, coatings) that widens wallet share' },
            { label: 'ITAR', value: 'Required for many US defense machining programs' },
            { label: 'FAA / EASA', value: 'Repair station / PMA adjacency for MRO-linked machining' },
            { label: 'OEM Approvals', value: 'Boeing / Airbus / engine OEM source approvals' },
            { label: 'CMMC / Cyber', value: 'Increasingly required for defense-adjacent data handling' },
          ],
          censusTitle: 'Company universe (North America)',
          census: [
            { label: 'Small / LMM private machining firms', value: '25,000–40,000' },
            { label: 'Aero-certified machining shops', value: '2,500–4,000' },
            { label: 'Institutional-ready machining platforms', value: '400–700' },
            { label: 'Active PE platforms in segment', value: '60–100' },
            { label: 'Likely competitive processes (12 mo)', value: '40–70' },
          ],
          geoTitle: 'Key geographic clusters',
          geo: [
            {
              region: 'US',
              hubs: 'Wichita, Seattle, Southern California, Connecticut, Ohio, North Texas',
            },
            {
              region: 'Canada',
              hubs: 'Montreal, Toronto, Winnipeg, deep aero machining talent pools',
            },
            {
              region: 'Mexico adjacency',
              hubs: 'Nearshoring nodes for less-critical machining (watch ITAR boundaries)',
            },
          ],
        },
        buyerLandscape: [
          {
            buyer: 'Tier-1 aero platforms',
            motive: 'Secure hard-metal capacity and reduce single-source risk on shipsets',
          },
          {
            buyer: 'PE machining consolidators',
            motive: 'Cell density, geographic fill-in, and certification stack-ups',
          },
          {
            buyer: 'Defense primes / subcontractors',
            motive: 'ITAR-ready capacity with proven quality systems',
          },
          {
            buyer: 'Equipment / credit lenders',
            motive: 'Finance 5-axis and CMM against program backlog and utilization',
          },
        ],
        originationSignals: [
          'Quoted lead times extending on titanium / Inconel cells while soft-metal capacity sits idle',
          'Owner succession with AS9100 + multi-year OEM scorecards above threshold',
          'Platform seeking NADCAP or geographic tuck-in within 150 miles of an OEM cluster',
          'Capex backlog for 5-axis machines with customer LOIs but delayed financing',
          'Quality escapes trending down while utilization stays high, clean sell-side story',
        ],
        financingNeeds: [
          {
            title: 'Working Capital / Backlog Finance',
            ticket: '$2M – $30M',
            body: 'Bridge long OEM payment cycles and materials lead times against released backlog. Facilities work best when borrowing bases recognize WIP quality and customer concentration with mitigants.',
            pitch:
              'Lenders underwrite program backlog and customer quality, not just trailing EBITDA. Bring the release schedule to the first credit meeting.',
          },
          {
            title: 'Equipment / Capex Financing',
            ticket: '$500K – $20M',
            body: 'Fund 5-axis CNC, CMM, and hard-metal capacity that expands certified throughput. Pair equipment stories with the programs those hours will serve.',
            pitch:
              'A machine that unlocks titanium or Inconel work is an origination asset, not a commodity lease, frame the qualification path.',
          },
          {
            title: 'Growth / Acquisition Capital',
            ticket: '$10M – $80M',
            body: 'Acquire complementary shops for certifications, geography, or process adjacency. Synergy underwriting should focus on shared customers and dual-source wins, not SG&A alone.',
            pitch:
              'Buy vs build is the thesis: certifications and customer approvals take years to recreate. Price time-to-capability.',
          },
        ],
      },
      {
        id: 'advanced-coatings',
        number: '03',
        label: 'Advanced Coatings',
        heading: 'Process IP with Recurring Aftermarket',
        imageUrl: unsplashSrc('photo-1504328345606-18bbc8c9d7d1', 1200),
        imageAlt: 'Industrial metal fabrication and surface finishing environment',
        callout: {
          title: 'The Qualified Process Layer Buyers Cannot Skip',
          body: 'Specialty coatings sit between materials and finished parts, thermal spray, corrosion protection, PVD/CVD, and NADCAP special processes. The best businesses own qualified process recipes, scarce environmental permits, trained process owners, and aftermarket rework streams tied to flight hours and industrial uptime. Equipment is replaceable; the qualification file is not.',
          metrics: [
            { value: 'MRO', label: 'Recurring Aftermarket Mix' },
            { value: 'NADCAP', label: 'Process Qualification Moat' },
            { value: '9–12x', label: 'Platform Multiple Potential' },
          ],
        },
        whyCritical: {
          heading: 'Why this layer is strategically critical',
          points: [
            'Customer-specific specs and audit trails create real switching friction that survives ownership changes when process control is intact.',
            'Already-permitted capacity in dense corridors prices as strategic scarcity, greenfield permitting can take years.',
            'Defense and energy adjacency widens the buyer universe beyond pure aerospace cycles.',
            'Aftermarket / MRO mix smooths OEM volatility and improves credit durability.',
            'Chemistry know-how and process owners are as scarce as booths and spray systems.',
          ],
          alert:
            'The diligence file is the process recipe, customer audits, and permit stack, not the equipment list. Lead with qualifications; equipment follows.',
        },
        cards: [
          {
            icon: 'process',
            title: 'Qualified Process Moats',
            body: 'The asset is as much the qualification file and process owner as the spray booth. Recipes and audit trails transfer only with disciplined transition planning.',
          },
          {
            icon: 'margin',
            title: 'Aftermarket Mix',
            body: 'MRO coatings smooth OEM cycle volatility and support recurring revenue. Flight-hour and industrial uptime linkages are underwriting positives.',
          },
          {
            icon: 'policy',
            title: 'Environmental Permitting',
            body: 'Permitted capacity in dense corridors is scarce and hard to replicate. Permits can be the entire strategic premium on a smaller EBITDA base.',
          },
          {
            icon: 'defense',
            title: 'Defense & Energy Adjacency',
            body: 'Dual-end-market exposure reduces single-cycle risk and attracts both aero and industrial strategics.',
          },
          {
            icon: 'supply',
            title: 'OEM Spec Lock-In',
            body: 'Once a coating system is written into a part or engine program, dual-sourcing is slow, creating durable wallet share.',
          },
          {
            icon: 'capital',
            title: 'Network Economics',
            body: 'Multi-site coatings platforms win when OEMs want dual-source depth without managing dozens of independent shops.',
          },
        ],
        marketIntel: {
          certificationsTitle: 'Key certifications that drive value',
          certifications: [
            { label: 'NADCAP', value: 'Coatings / special process accreditation, core valuation driver' },
            { label: 'AS9100', value: 'Aerospace quality system for OEM and MRO work' },
            { label: 'OEM Specs', value: 'Customer-qualified process recipes and source approvals' },
            { label: 'Env. Permits', value: 'Air / waste / water permits as capacity moat' },
            { label: 'ITAR', value: 'Defense coatings and controlled applications' },
            { label: 'ISO / Industry Specs', value: 'Energy and industrial specs that broaden end markets' },
          ],
          censusTitle: 'Company universe (North America)',
          census: [
            { label: 'Qualified coatings / surface-treatment shops', value: '3,000–5,000' },
            { label: 'NADCAP-accredited coatings sites', value: '800–1,200' },
            { label: 'Institutional-ready platforms', value: '150–250' },
            { label: 'PE-backed consolidators', value: '25–40' },
            { label: 'Permit-scarce corridor assets', value: 'High strategic interest' },
          ],
          geoTitle: 'Key geographic clusters',
          geo: [
            {
              region: 'US Aero',
              hubs: 'Southern California, Connecticut, Midwest aero corridors',
            },
            {
              region: 'US Energy / Industrial',
              hubs: 'Gulf Coast, Mid-Continent, corrosion and thermal spray adjacency',
            },
            {
              region: 'Canada',
              hubs: 'Montreal, Toronto, aero MRO and OEM coatings density',
            },
          ],
        },
        buyerLandscape: [
          {
            buyer: 'Aero / defense strategics',
            motive: 'Lock qualified process capacity and protect program schedules',
          },
          {
            buyer: 'Coatings consolidators',
            motive: 'Multi-site networks for OEM dual-source requirements',
          },
          {
            buyer: 'Energy services platforms',
            motive: 'Thermal spray and corrosion capability for industrial uptime',
          },
          {
            buyer: 'Growth lenders',
            motive: 'Fund line expansion inside already-permitted footprints',
          },
        ],
        originationSignals: [
          'Booth utilization high with permit headroom already maxed, expansion requires M&A or new sites',
          'MRO mix rising as flight hours recover; OEM dependency declining',
          'NADCAP findings clean across recent audits with stable process owners',
          'OEM dual-source initiative naming coatings as a bottleneck',
          'Owner retirement with permits and recipes intact, transition plan is the deal',
        ],
        financingNeeds: [
          {
            title: 'Working Capital / MRO Scaling',
            ticket: '$1M – $15M',
            body: 'Support aftermarket volume, chemistry inventory, and turnaround capacity. Recurring MRO improves borrowing-base conversations versus pure OEM dependency.',
            pitch:
              'Recurring MRO revenue changes the credit conversation, bring flight-hour and turnaround metrics, not just OEM releases.',
          },
          {
            title: 'Equipment / Line Expansion',
            ticket: '$1M – $25M',
            body: 'Thermal spray, PVD/CVD, or corrosion lines where permits already exist. Capex inside a permitted site compounds scarcity value.',
            pitch:
              'Capex inside an already-permitted site compounds scarcity value, underwrite the permit and recipe, then the equipment.',
          },
          {
            title: 'Platform / Roll-up Capital',
            ticket: '$15M – $100M',
            body: 'Consolidate multi-site coatings networks for OEMs seeking dual-source depth. Integration must protect NADCAP ratings and process owners.',
            pitch:
              'Strategics buy networks; sponsors buy density, both theses can clear the same asset if quality systems stay intact.',
          },
        ],
      },
      {
        id: 'specialty-materials',
        number: '04',
        label: 'Specialty Metals',
        heading: 'Specialty Metals & Forgings: The Bottleneck Between Raw Material and Part',
        imageUrl: unsplashSrc('photo-1504917595217-d4dc5ebe6122', 1200),
        imageAlt: 'Steel and specialty materials in an industrial production setting',
        callout: {
          title: 'The Strategic Bottleneck Between Raw Material and Finished Part',
          body: 'Titanium, nickel, and cobalt intermediates with long qualification cycles earn institutional multiples when specification lock-in is real. Pricing power is rooted in AMS specs, sole- or dual-source positions, and domestic processing, not spot metal indices. Furnaces, mills, and forge presses take years and heavy capex to replicate; that is the moat.',
          metrics: [
            { value: '$25–60B', label: 'NA Market Size' },
            { value: '20–35%', label: 'EBITDA Margin (Quality)' },
            { value: '8–12x+', label: 'M&A Multiple Band' },
          ],
        },
        whyCritical: {
          heading: 'Why this layer is strategically critical',
          points: [
            'Designed-in suppliers often stay for the life of the aerospace or defense platform, switching costs are measured in years.',
            'Furnaces, mills, and forge capacity take years and heavy capex to replicate; greenfield rarely solves near-term shortage.',
            'Strategics pay for supply security; sponsors pay for platform buildouts, overlap creates competitive tension.',
            'Index pass-through discipline separates durable margins from commodity metal risk.',
            'Domestic qualification paths attract both strategic and financial capital amid reshoring overlays.',
          ],
          alert:
            'Aerospace-grade processing capacity remains geographically concentrated. Domestic qualification paths attract both strategic and financial capital, but only when surcharge language and inventory risk are clean.',
        },
        cards: [
          {
            icon: 'supply',
            title: 'Specification-Locked Demand',
            body: 'Program lock-in underwrites longer hold periods and sticky revenue. AMS and OEM specs are the commercial moat, not the melt shop alone.',
          },
          {
            icon: 'capacity',
            title: 'Capex & Lead-Time Barriers',
            body: 'Incumbent melt/forge capacity is the scarce inventory. Lead times and utilization are origination signals for both M&A and capex financing.',
          },
          {
            icon: 'capital',
            title: 'Strategic vs Sponsor Tension',
            body: 'Competitive tension peaks when supply-security and platform theses overlap on the same asset.',
          },
          {
            icon: 'margin',
            title: 'Index Pass-Through Discipline',
            body: 'Clean surcharge language protects margins; weak language is a re-trade risk and a credit concern.',
          },
          {
            icon: 'defense',
            title: 'Defense Stockpile Adjacency',
            body: 'Critical minerals and defense stockpile themes widen the buyer set for domestic processors with the right qualifications.',
          },
          {
            icon: 'policy',
            title: 'Domestic Content Overlay',
            body: 'Treat policy as demand support, underwrite plant economics and qualifications first.',
          },
        ],
        marketIntel: {
          certificationsTitle: 'Key certifications that drive value',
          certifications: [
            { label: 'AMS Specs', value: 'Aerospace material specifications that lock demand' },
            { label: 'NADCAP', value: 'Heat treat / materials processes accreditation' },
            { label: 'OEM Approvals', value: 'Sole- or dual-source qualifications on programs' },
            { label: 'ITAR / DFARS', value: 'Defense supply-chain compliance and domestic preference' },
            { label: 'ISO / AS9100', value: 'Quality system required by most institutional buyers' },
            { label: 'Mill Cert Traceability', value: 'Heat/lot traceability that survives diligence' },
          ],
          censusTitle: 'Company universe (North America)',
          census: [
            { label: 'Specialty metals / forge processors', value: '1,500–2,500' },
            { label: 'Aero-qualified melt / forge nodes', value: '300–500' },
            { label: 'Institutional-ready assets', value: '100–180' },
            { label: 'Sponsor-owned platforms', value: '20–35' },
            { label: 'Strategic-premium candidates', value: '40–70' },
          ],
          geoTitle: 'Key geographic clusters',
          geo: [
            {
              region: 'US Midwest',
              hubs: 'Forge belt, traditional melt/forge and finishing density',
            },
            {
              region: 'US Aero Metals',
              hubs: 'Pacific Northwest aero metals, Southeast specialty mills',
            },
            {
              region: 'Canada',
              hubs: 'Quebec / Ontario specialty metals corridors',
            },
          ],
        },
        buyerLandscape: [
          {
            buyer: 'Materials strategics / OEMs',
            motive: 'Secure sole-source intermediates and domestic processing',
          },
          {
            buyer: 'Industrial PE',
            motive: 'Platform buildouts around qualified melt/forge capacity',
          },
          {
            buyer: 'Defense industrial-base buyers',
            motive: 'Domestic content and stockpile-adjacent capacity',
          },
          {
            buyer: 'Inventory / ABL lenders',
            motive: 'Fund alloy inventory with clean pass-through and hedges',
          },
        ],
        originationSignals: [
          'Sole-source AMS positions with aging ownership and no internal succession',
          'Forge or furnace utilization high with multi-year OEM forecasts',
          'Weak surcharge language creating margin noise, fixable pre-process value creation',
          'Strategic inbound interest without a structured process, timing opportunity',
          'Capex plan for finishing capacity behind existing melt qualifications',
        ],
        financingNeeds: [
          {
            title: 'Inventory / Alloy Working Capital',
            ticket: '$5M – $40M',
            body: 'Fund high-value alloy inventory and long conversion cycles. Structures work when pass-through, hedges, and customer contracts are cleanly documented.',
            pitch:
              'With clean pass-through, inventory is working capital, not speculative metal risk. Show the surcharge language early.',
          },
          {
            title: 'Furnace / Forge Capex',
            ticket: '$5M – $50M',
            body: 'Expand melt, forge, or finishing capacity behind existing qualifications. Capex behind approvals is scarce capacity creation.',
            pitch:
              'Underwrite the qualification and customer backlog, not just the equipment invoice.',
          },
          {
            title: 'Strategic / Sponsor Equity',
            ticket: '$25M – $150M+',
            body: 'Recapitalize or sell platforms with sole-source positions and domestic processing. Competitive tension is highest when strategics and sponsors overlap.',
            pitch:
              'Supply-security premiums are real when OEMs cannot dual-source quickly, map both buyer sets before launch.',
          },
        ],
      },
      {
        id: 'composites-structures',
        number: '05',
        label: 'Composites',
        heading: 'Composites & Structures: Lightweight Structures with Long Qualification Cycles',
        imageUrl: unsplashSrc('photo-1581092918056-0c4c3acd3789', 1200),
        imageAlt: 'Advanced manufacturing and composite materials production environment',
        callout: {
          title: 'Where Airframe Lightweighting Meets Scarce Process Labor',
          body: 'Composite structures and bonded assemblies sit at the center of next-generation airframe and defense programs. Attractive middle-market targets own autoclave or out-of-autoclave capacity, NADCAP composites processes, trained laminators, and OEM-approved build-to-print or build-to-spec positions. Qualification cycles are long; that is the barrier, and the premium.',
          metrics: [
            { value: 'NADCAP', label: 'Composites Process Moat' },
            { value: 'Long', label: 'OEM Qualification Cycle' },
            { value: '9–13x', label: 'Quality Platform Band' },
          ],
        },
        whyCritical: {
          heading: 'Why this layer is strategically critical',
          points: [
            'Next-gen airframes and defense platforms increase composite content, demand is structural, not cyclical alone.',
            'Trained laminators and bonding technicians are scarce; labor is often the binding constraint, not floor space.',
            'Autoclave and OOA capacity with OEM approvals prices as strategic scarcity.',
            'Build-to-print shops with sticky programs can re-rate as they move into higher-complexity assemblies.',
            'Add-on logic is strong: platforms buy approved processes and labor pools faster than they train them.',
          ],
          alert:
            'Commodity layup without OEM approvals or NADCAP depth rarely clears institutional buyers. Lead with qualification files, trained headcount, and program backlog.',
        },
        cards: [
          {
            icon: 'aviation',
            title: 'Airframe Content Growth',
            body: 'Composite share of airframe and secondary structures continues to rise, capacity that is already approved captures disproportionate demand.',
          },
          {
            icon: 'process',
            title: 'Bonding & Assembly Complexity',
            body: 'Moving from simple panels to bonded assemblies expands wallet share and switching costs.',
          },
          {
            icon: 'capacity',
            title: 'Autoclave / OOA Scarcity',
            body: 'Qualified thermal cycle capacity is finite; utilization and queue times are origination signals.',
          },
          {
            icon: 'supply',
            title: 'Material Traceability',
            body: 'Prepreg lot control and out-time discipline are diligence essentials, weak systems re-trade deals.',
          },
          {
            icon: 'capital',
            title: 'Platform Tuck-Ins',
            body: 'PE composites platforms buy geography and labor pools adjacent to OEM clusters.',
          },
          {
            icon: 'defense',
            title: 'Defense Structures Adjacency',
            body: 'UAV, rotorcraft, and defense structures widen the end-market set beyond commercial aero cycles.',
          },
        ],
        marketIntel: {
          certificationsTitle: 'Key certifications that drive value',
          certifications: [
            { label: 'NADCAP Composites', value: 'Core process accreditation for aero composites' },
            { label: 'AS9100', value: 'Quality system for OEM and Tier-1 work' },
            { label: 'OEM Approvals', value: 'Build-to-print / build-to-spec source approvals' },
            { label: 'ITAR', value: 'Defense structures and controlled programs' },
            { label: 'NDT Adjacency', value: 'In-house or partner NDT that shortens cycle time' },
            { label: 'Material Specs', value: 'Approved prepreg / resin systems on program BOMs' },
          ],
          censusTitle: 'Company universe (North America)',
          census: [
            { label: 'Composites fabricators (broad)', value: '2,000–3,500' },
            { label: 'Aero-qualified composites shops', value: '400–700' },
            { label: 'Institutional-ready platforms', value: '80–140' },
            { label: 'Active PE platforms', value: '15–30' },
            { label: 'Labor-constrained premium assets', value: 'High interest' },
          ],
          geoTitle: 'Key geographic clusters',
          geo: [
            {
              region: 'US',
              hubs: 'Southern California, Washington, Wichita, Southeast aero corridors',
            },
            {
              region: 'Canada',
              hubs: 'Montreal / Quebec, strong aero composites and structures density',
            },
            {
              region: 'Defense nodes',
              hubs: 'Clusters near rotorcraft, UAV, and defense OEMs',
            },
          ],
        },
        buyerLandscape: [
          {
            buyer: 'Airframe / structures strategics',
            motive: 'Secure approved layup and bonding capacity for rate increases',
          },
          {
            buyer: 'Composites PE platforms',
            motive: 'Labor pools, autoclave hours, and geographic fill-ins',
          },
          {
            buyer: 'Defense primes',
            motive: 'ITAR-ready structures capacity with clean quality history',
          },
          {
            buyer: 'Capex lenders',
            motive: 'Finance autoclaves / OOA lines behind OEM LOIs',
          },
        ],
        originationSignals: [
          'Autoclave queues extending while OEM rate plans step up',
          'Laminator / bonding tech attrition risk with aging skilled workforce',
          'Build-to-print shop winning first bonded assembly packages, mix inflection',
          'PE platform seeking composites tuck-in near a major OEM campus',
          'Owner succession with NADCAP composites and clean material traceability',
        ],
        financingNeeds: [
          {
            title: 'Working Capital / Materials',
            ticket: '$2M – $20M',
            body: 'Fund prepreg, consumables, and WIP with strict out-time and lot control. Lenders need to see inventory discipline, not just balances.',
            pitch:
              'Composites working capital is a process-control story, show traceability and scrap rates alongside the borrowing base.',
          },
          {
            title: 'Autoclave / Cell Capex',
            ticket: '$1M – $30M',
            body: 'Expand thermal cycle and bonding capacity behind existing OEM approvals. Pair equipment with the programs those hours will serve.',
            pitch:
              'Capex behind approvals buys scarce hours, underwrite the qualification path and labor plan together.',
          },
          {
            title: 'Acquisition / Platform Capital',
            ticket: '$15M – $90M',
            body: 'Buy complementary composites shops for labor, geography, or process adjacency. Integration must protect NADCAP and trained teams.',
            pitch:
              'You are buying people and approvals as much as assets, frame transition for process owners and laminators.',
          },
        ],
      },
      {
        id: 'precision-assemblies',
        number: '06',
        label: 'Assemblies',
        heading: 'Precision Assemblies: From Parts to Systems, Higher Wallet Share',
        imageUrl: unsplashSrc('photo-1581092160562-40aa08e78837', 1200),
        imageAlt: 'Precision industrial assembly and advanced manufacturing floor',
        callout: {
          title: 'The Step-Up from Commodity Parts to Sticky Assemblies',
          body: 'Precision assemblies, sub-systems, and kitted modules sit one layer closer to the OEM than stand-alone machining. Attractive targets combine machining or fabrication with assembly, test, and program management, earning higher wallet share and stickier positions. The thesis is capability stacking: parts + assembly + quality systems that OEMs prefer not to re-qualify.',
          metrics: [
            { value: 'Higher', label: 'Wallet Share vs Parts' },
            { value: 'Sticky', label: 'Program Positions' },
            { value: '10–13x', label: 'Quality Assembly Premium' },
          ],
        },
        whyCritical: {
          heading: 'Why this layer is strategically critical',
          points: [
            'OEMs prefer fewer, deeper suppliers, assemblies compress the supply base and raise switching costs.',
            'Test, QA, and program management capabilities are harder to recreate than a single machining cell.',
            'Margin mix improves as companies climb from piece parts into kitted or tested assemblies.',
            'Defense and aero programs increasingly award packages, not isolated part numbers.',
            'Platforms can bolt machining add-ons underneath an assembly-led commercial relationship.',
          ],
          alert:
            'Assembly businesses without program ownership or test capability can look like glorified kitting. Diligence should prove value-add depth and customer stickiness.',
        },
        cards: [
          {
            icon: 'process',
            title: 'Capability Stacking',
            body: 'Machining + assembly + test creates a moat that pure job shops cannot match on complex programs.',
          },
          {
            icon: 'aviation',
            title: 'Program Management',
            body: 'Customers pay for schedule ownership and issue resolution, not just parts on a dock.',
          },
          {
            icon: 'margin',
            title: 'Mix Migration',
            body: 'Moving wallet share from piece parts to assemblies often re-rates EBITDA before revenue jumps.',
          },
          {
            icon: 'supply',
            title: 'Supplier Consolidation Tailwinds',
            body: 'OEM supply-base reduction favors shops that can take broader work packages.',
          },
          {
            icon: 'defense',
            title: 'Defense Sub-Systems',
            body: 'ITAR-ready assembly and test capacity attracts defense primes seeking dual-source depth.',
          },
          {
            icon: 'capital',
            title: 'Buy-and-Build Fit',
            body: 'Assembly-led platforms absorb machining tuck-ins cleanly when quality systems are aligned.',
          },
        ],
        marketIntel: {
          certificationsTitle: 'Key certifications that drive value',
          certifications: [
            { label: 'AS9100', value: 'Baseline for aero assembly and manufacturing' },
            { label: 'ITAR', value: 'Defense assembly and controlled technical data' },
            { label: 'OEM Approvals', value: 'Assembly / source approvals on program BOMs' },
            { label: 'ISO / AS9110', value: 'MRO or maintenance adjacency where relevant' },
            { label: 'Test / Calibration', value: 'In-house test capability that shortens OEM cycles' },
            { label: 'CMMC / Cyber', value: 'Increasing gate for defense-adjacent program data' },
          ],
          censusTitle: 'Company universe (North America)',
          census: [
            { label: 'Precision assembly / kitting firms', value: '5,000–8,000' },
            { label: 'Aero/defense-qualified assemblers', value: '1,000–1,800' },
            { label: 'Institutional-ready platforms', value: '200–350' },
            { label: 'PE-backed assembly platforms', value: '30–50' },
            { label: 'Mix-migration premium candidates', value: 'Elevated interest' },
          ],
          geoTitle: 'Key geographic clusters',
          geo: [
            {
              region: 'US',
              hubs: 'Southern California, Northeast corridor, Midwest aero/defense nodes, Texas',
            },
            {
              region: 'Canada',
              hubs: 'Montreal, Toronto, aero systems and assembly adjacency',
            },
            {
              region: 'Nearshore',
              hubs: 'Select Mexico nodes for lower-complexity assembly (ITAR boundaries apply)',
            },
          ],
        },
        buyerLandscape: [
          {
            buyer: 'Tier-1 systems suppliers',
            motive: 'Verticalize assemblies and reduce multi-tier coordination risk',
          },
          {
            buyer: 'PE industrials platforms',
            motive: 'Assembly-led platforms that can absorb machining add-ons',
          },
          {
            buyer: 'Defense primes',
            motive: 'ITAR-ready sub-system capacity with test capability',
          },
          {
            buyer: 'Growth equity / lenders',
            motive: 'Fund capability stacking and working capital for larger packages',
          },
        ],
        originationSignals: [
          'Shop winning first kit / assembly packages from long-standing machining customers',
          'OEM supply-base reduction RFIs naming assembly depth as a requirement',
          'Test capability investment plan with customer LOIs but delayed capital',
          'Owner succession with program management bench intact',
          'Platform seeking assembly “tip of spear” before machining roll-up',
        ],
        financingNeeds: [
          {
            title: 'Working Capital / Package Growth',
            ticket: '$3M – $35M',
            body: 'Fund inventory, WIP, and longer billing cycles as wallet share moves into assemblies. Facilities should reflect package complexity, not trailing parts turns.',
            pitch:
              'Assembly growth stretches working capital before EBITDA catches up, size facilities to the package ramp.',
          },
          {
            title: 'Test / Capability Capex',
            ticket: '$500K – $15M',
            body: 'Fund test equipment, fixtures, and assembly cells that unlock higher-complexity awards.',
            pitch:
              'Capability capex is an award-enabler, bring the customer conversation with the equipment request.',
          },
          {
            title: 'Platform / Acquisition Capital',
            ticket: '$20M – $120M',
            body: 'Build assembly-led platforms and bolt on machining or coatings for vertical depth.',
            pitch:
              'The thesis is wallet share and stickiness, show program ownership, not just part counts.',
          },
        ],
      },
      {
        id: 'deal-implications',
        number: '07',
        label: 'Deal Implications',
        heading: 'How Processes Should Be Built',
        imageUrl: unsplashSrc('photo-1454165804606-c3d57bc86b40', 1200),
        imageAlt: 'Deal team reviewing transaction materials and process documentation',
        callout: {
          title: 'Preparation Beats Narrative in This Vertical',
          body: 'Buyers and lenders underwrite certifications, audit history, backlog quality, labor durability, and utilization as carefully as EBITDA bridges. Processes that lead with scarce-capacity evidence and financing realism close cleaner than those that lead with growth stories alone. In H2 2026, close certainty is itself a valuation driver.',
          metrics: [
            { value: 'Pre-LOI', label: 'Diligence Window Focus' },
            { value: 'Lower MM', label: 'More Durable Multiple Room' },
            { value: 'Less Lev.', label: 'Higher Close Certainty' },
          ],
        },
        whyCritical: {
          heading: 'Why process design matters now',
          points: [
            'Financing terms are no longer a one-way tailwind for leverage-heavy industrials, optionality must be built before launch.',
            'Parallel strategic and PE tracks create real tension without manufactured FOMO when the asset is truly scarce.',
            'Labor-model and automation exposure is now a live underwriting question, not a footnote.',
            'Certification remediation discovered mid-process re-prices deals; fix gaps before the teaser.',
            'Management continuity through the process protects forecasts, missed months re-trade harder in this vertical.',
          ],
          alert:
            'Structures that depend on aggressive leverage carry more execution risk in H2 2026. Build financing optionality and diligence completeness before launch.',
        },
        cards: [
          {
            icon: 'process',
            title: 'Diligence-First Data Rooms',
            body: 'Lead with certificates, scorecards, backlog by program, utilization by cell, and labor depth, then the financials.',
          },
          {
            icon: 'capital',
            title: 'Financing Realism',
            body: 'Less leverage-dependent structures close cleaner than 2024 playbooks. Map debt and equity paths in parallel.',
          },
          {
            icon: 'defense',
            title: 'Buyer Mapping',
            body: 'Separate supply-security strategics from density-seeking PE platforms, different value stories, same asset.',
          },
          {
            icon: 'policy',
            title: 'Policy as Overlay, Not Thesis',
            body: 'Underwrite plant economics and qualifications first; treat reshoring as demand support, not the core narrative.',
          },
          {
            icon: 'supply',
            title: 'Concentration Framing',
            body: 'High customer concentration can clear if contracts, switching costs, and scorecards are strong, frame it early.',
          },
          {
            icon: 'margin',
            title: 'Quality of Earnings Focus',
            body: 'Mix, surcharges, and one-time capacity costs need clean bridges or they become mid-process noise.',
          },
        ],
        marketIntel: {
          certificationsTitle: 'Diligence artifacts that clear processes',
          certifications: [
            { label: 'Cert pack', value: 'AS9100, NADCAP, ITAR, OEM approvals, current and historical' },
            { label: 'Backlog file', value: 'Program-level release schedule vs. forecast demand' },
            { label: 'Customer scorecards', value: 'Quality / delivery history with trend lines' },
            { label: 'Utilization model', value: 'Cell-level capacity, bottlenecks, and quoted lead times' },
            { label: 'Labor file', value: 'Key process owners, tenure, and succession risk' },
            { label: 'Permit / compliance', value: 'Environmental and trade compliance status' },
          ],
          censusTitle: 'Typical process participants',
          census: [
            { label: 'Strategic acquirers (OEMs / Tier-1s)', value: 'High urgency on scarce nodes' },
            { label: 'Industrial PE platforms', value: 'Add-on focused; selective on platforms' },
            { label: 'Direct lenders / BSL', value: 'Selective on leverage; backlog-sensitive' },
            { label: 'Family offices', value: 'Durable cash-flow buyers; less auction-driven' },
            { label: 'Equipment finance', value: 'Parallel path on cell-level capex' },
          ],
          geoTitle: 'Process geography notes',
          geo: [
            {
              region: 'US',
              hubs: 'Processes concentrate where certifications and customers already sit',
            },
            {
              region: 'Cross-border',
              hubs: 'Canada / US adjacency often widens both buyer and lender sets',
            },
            {
              region: 'Nearshore',
              hubs: 'Use carefully, ITAR and customer approval boundaries are real',
            },
          ],
        },
        buyerLandscape: [
          {
            buyer: 'Sell-side advisors',
            motive: 'Sequence prep → positioning → parallel tracks for close certainty',
          },
          {
            buyer: 'Buy-side / corporates',
            motive: 'Map scarce nodes early; avoid auction surprises on bottleneck assets',
          },
          {
            buyer: 'Lenders',
            motive: 'Engage pre-launch when backlog and cert quality support structure',
          },
          {
            buyer: 'Management teams',
            motive: 'Protect operating cadence, forecast misses re-price faster here',
          },
        ],
        originationSignals: [
          'Cert remediation underway with clear close date, pre-process value creation window',
          'Inbound strategic interest without advisor, timing to run a controlled process',
          'Platform needing financing certainty before LOI on a scarce add-on',
          'Owner willing to stay 12–24 months, continuity that clears committees',
          'QoE or working-capital issues known early, better than mid-diligence surprises',
        ],
        financingNeeds: [
          {
            title: 'Sell-Side Preparation Capital',
            ticket: 'Advisory',
            body: 'QoE, cert remediation, data-room architecture, and buyer mapping before launch. The highest-ROI spend is fixing diligence gaps before buyers price them.',
            pitch:
              'Preparation is the product. Gaps found in diligence become price; gaps fixed pre-launch become credibility.',
          },
          {
            title: 'Acquisition Financing',
            ticket: '$15M – $150M',
            body: 'Debt and equity packages sized to industrial credit reality in 2026. Structure for close certainty, not maximum leverage on a thin sample.',
            pitch:
              'Bring financing optionality to the launch memo. Certainty can beat a higher headline multiple that will not fund.',
          },
          {
            title: 'Recapitalization / Growth Equity',
            ticket: '$10M – $100M',
            body: 'Fund platform buildout or partial liquidity without stalling operations. Keep the operating cadence intact through the process.',
            pitch:
              'Missed forecasts re-price deals in this vertical. Design the process around continuity, not just valuation.',
          },
        ],
      },
    ],
  },
];

export function getStrategyReportBySlug(slug: string): StrategyReport | undefined {
  return strategyReports.find((report) => report.slug === slug);
}
