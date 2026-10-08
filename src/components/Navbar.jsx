import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import { navLinks } from '../data/data'

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
    />
  </svg>
)

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18 18 6M6 6l12 12"
    />
  </svg>
)

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 
          
        `}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          {/* Logo */}
          <a href="#" aria-label="Restro home">
            <img
              src={logo}
              alt="Restro"
              className="h-10 w-auto"
            />
          </a>

          {/* ================= DESKTOP NAV ================= */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-800 transition-colors duration-200 hover:text-orange-500"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Booking Button */}
          <a
            href="#booking-process"
            className="hidden rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-orange-600 md:block"
          >
            Book a table
          </a>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            type="button"
            aria-label={
              mobileOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex aspect-square items-center justify-center rounded-md bg-zinc-800 p-2 text-white transition-all duration-300 hover:bg-zinc-700 md:hidden"
          >
            {mobileOpen ? <XIcon /> : <MenuIcon />}
          </button>

        </div>
      </nav>

      {/* ================= BACKDROP ================= */}
      <div
        onClick={() => setMobileOpen(false)}
        className={`fixed inset-0 z-30 bg-black/10 backdrop-blur-[3px] transition-all duration-300 md:hidden ${
          mobileOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      />

      {/* ================= MOBILE DRAWER ================= */}
      <div
        className={`fixed left-0 right-0 top-[73px] z-40 md:hidden ${
          mobileOpen
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-5 opacity-0'
        } transition-all duration-300`}
      >
        <div className="mx-4 overflow-hidden rounded-2xl border border-white/40 bg-white/80 px-6 py-8 shadow-2xl backdrop-blur-xl">

          <div className="flex flex-col items-center">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="w-full border-b border-zinc-200/70 py-4 text-center text-xl font-medium text-zinc-800 transition-colors duration-200 last:border-none hover:text-orange-500"
              >
                {link.name}
              </a>
            ))}

            {/* Mobile Booking Button */}
            <a
              href="#booking-process"
              onClick={() => setMobileOpen(false)}
              className="mt-6 rounded-full bg-orange-500 px-8 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              Book a table
            </a>

          </div>

        </div>
      </div>
    </>
  )
}

export default Navbar