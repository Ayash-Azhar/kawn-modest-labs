import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function Footer() {
    return (
        <footer className="w-full border-t bg-background py-8 md:py-16">
            <div className="container mx-auto grid gap-8 grid-cols-1 md:grid-cols-3 px-4 md:px-6 justify-items-center">
                <div className="flex flex-col gap-4 items-center text-center">
                    <h3 className="text-lg font-bold font-serif">Modest Clothing</h3>
                    <p className="text-xs md:text-sm text-muted-foreground max-w-xs mx-auto lg:mx-0">
                        Elegant and modest tailoring for every occasion. Specializing in shalwars, dresses, and wedding attire.
                    </p>
                    <div className="flex gap-4 mt-2 md:mt-4 justify-center">
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                            <Instagram className="h-5 w-5" />
                            <span className="sr-only">Instagram</span>
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                            <Facebook className="h-5 w-5" />
                            <span className="sr-only">Facebook</span>
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                            <Twitter className="h-5 w-5" />
                            <span className="sr-only">Twitter</span>
                        </Link>
                    </div>

                </div>

                <div className="flex flex-col gap-4 items-center text-center">
                    <h3 className="text-sm font-medium uppercase tracking-wider text-primary/80">Services</h3>
                    <nav className="flex flex-col gap-2">
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            Custom Tailoring
                        </Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            Wedding Dresses
                        </Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            Alterations
                        </Link>
                    </nav>
                </div>

                <div className="flex flex-col gap-4 items-center text-center">
                    <h3 className="text-sm font-medium uppercase tracking-wider text-primary/80">Company</h3>
                    <nav className="flex flex-col gap-2">
                        <Link href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            About Us
                        </Link>
                        <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            Contact
                        </Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            Privacy Policy
                        </Link>
                    </nav>
                </div>

            </div>
            <div className="container mx-auto mt-8 border-t pt-8">
                <p className="text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Modest Clothing. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
