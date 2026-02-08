import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
    return (
        <footer className="w-full border-t bg-background py-10 md:py-16">
            <div className="container mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-bold">Modest Clothing</h3>
                    <p className="text-sm text-muted-foreground">
                        Elegant and modest tailoring for every occasion. Specializing in shalwars, dresses, and wedding attire.
                    </p>
                </div>
                <div className="flex flex-col gap-4">
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
                <div className="flex flex-col gap-4">
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
                <div className="flex flex-col gap-4">
                    <h3 className="text-sm font-medium">Connect</h3>
                    <div className="flex gap-4">
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
            </div>
            <div className="container mx-auto mt-8 border-t pt-8">
                <p className="text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Modest Clothing. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
