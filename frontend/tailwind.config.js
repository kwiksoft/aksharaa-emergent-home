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
