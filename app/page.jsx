'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Page() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const prefersDark = window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches

    setIsDark(prefersDark)
    document.documentElement.classList.toggle('dark', prefersDark)
  }, [])

  function toggleTheme() {
    document.documentElement.classList.toggle('dark')
    setIsDark(document.documentElement.classList.contains('dark'))
  }

  function handlePrint() {
    window.print()
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 antialiased">

      {/* HEADER */}
      <header className="max-w-5xl mx-auto p-6 md:flex md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold">Muhammad Shidqie</h1>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            Ponorogo, Jawa Timur
          </p>
        </div>

        <div className="mt-4 md:mt-0 flex gap-3 items-center">

          <a
            href="mailto:hammadshidqietrnk@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/80 dark:bg-slate-800 shadow-sm text-sm hover:bg-white"
          >
            📩 Email
          </a>

          <a
            href="tel:081353995159"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/80 dark:bg-slate-800 shadow-sm text-sm hover:bg-white"
          >
            📞 +62 813-5399-5159
          </a>

          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-600 text-white text-sm shadow hover:opacity-95"
          >
            ⬇️ Download CV
          </a>

          <button
            onClick={toggleTheme}
            className="px-3 py-2 rounded-lg border dark:border-slate-700 text-sm"
          >
            {isDark ? 'Light' : 'Dark'}
          </button>

          <button
            onClick={handlePrint}
            className="px-3 py-2 rounded-lg bg-green-600 text-white text-sm"
          >
            Print
          </button>

        </div>
      </header>

      {/* MAIN CONTENT */}
      <motion.main
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6"
      >

        {/* SIDEBAR */}
        <aside className="col-span-1 bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm">
          <section>
            <h2 className="text-lg font-semibold">Contact</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li>📍 Ponorogo, Jawa Timur</li>
              <li>📩 hammadshidqietrnk@gmail.com</li>
              <li>📞 0813-5399-5159</li>
            </ul>
          </section>

          <hr className="my-5 border-slate-200 dark:border-slate-700" />

          <section>
            <h2 className="text-lg font-semibold">Skills & Tools</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li><strong>Audio Engineering:</strong> speaker aktif, amplifier, DSP, signal flow, EQ</li>
              <li><strong>Mixers:</strong> Midas M32, Yamaha TF5, A&H Q7, MGP32X</li>
              <li><strong>Software:</strong> CapCut, Lightroom, Canva, CorelDraw</li>
              <li><strong>Sertifikasi:</strong> BNSP PSKK Audio Engineer (2025)</li>
            </ul>
          </section>

          <hr className="my-5 border-slate-200 dark:border-slate-700" />

          <section>
            <h2 className="text-lg font-semibold">Languages</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li>Bahasa Indonesia (Native)</li>
              <li>English (Intermediate)</li>
              <li>Arabic (Intermediate)</li>
            </ul>
          </section>

        </aside>

        {/* RIGHT SECTION */}
        <section className="col-span-2 space-y-6">

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Ringkasan Profil</h2>
            <p className="mt-3 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              Mahasiswa Ilmu Komunikasi UNIDA Gontor dengan pengalaman kuat pada event organizing,
              komunikasi publik, dan teknis audio. Bertanggung jawab, komunikatif, dan mampu bekerja di bawah tekanan.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Pendidikan</h2>

            <div className="mt-4 space-y-4 text-sm text-slate-700 dark:text-slate-300">
              <div>
                <h3 className="font-semibold">Universitas Darussalam Gontor</h3>
                <p className="text-slate-600 dark:text-slate-400">Bachelor of Communication (2024–2028)</p>
              </div>

              <div>
                <h3 className="font-semibold">KMI Gontor</h3>
                <p className="text-slate-600 dark:text-slate-400">Islamic Boarding School | 2018–2024</p>
              </div>

              <div>
                <h3 className="font-semibold">SDN Ajung 02 Kalisat</h3>
                <p className="text-slate-600 dark:text-slate-400">Elementary School | 2012–2018</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Pengalaman</h2>

            <div className="mt-4 space-y-6 text-sm text-slate-700 dark:text-slate-300">

              <ExperienceItem
                title="Armada Theater"
                role="Chairman (2022)"
                bullets={[
                  "Memimpin seluruh aspek produksi teater ARMADA",
                  "Mengelola tim kreatif dan teknis",
                  "Mengkoordinasikan latihan dan pertunjukan"
                ]}
              />

              <ExperienceItem
                title="OPPM"
                role="Teknisi (2023–2024)"
                bullets={[
                  "Mengelola sound system acara pondok",
                  "Optimasi sistem siaran informasi"
                ]}
              />

              <ExperienceItem
                title="UNIDA"
                role="Technical Division (2024–Sekarang)"
                bullets={[
                  "Setup & mixing audio untuk acara kampus",
                  "Stage plan dan koordinasi teknis lapangan"
                ]}
              />

            </div>
          </div>

        </section>
      </motion.main>

      {/* FOOTER */}
      <footer className="max-w-5xl mx-auto p-6 text-center text-sm text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} — Muhammad Shidqie
      </footer>

    </main>
  )
}

function ExperienceItem({ title, role, bullets = [] }) {
  return (
    <article>
      <header className="flex items-baseline justify-between">
        <h3 className="font-semibold">{title}</h3>
        <span className="text-sm text-slate-500 dark:text-slate-400">{role}</span>
      </header>

      <ul className="mt-2 list-disc list-inside text-sm text-slate-700 dark:text-slate-300 space-y-1">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </article>
  )
}
