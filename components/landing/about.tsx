import Link from "next/link"
import { Button } from "@/components/ui/button"

export function About() {
    return (
        <section id="about" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold font-serif tracking-tighter sm:text-4xl md:text-5xl">
                            Decades of Craftsmanship
                        </h2>
                        <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            At Modest Clothing, we believe that modesty and elegance go hand in hand. With years of experience in tailoring, we understand the nuances of fabric, fit, and design.
                        </p>
                        <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Whether you need a simple alteration or a custom-designed wedding dress, our team is dedicated to providing you with the highest quality service and attention to detail. We take pride in creating garments that make you look and feel your best.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <Link href="#contact">
                                <Button>Contact Us</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="relative aspect-video lg:aspect-square overflow-hidden rounded-xl border bg-muted shadow-xl">
                        {/* About Image */}
                        <img
                            src="/images/hero-3.png"
                            alt="Detailed craftsmanship"
                            className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 border-[1px] border-white/20 m-4 pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    )
}
