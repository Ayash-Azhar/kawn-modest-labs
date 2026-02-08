"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Hero() {
    return (
        <section className="relative w-full min-h-[85vh] flex items-center bg-background overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-muted/30 -z-10" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-4 md:px-6 flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 lg:gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col gap-5 text-center lg:text-left w-full items-center lg:items-start"
                >
                    <div className="inline-block px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] md:text-xs font-medium tracking-wide w-fit">
                        EST. 2024
                    </div>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-serif tracking-tight leading-[1.1] text-foreground">
                        Modesty is the <br />
                        <span className="italic text-primary">Ultimate Elegance</span>
                    </h1>
                    <p className="max-w-[550px] text-muted-foreground text-sm md:text-lg font-light leading-relaxed mx-auto lg:mx-0">
                        Discover a collection where tradition meets tailored luxury. Specializing in bespoke Abayas, Shalwar Kameez, and Bridal Wear designed for the modern woman.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 mt-2 w-full sm:w-auto justify-center lg:justify-start">
                        <Link href="#contact" className="w-full sm:w-auto">
                            <Button size="default" className="w-full sm:w-auto px-8 py-5 text-base rounded-none bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-serif tracking-wide">
                                Book Consultation
                            </Button>
                        </Link>
                        <Link href="#categories" className="w-full sm:w-auto">
                            <Button size="default" variant="outline" className="w-full sm:w-auto px-8 py-5 text-base rounded-none border-primary text-primary hover:bg-primary/5 transition-all font-serif tracking-wide">
                                Explore Collection
                            </Button>
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative h-[350px] sm:h-[450px] lg:h-[500px] w-full mt-0 lg:mt-0"
                >
                    {/* Image Placeholder - stylized */}
                    <div className="absolute inset-0 rounded-t-[4rem] rounded-b-[4rem] lg:rounded-t-[8rem] lg:rounded-b-lg overflow-hidden shadow-2xl">
                        <img
                            src="/images/hero-1.png"
                            alt="Elegant woman in cream abaya"
                            className="object-cover w-full h-full"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                    {/* Floating decorative card */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="absolute -bottom-6 right-0 lg:-left-6 lg:right-auto bg-card p-5 shadow-xl border border-border max-w-[200px] lg:max-w-xs text-center lg:text-left z-10"
                    >
                        <p className="font-serif text-sm lg:text-lg italic text-primary">“The beauty of a woman is seen in her eyes...”</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
