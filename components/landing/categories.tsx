import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const categories = [
    {
        title: "Abayas",
        subtitle: "Timeless Modesty",
        href: "#",
        color: "bg-[#2C3E50]", // Placeholder color
    },
    {
        title: "Shalwar Kameez",
        subtitle: "Traditional Elegance",
        href: "#",
        color: "bg-[#E67E22]", // Placeholder color
    },
    {
        title: "Bridal Wear",
        subtitle: "For Your Special Day",
        href: "#",
        color: "bg-[#8E44AD]", // Placeholder color
        className: "md:col-span-2",
    },
    {
        title: "Home Wear",
        subtitle: "Comfort in Style",
        href: "#",
        color: "bg-[#16A085]", // Placeholder color
        className: "md:col-span-2",
    },
]

export function Categories() {
    return (
        <section id="categories" className="py-24 bg-background">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-4 mb-16">
                    <span className="text-secondary tracking-widest text-sm font-semibold uppercase">Our Collections</span>
                    <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground">Curated for the Modern Woman</h2>
                    <div className="h-1 w-20 bg-secondary/50 rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 h-auto md:h-[600px]">
                    {/* First large item */}
                    <Link href="#" className="group relative overflow-hidden rounded-sm md:col-span-2 md:row-span-2">
                        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                            <img
                                src="/images/hero-2.png"
                                alt="Modest Abaya collection"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />

                        <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                            <h3 className="text-3xl font-serif font-medium mb-2">Abayas</h3>
                            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                                <span className="text-sm tracking-wide uppercase">View Collection</span>
                                <ArrowUpRight className="w-4 h-4" />
                            </div>
                        </div>
                    </Link>

                    {/* Second Item */}
                    <Link href="#" className="group relative overflow-hidden rounded-sm md:col-span-1 md:row-span-2">
                        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                            <img
                                src="https://images.unsplash.com/photo-1606553258591-6454722881b7?q=80&w=1000&auto=format&fit=crop"
                                alt="Bridal wear"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                            <h3 className="text-2xl font-serif font-medium mb-1">Bridal Wear</h3>
                            <p className="text-sm text-white/80">Exquisite Splendor</p>
                        </div>
                    </Link>

                    {/* Stacked Items */}
                    <div className="flex flex-col gap-4 md:gap-8 md:col-span-1 md:row-span-2">
                        <Link href="#" className="group relative flex-1 overflow-hidden rounded-sm">
                            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                                <img
                                    src="https://images.unsplash.com/photo-1627483298423-03e2e92a5c6d?q=80&w=1000&auto=format&fit=crop"
                                    alt="Shalwar Kameez"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                                <h3 className="text-xl font-serif font-medium">Shalwar Kameez</h3>
                            </div>
                        </Link>
                        <Link href="#" className="group relative flex-1 overflow-hidden rounded-sm">
                            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                                <img
                                    src="https://images.unsplash.com/photo-1601614924707-1d57551068bd?q=80&w=1000&auto=format&fit=crop"
                                    alt="Home wear"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                                <h3 className="text-xl font-serif font-medium">Home Wear</h3>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
