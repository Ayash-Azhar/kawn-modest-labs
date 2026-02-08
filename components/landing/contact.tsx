"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail } from "lucide-react"
import { motion } from "framer-motion"

export function Contact() {
    return (
        <section id="contact" className="py-12 md:py-24 bg-muted/20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        className="space-y-4 md:space-y-6 text-center lg:text-left"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight lg:text-5xl text-foreground">Get in Touch</h2>
                        <p className="text-muted-foreground text-sm md:text-xl/relaxed font-light leading-relaxed mx-auto lg:mx-0 max-w-[500px] lg:max-w-none">
                            Ready to create something beautiful? Contact us to schedule a private consultation or to discuss your requirements.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                    >
                        <div className="grid gap-6 p-6 md:p-8 bg-background shadow-sm border border-border/50">
                            <a
                                href="https://www.google.com/maps/place/Modest+Clothing/@6.8516455,79.8739598,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae25bb573f2c19d:0x6275a76076ed48aa!8m2!3d6.8516402!4d79.8765347!16s%2Fg%2F11m6c4x95_?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-4 hover:opacity-80 transition-opacity group cursor-pointer"
                            >
                                <MapPin className="w-6 h-6 text-primary mt-1 shrink-0 group-hover:text-primary/80 transition-colors" />
                                <div>
                                    <h4 className="font-serif text-lg font-medium group-hover:underline decoration-primary/40 underline-offset-4">Location</h4>
                                    <span className="text-muted-foreground font-light group-hover:text-foreground transition-colors">269/7J 31st Lane Galvihara Road, Dehiwala</span>
                                </div>
                            </a>
                            <a
                                href="tel:+94778189693"
                                className="flex items-start gap-4 hover:opacity-80 transition-opacity group cursor-pointer"
                            >
                                <Phone className="w-6 h-6 text-primary mt-1 shrink-0 group-hover:text-primary/80 transition-colors" />
                                <div>
                                    <h4 className="font-serif text-lg font-medium group-hover:underline decoration-primary/40 underline-offset-4">Phone</h4>
                                    <span className="text-muted-foreground font-light group-hover:text-foreground transition-colors">(+94) 778189693</span>
                                </div>
                            </a>
                            <a
                                href="mailto:ayashazhar3@gmail.com"
                                className="flex items-start gap-4 hover:opacity-80 transition-opacity group cursor-pointer"
                            >
                                <Mail className="w-6 h-6 text-primary mt-1 shrink-0 group-hover:text-primary/80 transition-colors" />
                                <div>
                                    <h4 className="font-serif text-lg font-medium group-hover:underline decoration-primary/40 underline-offset-4">Email</h4>
                                    <span className="text-muted-foreground font-light group-hover:text-foreground transition-colors">ayashazhar3@gmail.com</span>
                                </div>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
