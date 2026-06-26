import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { industries } from "../../../data/svc-flexi-staffing";

/**
 * Flexi Staffing "Industries" section — rebuilt per client reference
 * (Section 8, first review round).
 *
 * Content fields are unchanged but swap roles: `industries.heading`
 * ("Industries We Deploy Flexi Staff In") now renders inside the small
 * pill badge instead of as the H1; `industries.sub` ("Aksharaa's flexi
 * staffing covers...") becomes the actual H1. No data restructuring —
 * just a different mapping of the same two fields, since the reference
 * uses them in swapped positions.
 *
 * Visual departures from the original:
 * - Full-bleed soft gradient background (blush pink at the edges,
 *   cooler lavender in the centre) with faint diagonal sunburst rays,
 *   replacing the plain white section background.
 * - Pill badge (rounded-full, thin rose border, red text) replacing the
 *   ak-kicker line+text treatment.
 * - Cards are full pill/capsule shapes with a dashed border, icon as a
 *   circular red-to-blue gradient badge on the left, name to the right
 *   — replacing the vertical icon-above-text squared card.
 * - Icon size bug fixed: was h-4.5/w-4.5 (non-existent Tailwind class,
 *   same gotcha flagged elsewhere in this codebase) -> h-5/w-5.
 *
 * Two icon/content corrections made in data/svc-flexi-staffing.js while
 * rebuilding (not purely visual): Food & Hospitality was mapped to a
 * generic "building" icon and Startups & SMEs to "shield" — neither
 * matches the reference, which shows a concierge-bell and a rocket
 * respectively. Fixed to "conciergeBell" (newly added to lib/icons.js)
 * and "rocket" (already registered, was just unused).
 */
export const FlexiIndustries = () => (
  <section
    id="svc-industries"
    data-testid="flexi-industries-section"
    className="relative overflow-hidden bg-gradient-to-br from-[#FBEAEA] via-[#EEEDFF] to-[#FBEAEA] py-10 md:py-14"
  >
    <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-40" viewBox="0 0 1600 900" preserveAspectRatio="none">
      <g stroke="#8E8CC7" strokeOpacity="0.15" strokeWidth="1.5">
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = -90 + (i - 11.5) * 6;
          const rad = (angle * Math.PI) / 180;
          const x2 = 800 + 1200 * Math.sin(rad);
          const y2 = 0 + 1200 * Math.cos(rad);
          return <line key={i} x1="800" y1="0" x2={x2} y2={y2} />;
        })}
      </g>
    </svg>

    <Container className="relative">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center rounded-full border border-[#CC363F]/25 bg-white/70 px-5 py-2 text-[13px] font-semibold text-[#CC363F]">
          {industries.heading}
        </span>
        <h2 className="mt-6 font-display text-3xl font-extrabold leading-[1.15] tracking-tight text-ak-ink md:text-4xl">{industries.sub}</h2>
      </Reveal>

      <RevealGroup className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.05}>
        {industries.items.map((it) => (
          <RevealItem key={it.name}>
            <div className="flex items-center gap-3 rounded-full border border-dashed border-ak-ink/15 bg-white/90 px-4 py-3 shadow-sm transition-shadow hover:shadow-md">
              <span
                className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-white"
                style={{ background: "linear-gradient(135deg, #DF3A3E 0%, #3959BC 100%)" }}
              >
                <Icon name={it.icon} className="h-5 w-5" strokeWidth={1.85} />
              </span>
              <span className="text-[13px] font-bold leading-tight text-ak-ink">{it.name}</span>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Container>
  </section>
);
