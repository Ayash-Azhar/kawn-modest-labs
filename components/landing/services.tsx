"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Scissors, ShoppingBag, Ruler, CheckCircle2, Gem } from "lucide-react"
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
        icon: CheckCircle2,
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
    {
        title: "Bulk Orders",
        description: "Tailoring services for events and uniforms.",
        icon: CheckCircle2,
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
        <section id="services" className="py-24 bg-muted/30">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <div className="space-y-2">
                        <span className="text-secondary tracking-widest text-sm font-semibold uppercase">Our Expertise</span>
                        <h2 className="text-3xl font-bold font-serif tracking-tight sm:text-5xl text-foreground">Tailored to Perfection</h2>
                        <p className="max-w-[700px] text-muted-foreground md:text-lg/relaxed font-light mx-auto">
                            We offer a wide range of tailoring services to meet all your modest fashion needs with uncompromising quality.
                        </p>
                    </div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto"
                >
                    {services.map((service, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card className="border-none shadow-sm hover:shadow-xl transition-all duration-300 bg-background h-full group">
                                <CardHeader className="text-center pt-8">
                                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/5 transition-colors">
                                        <service.icon className="w-7 h-7 text-primary/80 group-hover:text-primary transition-colors" />
                                    </div>
                                    <CardTitle className="font-serif text-xl">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center pb-8">
                                    <CardDescription className="text-base font-light">{service.description}</CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
