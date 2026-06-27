/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  /**
   * Safelist: classes referenced via dynamic array lookup (e.g.
   * COL_OFFSET[i % 3]) are invisible to Tailwind's JIT content scanner,
   * which only matches literal class-name strings in source. Every
   * dynamically-applied offset/stagger class used anywhere in the
   * codebase must be listed here explicitly or it gets purged from the
   * production build silently (no error - the layout just renders flat).
   * This bug affected ComplianceArchitecture.jsx (home), RegistrationsFocus.jsx
   * and RegSvcDocuments.jsx identically - fixed centrally here rather than
   * per-component so future category/service pages using the same
   * staggered-offset pattern don't reintroduce it.
   */
  safelist: [
    "md:mt-0", "md:mt-2", "md:mt-4", "md:mt-6", "md:mt-8", "md:mt-10", "md:mt-12",
    "lg:mt-0", "lg:mt-2", "lg:mt-4", "lg:mt-6", "lg:mt-8", "lg:mt-10", "lg:mt-12", "lg:mt-16", "lg:mt-20", "lg:mt-24",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        ak: {
          ink: '#1C2A39',
          slate: '#2E3B4E',
          navy: '#111C27',
          canvas: '#EFEFEF',
          mist: '#F8F9FA',
          orange: '#F28C28',
          'orange-dark': '#C66A18',
          // sampled directly from the Penalties-section reference image
          // (multiple solid-fill points averaged to #FE6F06, rounded to
          // this clean hex) -- a more saturated/redder orange than the
          // original ak.orange. Kept as a separate token rather than
          // overwriting ak.orange, since that's used across sections
          // already confirmed by the client and changing it globally
          // would shift colours they haven't asked to revisit.
          orange2: '#FF6B05',
          // sampled from the ESI card's solid tag-chip pixels in the
          // same reference image (averaged to #082C6F) -- a genuine
          // navy-BLUE, distinct from the much darker/charcoal ak.navy
          // already used elsewhere on the page.
          blue2: '#0C2F73',
          // Payroll Processing hero marquee strip. Client asked specifically
          // for #800020 (a deep maroon/burgundy) in place of a generic bright
          // blue, as a colour that "adapts Aksharaa" rather than a literal
          // reference-image colour swap. Kept as its own token since it's
          // a new addition to the page's palette, not a reuse of an
          // existing dark tone (ak.ink/ak.navy).
          burgundy: '#800020',
          // Flexi Staffing hero reference image. Sampled directly from the
          // "Zero Compliance" headline text and the filled CTA button pixels
          // (both converged independently on ~#EB5061), rounded to this
          // clean hex. Distinct from ak.orange/orange2 — this is the page's
          // new coral-red accent, used for headline emphasis, the primary
          // CTA fill, and the hero illustration's line-art stroke colour.
          coral: '#EB5061',
          // Flexi Staffing "Who Needs This" section stat band. Sampled
          // directly from the reference image (averaged across 7 clean
          // points along the band, ignoring icon-circle pixels), rounded
          // to this clean hex. Deliberately a separate token from
          // ak.burgundy (#800020, Payroll Processing hero marquee) — that
          // one was a client-specified colour choice for a different page;
          // this one is a distinct, darker, more muted maroon read
          // directly off this reference, and the two pages aren't meant
          // to share an identical accent.
          // Flexi Staffing "Industries" section icon badges. Sampled from
          // the reference's circular gradient badges (red corner ~#DF3A3E,
          // blue corner ~#3959BC). Used only as inline gradient stops
          // (not referenced as standalone Tailwind classes), so no new
          // ak.* token needed — documented here for traceability since
          // the values live in the component file, not this config.
          burgundy2: '#56353A',
          // Flexi Staffing "Process" section, direct client colour spec
          // for the step buttons: crimson for the capsule/button fill,
          // sand for the icon-circle fill, sage for hover/interaction
          // states. Same #7E8987 already used as a literal hex on the
          // Section 4 background gradient (that one predates this
          // token and hasn't been retrofitted to reference it, to avoid
          // an unrelated diff on a section currently on hold) — named
          // properly here since this section reuses it three times.
          crimson: '#CB4154',
          sand: '#F6C28B',
          sage: '#7E8987',
          // Flexi Staffing "Scope" section (What We Manage), client reference
          // image. Sampled via PIL histogram from two separate icon badges
          // (Sourcing & Screening, MIS Reporting) — clean fill pixels
          // converged on #111C30/#131B2E, rounded to this value. Deliberately
          // a separate token from ak.navy (#111C27): close but not identical,
          // and this one is reference-sampled specifically for this section's
          // icon badges rather than reused from the site-wide dark palette.
          scopeNavy: '#121C30',
          // Same reference image, sampled from the orange/amber line-icon
          // strokes on two badges (magnifying-glass handle, chart bars) —
          // clean core pixels converged on #F59237/#F79226, rounded to this
          // value. Distinct from ak.orange (#F28C28) and ak.orange2
          // (#FF6B05): brighter/more amber than either, and used only for
          // this section's icon glyphs against the navy badge fill.
          scopeAmber: '#F59433',
          // Flexi Staffing "Compliance Layer" section, client reference image.
          // Full palette below sampled via PIL from the reference's dark
          // navy section, glassmorphic coverage card, and 5 distinctly
          // coloured icon-badge rows. Kept as a self-contained group since
          // this section introduces more new colours at once than any
          // section so far — grouped together here for scannability rather
          // than interleaved with unrelated tokens.
          complianceBg: '#001745', // section background, sampled from a clean corner away from text
          complianceOrange: '#F17602', // "Responsibility" heading accent word
          complianceCheck: '#0F54B5', // checklist checkmark circle fill
          complianceCardBorder: '#286DD4', // glassmorphic coverage card's bright blue edge highlight
          // Originally sampled at #86D65C / #E0993E directly from the
          // reference image, both tuned for a dark background. Once the
          // coverage card was switched to a solid gold fill (#ECCE8E, see
          // below) per direct instruction, both failed contrast badly —
          // #86D65C measured 1.17:1 against the gold, #E0993E measured
          // 1.57:1, both far under the WCAG AA 4.5:1 minimum for text.
          // Replaced with deeper shades in the same colour family that
          // clear AA comfortably (5.0:1 / 5.5:1) while still reading as
          // "green = good" / "amber = deadline" against the gold.
          complianceGreen: '#15602E', // "Day 1 Coverage" / "Zero" value text (positive outcomes)
          complianceDeadline: '#7A3D06', // "By 15th" / "Half-Yearly" / "Feb 15th" value text (deadline-type)
          complianceStatIcon: '#103792', // bottom stat-band circular icon backgrounds (all 5, same blue)
          // User-specified, not sampled: fill for the "Compliance Coverage
          // at a Glance" card itself, per direct instruction. Originally
          // #ECCE8E (a warmer gold), swapped to this lighter pale cream per
          // a follow-up instruction. Re-checked contrast for all card text
          // tokens against the new value — ak.ink (13.4:1), complianceGreen
          // (7.0:1), complianceDeadline (7.7:1) — all comfortably clear AA,
          // so no text-colour changes were needed alongside this swap.
          complianceCardFill: '#FEF5DC',
          // Per-row icon badge fill + accent pairs (badge = muted square
          // background, accent = the brighter icon glyph colour on top).
          complianceRow1Badge: '#0E2E7D', // PF & ESI Enrolment — blue
          complianceRow1Accent: '#3B6FE0',
          complianceRow2Badge: '#1E286F', // Monthly PF Deposit Deadline — indigo
          complianceRow2Accent: '#7B7FFD',
          complianceRow3Badge: '#0C345B', // ESI Returns — teal
          complianceRow3Accent: '#32AFC3',
          complianceRow4Badge: '#1B235E', // CLRA Annual Returns — purple
          complianceRow4Accent: '#8979F5',
          complianceRow5Badge: '#3E1F42', // Penalty Risk to Client — magenta/rose
          complianceRow5Accent: '#B1446F',
          // Flexi Staffing "Difference" section (Section 4), Techno-template
          // reference image ("Why Choose Us"). Sampled from a clean patch
          // of the section's blue overlay with minimal photo content
          // showing through (top-right area, away from the people in the
          // photo) — tight cluster converged on #1E52AA, rounded to this
          // value. Distinct from ak.blue2 (#0C2F73, darker/more navy) and
          // ak.complianceCheck (#0F54B5, different provenance/section) —
          // this is its own reference-sampled value for this section's
          // specific photo-overlay treatment.
          differenceOverlay: '#1E52AA',
          // PF & ESI Returns Filing hero, client reference image — the soft
          // peach/orange circle sitting behind the model cutout. Sampled
          // via PIL histogram from a clean patch of the circle, away from
          // the photo and badge — clean fill pixels converged on #FEAF7B.
          // Distinct from ak.orange (#F28C28) and ak.orange2 (#FF6B05):
          // both noticeably more saturated/darker — this is deliberately
          // a soft background tint, not a UI accent colour.
          returnsCirclePeach: '#FEAF7B',
          // PF & ESI Returns Filing "What Aksharaa Files" section (Section 2),
          // client reference image. Two parallel theme groups (PF navy/blue,
          // ESI red), each sampled via PIL from clean fill regions —
          // multiple points averaged per value rather than a single pixel,
          // to avoid anti-aliased edge contamination near icon strokes/text.
          returnsPfHeader: '#001B57', // PF card header band fill
          returnsPfChip: '#F1F5FD', // PF row icon chip background
          returnsPfIcon: '#10429D', // PF row icon stroke colour
          returnsPfPillText: '#041E5B', // PF "Monthly + Annual" pill text
          returnsEsiHeader: '#AD1118', // ESI card header band fill
          returnsEsiChip: '#FEF3F3', // ESI row icon chip background
          returnsEsiIcon: '#B21112', // ESI row icon stroke colour
          returnsEsiPillText: '#AC1116', // ESI "Monthly + Annual" pill text
          // PF & ESI Returns Filing "Filing Calendar" section (Section 3),
          // client reference image. Sampled via PIL from the "Every Month"
          // tile's circular icon badge fill (2218 clean points averaged,
          // ignoring icon-glyph and edge anti-aliasing pixels) — converged
          // on #F57418. Distinct from ak.orange (#F28C28) and ak.orange2
          // (#FF6B05): this section's specific badge tone per the reference,
          // kept separate rather than substituting an existing orange.
          returnsCalendarBadge: '#F57418',
          // PF & ESI Returns Filing "Scope" section (Section 4), client
          // reference image. Sampled via PIL from clean interior points,
          // away from text and icons.
          returnsScopeNavy: '#02213F', // Filing Guarantee card bg + 100% Satisfaction badge bg (same dark navy, confirmed by separate sample sets converging within 2 units per channel)
          returnsScopeBlueCard: '#EAF2FD', // "Trusted Experts" card background
          returnsScopeBlue: '#0B5DDD', // "Learn More" button fill
          // PF & ESI Returns Filing "Penalties" section (Section 5), client
          // reference image. The dark section background, PF badge circle,
          // ESI badge circle, and row icon-chip colours all converged
          // within normal sampling variance of existing tokens
          // (returnsScopeNavy, returnsEsiHeader, returnsPfChip/Icon,
          // returnsEsiChip/Icon) and reuse those rather than adding near-
          // duplicates. Only the penalty cards' light background is
          // genuinely distinct — a neutral light grey, not pure white.
          returnsPenaltyCard: '#F0F0F0',
          // PF & ESI Returns Filing "FAQs" section (Section 6), client
          // reference image + photo collage asset. PIL-sampled (most-
          // common-pixel method) from both the open accordion item's
          // background and the bottom CTA strip background, which
          // converged on the same value: rgb(254,248,245)/#FEF8F5 — a
          // warm peach-white, genuinely distinct from ak.mist (#F8F9FA,
          // cool grey) and outside reuse tolerance for any existing
          // orange/peach token, so added as a new token rather than
          // reusing a near-duplicate.
          returnsFaqTint: '#FEF8F5',
          // Employment Agreements Hero (Legal & Documentation template),
          // client reference image. PIL-sampled: headline/icon orange
          // averaged across multiple solid-fill regions (headline text,
          // clock icon) converged on #FA8021/#FB8421 — within normal
          // anti-aliasing variance of each other but a genuinely
          // distinct, more amber-leaning orange than both ak.orange
          // (#F28C28) and ak.orange2 (#FF6B05), so added as its own
          // token rather than reusing either. Bottom trust-strip
          // background sampled separately at #F6F0EB — a warmer/darker
          // tint than the page's existing #FAF6EE parchment base
          // (which stays unchanged, within normal sampling tolerance of
          // the reference's own #F9F6F3 page background).
          agreementsOrange: '#FA8021',
          agreementsStripBg: '#F6F0EB',
          // Employment Agreements "Key Clauses" section (Section 3),
          // client reference image. The Critical-tier filled pill
          // sampled to a deeper, more saturated rust-orange (#DB763B)
          // than the page's existing agreementsOrange (#FA8021) used
          // for icon strokes/numerals — genuinely distinct, not reused.
          // Icon-circle and footnote-card backgrounds both sampled to
          // the same light peach value (#F7E4D5), added once and reused
          // in both places.
          agreementsCritical: '#DB763B',
          agreementsIconBg: '#F7E4D5',
          // Employment Agreements "Scope" section (Section 4), client
          // reference image — full redesign to a 2-col alternating
          // filled/outline card grid. Two new fills PIL-sampled directly
          // from the reference, both genuinely distinct from every
          // existing agreements* token: a muted gold (#D29D2D, used as
          // Card 01's solid fill, and reused as the numeral/underline
          // accent colour on the plain white cards) and a vivid
          // burnt-orange (#D85604, used as Card 04's solid fill, and
          // reused as the 2nd alternating colour in the new bottom
          // trust-strip icon circles) — distinct from agreementsOrange
          // (#FA8021, brighter amber) and agreementsCritical (#DB763B,
          // dustier/more muted) respectively, confirmed via direct
          // pixel sampling rather than assumed reuse. The dark card
          // (05) reuses the page's existing ak.ink rather than a new
          // token, since the sampled fill (#443939) sits within normal
          // tolerance of ink's own value once rendering/anti-aliasing
          // variance is accounted for.
          agreementsGold: '#D29D2D',
          agreementsRust: '#D85604',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};
