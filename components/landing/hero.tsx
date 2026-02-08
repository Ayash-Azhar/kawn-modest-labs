"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Hero() {
    return (
        <section className="relative w-full min-h-[90vh] flex items-center bg-background overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-muted/30 -z-10" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />

            <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col gap-6 text-left"
                >
                    <div className="inline-block px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium tracking-wide w-fit">
                        EST. 2024
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold font-serif tracking-tight leading-[1.1] text-foreground">
                        Modesty is the <br />
                        <span className="italic text-primary">Ultimate Elegance</span>
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground text-lg md:text-xl font-light leading-relaxed">
                        Discover a collection where tradition meets tailored luxury. Specializing in bespoke Abayas, Shalwar Kameez, and Bridal Wear designed for the modern woman.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        <Link href="#contact">
                            <Button size="lg" className="px-10 py-6 text-lg rounded-none bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-serif tracking-wide">
                                Book Consultation
                            </Button>
                        </Link>
                        <Link href="#categories">
                            <Button size="lg" variant="outline" className="px-10 py-6 text-lg rounded-none border-primary text-primary hover:bg-primary/5 transition-all font-serif tracking-wide">
                                Explore Collection
                            </Button>
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative h-[600px] w-full hidden lg:block"
                >
                    {/* Image Placeholder - stylized */}
                    <div className="absolute inset-0 rounded-t-[10rem] rounded-b-lg overflow-hidden shadow-2xl">
                        <img
                            src="/images/hero-1.png"
                            alt="Elegant woman in cream abaya"
                            className="object-cover w-full h-full"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                    {/* Floating decorative card */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="absolute -bottom-6 -left-6 bg-card p-6 shadow-xl border border-border max-w-xs"
                    >
                        <p className="font-serif text-xl italic text-primary">“The beauty of a woman is seen in her eyes, because that is the doorway to her heart.”</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
