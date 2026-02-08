"use client"

import { Scissors, ShoppingBag, Ruler, Moon, Gem } from "lucide-react"
import { motion } from "framer-motion"

const services = [
    {
        title: "Custom Shalwars",
        description: "Perfectly fitted traditional wear tailored to your style.",
        icon: ShoppingBag,
    },
    {
        title: "Bridal Couture",
        description: "Exquisite bridal wear designed for your special day.",
        icon: Gem,
    },
    {
        title: "Islamic Wear",
        description: "Modest abayas and hijabs crafted with elegance.",
        icon: Moon,
    },
    {
        title: "Expert Alterations",
        description: "Precision alterations for a perfect fit.",
        icon: Scissors,
    },
    {
        title: "Fabric Consultation",
        description: "Guidance on selecting the best fabrics.",
        icon: Ruler,
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export function Services() {
    return (
        <section id="services" className="py-20 md:py-24 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24 items-start">
                    {/* Left: Sticky Heading */}
                    <div className="lg:sticky lg:top-32 space-y-6">
                        <span className="text-secondary tracking-widest text-sm font-semibold uppercase">Our Expertise</span>
                        <h2 className="text-4xl font-bold font-serif tracking-tight sm:text-5xl md:text-6xl text-foreground">Tailored to<br />Perfection</h2>
                        <p className="max-w-[350px] text-muted-foreground text-base md:text-lg leading-relaxed font-light">
                            Uncompromising quality and attention to detail involves more than just a needle and thread.
                        </p>
                    </div>

                    {/* Right: Editorial Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-16"
                    >
                        {services.map((service, index) => (
                            <motion.div key={index} variants={itemVariants} className="group cursor-default">
                                <div className="border-t border-primary/20 pt-6 transition-colors group-hover:border-primary/60 duration-500">
                                    <div className="flex justify-between items-center gap-6">
                                        <div className="space-y-3">
                                            <h3 className="text-2xl font-serif font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                                                {service.title}
                                            </h3>
                                            <p className="text-muted-foreground text-base font-light leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>
                                        <service.icon className="w-8 h-8 flex-shrink-0 text-muted-foreground/50 group-hover:text-primary transition-colors duration-300" strokeWidth={1} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
