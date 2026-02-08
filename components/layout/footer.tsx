import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function Footer() {
    return (
        <footer className="w-full border-t bg-background py-10 md:py-16">
            <div className="container mx-auto grid gap-12 md:grid-cols-2 lg:grid-cols-12">
                <div className="flex flex-col gap-4 lg:col-span-3">
                    <h3 className="text-lg font-bold">Modest Clothing</h3>
                    <p className="text-sm text-muted-foreground">
                        Elegant and modest tailoring for every occasion. Specializing in shalwars, dresses, and wedding attire.
                    </p>
                    <div className="flex gap-4 mt-4">
                        <Link href="#" className="text-muted-foreground hover:text-primary">
                            <Instagram className="h-5 w-5" />
                            <span className="sr-only">Instagram</span>
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary">
                            <Facebook className="h-5 w-5" />
                            <span className="sr-only">Facebook</span>
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary">
                            <Twitter className="h-5 w-5" />
                            <span className="sr-only">Twitter</span>
                        </Link>
                    </div>

                </div>

                <div className="flex flex-col gap-4 lg:col-span-2">
                    <h3 className="text-sm font-medium">Services</h3>
                    <nav className="flex flex-col gap-2">
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                            Custom Tailoring
                        </Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                            Wedding Dresses
                        </Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                            Alterations
                        </Link>
                    </nav>
                </div>

                <div className="flex flex-col gap-4 lg:col-span-2">
                    <h3 className="text-sm font-medium">Company</h3>
                    <nav className="flex flex-col gap-2">
                        <Link href="#about" className="text-sm text-muted-foreground hover:text-primary">
                            About Us
                        </Link>
                        <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary">
                            Contact
                        </Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                            Privacy Policy
                        </Link>
                    </nav>
                </div>

                <div className="flex flex-col gap-4 lg:col-span-5 bg-transparent">
                    <h3 className="text-sm font-medium">Quick Contact</h3>
                    <form className="space-y-3">
                        <div className="grid grid-cols-2 gap-3">
                            <Input id="footer-name" placeholder="Name" required className="h-9 bg-background/50 border-input/60 focus-visible:bg-background transition-all text-xs" />
                            <Input id="footer-email" placeholder="Email" required type="email" className="h-9 bg-background/50 border-input/60 focus-visible:bg-background transition-all text-xs" />
                        </div>
                        <Textarea id="footer-message" placeholder="Message" className="min-h-[60px] bg-background/50 border-input/60 focus-visible:bg-background transition-all resize-none text-xs" />
                        <Button type="submit" size="sm" className="w-full h-9 text-xs font-serif uppercase tracking-widest bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm">
                            Send
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
