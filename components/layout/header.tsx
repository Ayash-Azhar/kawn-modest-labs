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

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center px-4 md:px-6">
        {/* Left: Logo - Uses flex-1 to push nav to center */}
        <div className="flex-1 flex justify-start items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-serif font-bold tracking-tighter text-primary">Modest Clothing</span>
          </Link>
        </div>

        {/* Center: Desktop Navigation - Absolute Center relative to container */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
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
          <Button variant="outline" className="hidden md:flex rounded-none px-4 border-primary/20 hover:bg-primary/5 hover:text-primary">
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
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-serif font-medium transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                ))}
                <Button className="mt-8 w-full rounded-none" onClick={() => setIsOpen(false)}>
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
