import { useEffect, useMemo, useState } from 'react'

import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Section from './components/Section.jsx'
import Footer from './components/Footer.jsx'

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'professional-summary', label: 'Summary' },
  { id: 'core-competencies', label: 'Skills' },
  { id: 'professional-experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'technical-skills', label: 'Technical' },
  { id: 'languages', label: 'Languages' },
  { id: 'hobbies', label: 'Hobbies' },
]

function App() {
  const [activeId, setActiveId] = useState('about')
  const [isDark, setIsDark] = useState(true)

  const observer = useMemo(() => {
    return new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )
  }, [])

  useEffect(() => {
    const sectionElements = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean)
    sectionElements.forEach((el) => observer.observe(el))
    return () => sectionElements.forEach((el) => observer.unobserve(el))
  }, [observer])

  return (
    <div className={isDark ? 'bg-black text-white' : 'bg-white text-black'}>
      <Navbar
        sections={SECTIONS}
        activeId={activeId}
        isDark={isDark}
        onToggleTheme={() => setIsDark((v) => !v)}
      />
      <main id="home" className="min-h-screen">
        <Hero isDark={isDark} />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Section id="about" title="About">
            <p className="text-balance leading-relaxed text-purple-light/90">
              Shalvi Singh — results-driven professional with proven expertise across SAP APO consulting,
              telecom operations, and insurance processes. Passionate about building efficient systems and
              elevating user experience through data-driven decisions and robust process design.
            </p>
          </Section>

          <Section id="professional-summary" title="Professional Summary">
            <p className="leading-relaxed">
              5+ years of experience spanning SAP APO Consulting, Telecom Operations, and Insurance processes.
              Expertise in supply chain planning, process optimization, and client coordination. Adept at
              leveraging SAP APO (DP, SNP, PP/DS, GATP), ECC integration, and workflow tools to streamline
              operations, enhance accuracy, and meet strict SLA targets.
            </p>
          </Section>

          <Section id="core-competencies" title="Core Competencies / Skills">
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {[
                'SAP APO Modules: DP, SNP, PP/DS, GATP',
                'Supply Chain Planning & Optimization',
                'Production Support & Issue Resolution',
                'Data Accuracy & Process Compliance',
                'SLA & Workflow Management',
                'Client & Stakeholder Communication',
                'MS Excel & Reporting',
                'Telecom & Insurance Domain Knowledge',
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-purple-medium/20 bg-white/5 px-4 py-3 text-sm shadow-sm backdrop-blur-md transition hover:border-purple-light/50 hover:bg-white/10"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section id="professional-experience" title="Professional Experience">
            <div className="space-y-6">
              <div className="rounded-xl border border-purple-medium/20 bg-white/5 p-5 shadow-sm backdrop-blur-md">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold tracking-wide">Infosys Pvt. Ltd., Pune</h3>
                  <span className="text-sm text-purple-light/90">Senior Process Specialist — Jan 2024 – Present</span>
                </div>
                <p className="mt-2 text-sm text-purple-light/90">Telecom Process – Verizon</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
                  <li>Managed customer data validation, order processing, and service provisioning.</li>
                  <li>Coordinated internal systems for disconnections, reconnections, and plan updates.</li>
                  <li>Addressed billing, account, and service-related queries ensuring SLA adherence.</li>
                  <li>Utilized workflow and ticketing systems for tracking and escalation.</li>
                </ul>
                <p className="mt-4 text-sm text-purple-light/90">Insurance & Annuities Process – McCamish</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                  <li>Processed policy updates, withdrawals, and beneficiary changes with compliance.</li>
                  <li>Conducted policy data validation and quality checks with underwriting teams.</li>
                  <li>Maintained high accuracy and confidentiality of sensitive customer data.</li>
                </ul>
              </div>

              <div className="rounded-xl border border-purple-medium/20 bg-white/5 p-5 shadow-sm backdrop-blur-md">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold tracking-wide">Cureus Technologies Ltd., Kolkata</h3>
                  <span className="text-sm text-purple-light/90">SAP APO Consultant — Oct 2020 – Jul 2023</span>
                </div>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
                  <li>Delivered end-to-end SAP APO solutions for DP, SNP, and PP/DS.</li>
                  <li>Configured planning books, macros, and demand forecasting models.</li>
                  <li>Implemented SNP heuristics & CTM for supply network planning.</li>
                  <li>Integrated APO with ECC using CIF for master and transactional data.</li>
                  <li>Provided production support, resolved planning issues, and trained users.</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section id="education" title="Education">
            <p className="text-sm">Masters in Commerce (Economics) — Co‑operative College</p>
          </Section>

          <Section id="technical-skills" title="Technical Skills">
            <p className="text-sm">
              SAP APO | SAP ECC | CIF | SAP BW | SCM 7.0 | MS Excel | PowerPoint | Workflow Tools | Ticketing
              Systems
            </p>
          </Section>

          <Section id="languages" title="Languages">
            <p className="text-sm">Hindi (Fluent) | English (Fluent) | Marathi (Beginner)</p>
          </Section>

          <Section id="hobbies" title="Hobbies">
            <p className="text-sm">Traveling | Cooking | Cycling</p>
          </Section>
        </div>
      </main>
      <Footer isDark={isDark} />
    </div>
  )
}

export default App
