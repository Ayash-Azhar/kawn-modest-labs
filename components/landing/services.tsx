import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Scissors, ShoppingBag, Ruler, CheckCircle2 } from "lucide-react"

const services = [
    {
        title: "Custom Shalwars & Kameez",
        description: "Perfectly fitted traditional wear tailored to your style and preference.",
        icon: ShoppingBag,
    },
    {
        title: "Wedding Dresses",
        description: "Exquisite bridal wear and party dresses designed for your special day.",
        icon: Gem,
    },
    {
        title: "Islamic Clothing",
        description: "Modest abayas, jilbabs, and hijabs crafted with elegance and comfort.",
        icon: CheckCircle2,
    },
    {
        title: "Expert Alterations",
        description: "Precision alterations to make your existing wardrobe fit perfectly.",
        icon: Scissors,
    },
    {
        title: "Fabric Consultation",
        description: "Guidance on selecting the best fabrics for your design and occasion.",
        icon: Ruler,
    },
    {
        title: "Bulk Orders",
        description: "Tailoring services for groups, events, and uniforms.",
        icon: CheckCircle2,
    },
]

import { Gem } from "lucide-react"

export function Services() {
    return (
        <section id="services" className="py-20 bg-background">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Expertise</div>
                        <h2 className="text-3xl font-bold font-serif tracking-tighter sm:text-5xl">Tailored to Perfection</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            We offer a wide range of tailoring services to meet all your modest fashion needs.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <Card key={index} className="border-muted/60 shadow-sm hover:shadow-md transition-all">
                            <CardHeader>
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                    <service.icon className="w-6 h-6 text-primary" />
                                </div>
                                <CardTitle>{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base">{service.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
