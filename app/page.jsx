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
            📞 0813-5399-5159
          </a>

          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-600 text-white text-sm shadow hover:opacity-95"
          >
            ⬇️ Download CV
          </a>

          <button
