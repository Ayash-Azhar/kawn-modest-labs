"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, ShoppingBag } from "lucide-react"

import { ModeToggle } from "@/components/ui/mode-toggle"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault()
    setIsOpen(false)

    let targetId = href.replace(/.*\#/, "")
    let targetElement = document.getElementById(targetId)

    // Handle "Home" or "/" -> Scroll to top
    if (href === "/") {
      window.scrollTo({ top: 0, behavior: 'smooth' }) // Use native smooth for top or custom if precise control needed. 
      // User asked for "same effect", so let's use the custom animation for consistency and timing control.
      const startPosition = window.scrollY
      const distance = -startPosition // Scroll up to 0
      const duration = 1500 // Slightly faster than 2000ms
      runAnimation(startPosition, distance, duration)
      return
    }

    if (targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY
      const startPosition = window.scrollY
      const distance = targetPosition - startPosition
      const duration = 1500 // Slightly faster than 2000ms
      runAnimation(startPosition, distance, duration)
    }
  }

  const runAnimation = (startPosition: number, distance: number, duration: number) => {
    let start: number | null = null
    function animation(currentTime: number) {
      if (start === null) start = currentTime
      const timeElapsed = currentTime - start
      const run = ease(timeElapsed, startPosition, distance, duration)
      window.scrollTo(0, run)
      if (timeElapsed < duration) requestAnimationFrame(animation)
    }
    requestAnimationFrame(animation)
  }

  // Easing function for smoother animation (easeInOutQuad)
  function ease(t: number, b: number, c: number, d: number) {
    t /= d / 2
    if (t < 1) return (c / 2) * t * t + b
    t--
    return (-c / 2) * (t * (t - 2) - 1) + b
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center px-4 md:px-6">
        {/* Left: Logo - Uses flex-1 to push nav to center */}
        <div className="flex-1 flex justify-start items-center">
          <Link href="/" className="flex items-center gap-2" onClick={(e) => handleScroll(e, "/")}>
            <span className="text-2xl font-serif font-bold tracking-tighter text-primary">Modest Clothing</span>
          </Link>
        </div>

        {/* Center: Desktop Navigation - Absolute Center relative to container */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="text-sm font-medium transition-colors hover:text-primary relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right: Actions - Uses flex-1 to balance the left side */}
        <div className="flex-1 flex justify-end items-center gap-4">
          <ModeToggle />
          <Button
            variant="outline"
            className="hidden md:flex rounded-none px-4 border-primary/20 hover:bg-primary/5 hover:text-primary cursor-pointer"
            onClick={(e) => handleScroll(e, "#contact")}
          >
            Book Appointment
          </Button>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-6 mt-12">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="text-xl font-serif font-medium transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                ))}
                <Button className="mt-8 w-full rounded-none" onClick={(e) => handleScroll(e, "#contact")}>
                  Book Appointment
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
