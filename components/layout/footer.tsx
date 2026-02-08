import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function Footer() {
    return (
        <footer className="w-full border-t bg-background py-8 md:py-16">
            <div className="container mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-12 lg:gap-12 px-4 md:px-6">
                <div className="flex flex-col gap-4 lg:col-span-3 items-center text-center lg:items-start lg:text-left">
                    <h3 className="text-lg font-bold font-serif">Modest Clothing</h3>
                    <p className="text-xs md:text-sm text-muted-foreground max-w-xs mx-auto lg:mx-0">
                        Elegant and modest tailoring for every occasion. Specializing in shalwars, dresses, and wedding attire.
                    </p>
                    <div className="flex gap-4 mt-2 md:mt-4 justify-center lg:justify-start">
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

                <div className="flex flex-col gap-4 lg:col-span-2 items-center text-center lg:items-start lg:text-left">
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

                <div className="flex flex-col gap-4 lg:col-span-2 items-center text-center lg:items-start lg:text-left">
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

                <div className="flex flex-col gap-4 lg:col-span-5 bg-transparent items-center text-center lg:items-start lg:text-left w-full">
                    <h3 className="text-sm font-medium uppercase tracking-wider text-primary/80">Quick Contact</h3>
                    <form className="space-y-3 w-full max-w-sm mx-auto lg:mx-0">
                        <div className="grid grid-cols-2 gap-3">
                            <Input id="footer-name" placeholder="Name" required className="h-10 bg-background/50 border-input/60 focus-visible:bg-background transition-all text-xs rounded-sm" />
                            <Input id="footer-email" placeholder="Email" required type="email" className="h-10 bg-background/50 border-input/60 focus-visible:bg-background transition-all text-xs rounded-sm" />
                        </div>
                        <Textarea id="footer-message" placeholder="Message" className="min-h-[80px] bg-background/50 border-input/60 focus-visible:bg-background transition-all resize-none text-xs rounded-sm" />
                        <Button type="submit" size="sm" className="w-full h-10 text-xs font-serif uppercase tracking-widest bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm">
                            Send Message
                        </Button>
                    </form>
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
