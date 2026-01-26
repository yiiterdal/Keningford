# Style Guide - Greyhawk Capital Website

## Color Palette

### Primary Colors
- **Navy Blue**: `#001f4d` (Primary brand color)
- **Navy Dark**: `#001530` (Hover states, darker sections)
- **Navy Light**: `#003366` (Secondary elements)
- **White**: `#ffffff` (Background, text on navy)

### Neutral Colors
- **Gray-100**: `#f5f5f5` (Light backgrounds)
- **Gray-200**: `#e5e5e5` (Borders)
- **Gray-600**: `#666666` (Secondary text)
- **Gray-700**: `#333333` (Body text on light backgrounds)
- **Gray-800**: `#333333` (Headings on light backgrounds)

## Typography

### Font Families
- **Primary (Sans-serif)**: Inter
  - Weights: 300, 400, 500, 600, 700
  - Used for: Body text, navigation, UI elements
- **Secondary (Serif)**: Georgia
  - Used for: Headings (optional, currently using Inter for all)

### Font Sizes & Hierarchy
- **H1 (Hero)**: 4xl (2.25rem) - 7xl (4.5rem) responsive
- **H2 (Section Titles)**: 3xl (1.875rem) - 5xl (3rem) responsive
- **H3 (Subsection Titles)**: 2xl (1.5rem) - 3xl (1.875rem)
- **Body**: base (1rem) / lg (1.125rem)
- **Small Text**: sm (0.875rem)

### Line Heights
- Headings: 1.2
- Body text: 1.6 (relaxed)

## Spacing

### Section Spacing
- **Section Padding**: 5rem (80px) top/bottom on desktop, 3rem (48px) on mobile
- **Container Max Width**: 1280px
- **Container Padding**: 1.5rem (24px) horizontal

### Component Spacing
- **Grid Gaps**: 8 (32px) for cards, 12 (48px) for major sections
- **Element Margins**: Consistent 4 (16px), 6 (24px), 8 (32px) scale

## Components

### Buttons
- **Primary (Navy)**: 
  - Background: `#001f4d`
  - Text: White
  - Hover: `#001530` (darker navy)
  - Padding: 8px (32px) x 4px (16px)
  - Border radius: 6px (0.375rem)
  - Transition: 300ms ease

- **Secondary (White)**:
  - Background: White
  - Text: Navy (`#001f4d`)
  - Hover: Light gray background
  - Same padding and styling as primary

### Cards
- Background: White or `#f5f5f5`
- Border: 1px solid `#e5e5e5`
- Border radius: 8px (0.5rem)
- Shadow: Subtle hover effect (shadow-xl on hover)
- Padding: 8 (32px)

### Navigation
- **Sticky Header**: Fixed at top, transitions from white to navy on scroll
- **Active State**: Highlighted language button, hover states on links
- **Mobile**: Hamburger menu with slide-down animation

## Animations

### Scroll Animations
- **Fade In**: 0.6s ease-in-out
- **Slide Up**: 0.6s ease-out (translateY 20px → 0)
- **Stagger Delay**: 0.1s increments for sequential animations

### Hover Effects
- **Scale**: 1.05 (5% increase) on buttons and cards
- **Shadow**: Enhanced shadow on hover (shadow-lg → shadow-2xl)
- **Color Transitions**: 300ms ease for all color changes

## Responsive Breakpoints

- **Mobile**: < 768px (default)
- **Tablet**: 768px - 1024px (md: prefix)
- **Desktop**: > 1024px (lg: prefix)

## Grid Systems

- **1 Column**: Mobile (default)
- **2 Columns**: Tablet (md:grid-cols-2)
- **3-4 Columns**: Desktop (lg:grid-cols-3, lg:grid-cols-4)

## Language Support

- **Languages**: English (EN) and Turkish (TR)
- **Language Switcher**: Top right navigation
- **Storage**: Language preference stored in localStorage
- **Default**: English

## Accessibility

- **Color Contrast**: WCAG AA compliant
- **Semantic HTML**: Proper heading hierarchy, ARIA labels
- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Descriptive alt text and labels


