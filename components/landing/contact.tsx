"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail } from "lucide-react"
import { motion } from "framer-motion"

export function Contact() {
    return (
        <section id="contact" className="py-24 bg-muted/20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <span className="text-secondary tracking-widest text-sm font-semibold uppercase">Contact Us</span>
                            <h2 className="text-4xl font-bold font-serif tracking-tight sm:text-5xl text-foreground">Begin Your Bespoke Journey</h2>
                            <p className="text-muted-foreground md:text-xl/relaxed font-light leading-relaxed">
                                Ready to create something beautiful? Contact us to schedule a private consultation or to discuss your custom requirements.
                            </p>
                        </div>

                        <div className="space-y-6 mt-8 p-8 bg-background shadow-sm border border-border/50">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-primary mt-1" />
                                <div>
                                    <h4 className="font-serif text-lg font-medium">Headquarters</h4>
                                    <span className="text-muted-foreground font-light">123 Modest Lane, Fashion District</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Phone className="w-6 h-6 text-primary mt-1" />
                                <div>
                                    <h4 className="font-serif text-lg font-medium">Phone</h4>
                                    <span className="text-muted-foreground font-light">(555) 123-4567</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Mail className="w-6 h-6 text-primary mt-1" />
                                <div>
                                    <h4 className="font-serif text-lg font-medium">Email</h4>
                                    <span className="text-muted-foreground font-light">hello@modestclothing.com</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-background p-8 md:p-12 shadow-lg border-t-4 border-primary"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="first-name" className="text-xs uppercase tracking-wider text-muted-foreground">First Name</Label>
                                    <Input id="first-name" placeholder="Jane" required className="border-0 border-b border-input rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary transition-colors bg-transparent" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="last-name" className="text-xs uppercase tracking-wider text-muted-foreground">Last Name</Label>
                                    <Input id="last-name" placeholder="Doe" required className="border-0 border-b border-input rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary transition-colors bg-transparent" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-xs uppercase tracking-wider text-muted-foreground">Email</Label>
                                <Input id="email" placeholder="jane@example.com" required type="email" className="border-0 border-b border-input rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary transition-colors bg-transparent" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message" className="text-xs uppercase tracking-wider text-muted-foreground">Message</Label>
                                <Textarea id="message" placeholder="Tell us about your project..." className="min-h-[120px] border-0 border-b border-input rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary transition-colors bg-transparent resize-none" />
                            </div>
                            <Button type="submit" className="w-full rounded-none py-6 text-lg font-serif bg-primary hover:bg-primary/90 mt-4">
                                Send Message
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
