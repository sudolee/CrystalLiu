import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

const NAV = ['Story', 'Jobs', 'Message']
const SOCIAL = ['Instagram', 'TikTok', 'YouTube']

const BG_IMAGE =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260729_022513_486985a2-ac8c-4278-91a8-071dcd9fcaff.png&w=1280&q=85'

const PORTRAIT = '/sxjj.png'

const MARQUEE_TEXT = 'Crystal — Liu'

export default function App() {
  const [open, setOpen] = useState(false)

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-black">
      {/* ===== Layer: full-bleed background image ===== */}
      <img
        src={BG_IMAGE}
        alt=""
        className="anim-fade-in absolute inset-0 h-full w-full object-cover"
      />

      {/* ===== Layer: marquee name ===== */}
      <div
        className="anim-fade-up absolute inset-x-0 top-[16vh] z-10 overflow-hidden sm:top-[14vh]"
        style={{ animationDelay: '500ms' }}
      >
        <div className="marquee flex w-max whitespace-nowrap font-hn text-[16vh] leading-none text-cream sm:text-[26vh]">
          <span className="pr-[6vw]">{MARQUEE_TEXT}</span>
          <span className="pr-[6vw]">{MARQUEE_TEXT}</span>
        </div>
      </div>

      {/* ===== Layer: cream horizontal rule ===== */}
      <div
        className="anim-line absolute inset-x-6 bottom-[5.5rem] z-10 h-0.5 bg-cream sm:inset-x-10 sm:bottom-28"
        style={{ animationDelay: '1200ms' }}
      />

      {/* ===== Layer: footer (blurb) ===== */}
      <footer className="absolute inset-x-0 bottom-0 z-30 flex items-end justify-between px-6 pb-5 font-hn text-xs leading-relaxed text-cream sm:z-10 sm:px-10 sm:pb-8 sm:text-sm">
        <div className="anim-fade-up" style={{ animationDelay: '1400ms' }}>
          <p>Visuals Composer</p>
          <p>Digital Crafter</p>
          <p>Obsessed by The Office</p>
        </div>
        <div
          className="anim-fade-up text-right"
          style={{ animationDelay: '1550ms' }}
        >
          <p>A homage to</p>
          <p>Crystal Liu</p>
        </div>
      </footer>

      {/* ===== Layer: front portrait cutout (above marquee) ===== */}
      <img
        src={PORTRAIT}
        alt="Portrait"
        className="anim-rise-in pointer-events-none absolute inset-0 z-20 h-full w-full object-cover"
        style={{ animationDelay: '300ms' }}
      />

      {/* ===== Layer: header chrome ===== */}
      <header className="absolute inset-x-0 top-0 z-30 flex items-start justify-between px-6 pt-6 sm:px-10 sm:pt-8">
        <a
          href="#"
          className="anim-fade-up font-hn text-lg tracking-wide text-cream"
          style={{ animationDelay: '800ms' }}
        >
          Crystal
        </a>

        {/* Desktop triple column */}
        <div className="hidden items-start gap-16 sm:flex lg:gap-24">
          <span
            className="anim-fade-up text-sm text-cream"
            style={{ animationDelay: '900ms' }}
          >
            2025
          </span>

          <nav className="flex flex-col gap-0.5 text-sm">
            {NAV.map((label, i) => (
              <span
                key={label}
                className="anim-fade-up inline-block"
                style={{ animationDelay: `${1000 + i * 80}ms` }}
              >
                <a
                  href="#"
                  className="block text-cream transition-opacity duration-300 hover:opacity-60"
                >
                  {label}
                </a>
              </span>
            ))}
          </nav>

          <nav className="flex flex-col gap-0.5 text-sm">
            {SOCIAL.map((label, i) => (
              <span
                key={label}
                className="anim-fade-up inline-block"
                style={{ animationDelay: `${1150 + i * 80}ms` }}
              >
                <a
                  href="#"
                  className="block text-cream transition-opacity duration-300 hover:opacity-60"
                >
                  {label}
                </a>
              </span>
            ))}
          </nav>
        </div>
      </header>

      {/* ===== Layer: hamburger / close (always on top, mobile only) ===== */}
      <button
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((v) => !v)}
        className="absolute right-6 top-6 z-50 flex h-10 w-10 flex-col items-center justify-center sm:hidden"
      >
        <span
          className="absolute h-0.5 w-6 bg-cream"
          style={{
            top: 'calc(50% - 7px)',
            transform: open ? 'translateY(7px) rotate(45deg)' : 'none',
            transition:
              'transform 500ms cubic-bezier(0.76, 0, 0.24, 1)',
          }}
        />
        <span
          className="absolute h-0.5 w-6 bg-cream"
          style={{
            top: '50%',
            transform: 'translateY(-50%)',
            opacity: open ? 0 : 1,
            transition: 'opacity 300ms',
          }}
        />
        <span
          className="absolute h-0.5 w-6 bg-cream"
          style={{
            top: 'calc(50% + 7px)',
            transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none',
            transition:
              'transform 500ms cubic-bezier(0.76, 0, 0.24, 1)',
          }}
        />
      </button>

      {/* ===== Layer: mobile drawer ===== */}
      <div
        className={`fixed inset-0 z-40 sm:hidden ${
          open ? '' : 'pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500"
          style={{ opacity: open ? 1 : 0 }}
        />

        {/* Panel */}
        <div
          className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-[#141414] px-8 py-10"
          style={{
            transform: open ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 600ms cubic-bezier(0.76, 0, 0.24, 1)',
          }}
        >
          {/* Lucide close button */}
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute right-6 top-6 text-cream"
            style={{
              transform: open ? 'rotate(0deg)' : 'rotate(90deg)',
              opacity: open ? 1 : 0,
              transition: 'transform 500ms, opacity 300ms',
              transitionDelay: open ? '300ms' : '0ms',
            }}
          >
            <X size={26} strokeWidth={1.5} />
          </button>

          {/* Site Index */}
          <div className="mt-6">
            <p
              className="mb-4 uppercase tracking-[0.2em] text-cream/50"
              style={{
                transform: open ? 'translateY(0)' : 'translateY(8px)',
                opacity: open ? 1 : 0,
                transition: 'transform 600ms ease, opacity 600ms ease',
                transitionDelay: open ? '250ms' : '0ms',
              }}
            >
              Site Index
            </p>
            <nav className="flex flex-col gap-1">
              {NAV.map((label, i) => (
                <a
                  key={label}
                  href="#"
                  className="block font-hn text-4xl text-cream"
                  style={{
                    transform: open ? 'translateY(0)' : 'translateY(24px)',
                    opacity: open ? 1 : 0,
                    transition: 'transform 600ms ease, opacity 600ms ease',
                    transitionDelay: open ? `${300 + i * 80}ms` : '0ms',
                  }}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Find Me */}
          <div className="mt-12">
            <p
              className="mb-4 uppercase tracking-[0.2em] text-cream/50"
              style={{
                transform: open ? 'translateY(0)' : 'translateY(8px)',
                opacity: open ? 1 : 0,
                transition: 'transform 600ms ease, opacity 600ms ease',
                transitionDelay: open ? '500ms' : '0ms',
              }}
            >
              Find Me
            </p>
            <nav className="flex flex-wrap gap-x-4 gap-y-2">
              {SOCIAL.map((label, i) => (
                <a
                  key={label}
                  href="#"
                  className="block text-sm text-cream"
                  style={{
                    transform: open ? 'translateY(0)' : 'translateY(16px)',
                    opacity: open ? 1 : 0,
                    transition: 'transform 600ms ease, opacity 600ms ease',
                    transitionDelay: open ? `${550 + i * 60}ms` : '0ms',
                  }}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
}
