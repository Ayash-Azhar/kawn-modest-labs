import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
    return (
        <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-muted/40">
            <div className="container px-4 md:px-6 z-10">
                <div className="flex flex-col items-center gap-4 text-center">
                    <h1 className="text-3xl font-bold font-serif tracking-tighter sm:text-5xl md:text-6xl/none">
                        Modest Elegance, <span className="text-primary">Custom Tailored</span>
                    </h1>
                    <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                        Specializing in shalwars, wedding dresses, and Islamic clothing. We bring your modest fashion vision to life with precision and care.
                    </p>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                        <Link href="#contact">
                            <Button size="lg" className="px-8">
                                Book Consultation
                            </Button>
                        </Link>
                        <Link href="#services">
                            <Button size="lg" variant="outline" className="px-8">
                                View Services
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Decorative background element or image can go here */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        </section>
    )
}
