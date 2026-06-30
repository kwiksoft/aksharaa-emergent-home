import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { documents } from "../../../data/svc-pf-esi-registration";

const COL_OFFSET = ["md:mt-0", "md:mt-8", "md:mt-2"];

export const RegSvcDocuments = () => (
  <section id="svc-documents" data-testid="reg-svc-documents-section" className="relative overflow-hidden py-14 md:py-20">
    {/* full-bleed background per direct client reference — a bold
        orange/grey split decorative texture. Default centered object-cover
        was checked against the section's actual rendered aspect ratio
        (1.75:1) vs the source image's own ratio (1.33:1) before committing
        to it: the resulting crop window comfortably contains the orange/
        grey boundary at roughly its visual center, so no manual
        object-position offset was needed. Cards below were switched from
        translucent (bg-ak-mist/30) to fully opaque white — the same fix
        used in the FAQs section for the same reason: a semi-transparent
        light tint reads fine on a plain white section but looks muddy and
        loses contrast over a vivid, non-neutral background image. */}
    <img
      src="/assets/sections/reg-documents-bg.jpg"
      alt=""
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
    />

    <Container className="relative z-10">
      <Reveal className="max-w-2xl">
        <div className="ak-kicker mb-5 text-white before:bg-white/60">{documents.kicker}</div>
        <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-white md:text-4xl">
          {documents.heading}
        </h2>
        <p className="mt-5 text-base leading-relaxed text-white/80">{documents.sub}</p>
      </Reveal>

      <RevealGroup className="mt-12 grid grid-cols-1 items-start gap-5 md:grid-cols-3 md:gap-6" stagger={0.12}>
        {documents.groups.map((g, i) => (
          <RevealItem key={g.title} className={COL_OFFSET[i % 3]}>
            {/* Cards 1 and 3 (Establishment Documents / Employee Details) are
                matched to equal height per direct instruction — applied as
                an explicit min-h on just those two cards rather than a
                blanket items-stretch on the grid, since the staggered
                vertical offsets (COL_OFFSET above) and card 2's naturally
                taller content are an intentional part of this layout and
                weren't meant to be touched. Height value (322px) taken
                from Establishment Documents' own measured rendered height
                at the desktop breakpoint. */}
            <div
              className={`rounded-2xl border border-ak-ink/[0.07] bg-white p-6 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.35)] ${
                i === 0 || i === 2 ? "md:min-h-[322px]" : ""
              }`}
            >
              <div className="flex items-center gap-3 border-b border-ak-ink/[0.07] pb-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ak-ink text-white">
                  <Icon name={g.icon} className="h-4 w-4" strokeWidth={1.9} />
                </span>
                <div className="font-display text-sm font-bold text-ak-ink">{g.title}</div>
              </div>
              <ul className="mt-4 space-y-3">
                {g.items.map((it) => (
                  <li key={it} className="flex items-start gap-2.5 text-[13px] leading-snug text-ak-ink/60">
                    <Icon name="checkCircle" className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-ak-orange" strokeWidth={2.2} />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal delay={0.2} className="mt-8 flex items-start gap-3 rounded-2xl border border-white/20 bg-white p-5 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.35)]">
        <Icon name="folderCheck" className="mt-0.5 h-5 w-5 flex-shrink-0 text-ak-orange" strokeWidth={1.9} />
        <p className="text-[13px] leading-relaxed text-ak-ink/65">{documents.note}</p>
      </Reveal>
    </Container>
  </section>
);
