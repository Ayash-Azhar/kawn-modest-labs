import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail } from "lucide-react"

export function Contact() {
    return (
        <section id="contact" className="py-20 bg-background">
            <div className="container px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold font-serif tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
                        <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Ready to create something beautiful? Contact us to schedule a consultation or ask any questions.
                        </p>
                        <div className="space-y-4 mt-8">
                            <div className="flex items-center gap-4">
                                <MapPin className="w-5 h-5 text-primary" />
                                <span>123 Modest Lane, Fashion District</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone className="w-5 h-5 text-primary" />
                                <span>(555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Mail className="w-5 h-5 text-primary" />
                                <span>hello@modestclothing.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="first-name">First Name</Label>
                                    <Input id="first-name" placeholder="Jane" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="last-name">Last Name</Label>
                                    <Input id="last-name" placeholder="Doe" required />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" placeholder="jane@example.com" required type="email" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea id="message" placeholder="Tell us about your project..." className="min-h-[120px]" />
                            </div>
                            <Button type="submit" className="w-full">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
