import { motion } from "framer-motion";
import { Shield, Database, Users, Search, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
	{
		icon: Database,
		title: "Supporting Foundational Projects",
		description:
			"Funding and sustaining the open-source projects that provide shared infrastructure for civic data across all levels of government including local, state, and federal.",
	},
	{
		icon: Users,
		title: "Sustaining Maintainers",
		description:
			"Providing resources, funding, and collaboration to the people and teams who maintain critical civic data projects.",
	},
	{
		icon: Shield,
		title: "Open Standards & Accessibility",
		description:
			"Ensuring civic data stays open-source, auditable, and governed by standards that work across all levels of government.",
	},
	{
		icon: Search,
		title: "Expanding Coverage",
		description:
			"Supporting projects that fill critical gaps in civic data infrastructure, especially at the local government level, which remains significantly underserved compared to state and federal data.",
	},
];

export function Mission() {
	return (
		<section id="mission" className="py-24 bg-secondary/30">
			<div className="container mx-auto px-6">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Our Mission & Purpose
					</h2>
					<p className="text-lg text-muted-foreground">
						We build shared civic data infrastructure by supporting the open-source projects and maintainers who sustain it. Our goal: ensure civic data stays accessible, verifiable, and ready for every community that needs it.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
					{features.map((feature, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
						>
							<Card className="h-full border-border/50 hover:border-primary/50 transition-colors bg-card/50 backdrop-blur-sm">
								<CardHeader>
									<div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
										<feature.icon className="h-6 w-6" />
									</div>
									<CardTitle className="text-xl">
										{feature.title}
									</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-muted-foreground leading-relaxed">
										{feature.description}
									</p>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>

				<div className="mt-20 grid md:grid-cols-2 gap-12 items-center bg-card border border-border rounded-2xl p-8 md:p-12 overflow-hidden relative">
					<div className="relative z-10">
						<h3 className="text-2xl md:text-3xl font-bold mb-6">
							Learn About Our Strategy
						</h3>
						<p className="text-muted-foreground mb-6 text-lg">
							We invest in collaborative, open approaches: funding and supporting maintainers, improving shared tooling, and ensuring projects can reach the communities that depend on reliable civic data infrastructure.
						</p>
						<div className="space-y-4 mb-8">
							<div className="flex items-start gap-3">
								<CheckCircle2 className="h-6 w-6 text-accent mt-0.5 shrink-0" />
								<p className="text-muted-foreground">
									Support for maintainers and infrastructure
								</p>
							</div>
							<div className="flex items-start gap-3">
								<CheckCircle2 className="h-6 w-6 text-accent mt-0.5 shrink-0" />
								<p className="text-muted-foreground">
									Open, community-led governance
								</p>
							</div>
						</div>
						<Link
							href="/strategy"
							className="inline-flex items-center text-primary font-medium hover:underline text-lg cursor-pointer"
						>
							View Full Strategy & Status &rarr;
						</Link>
					</div>
					<div className="relative z-10 bg-secondary/50 rounded-xl p-8">
						<h4 className="font-semibold mb-4 text-foreground">
							Join the Movement
						</h4>
						<p className="text-muted-foreground mb-6">
							We're looking for partners in hosting, promotion, and data
							contribution. Help us support maintainers and keep civic data open.
						</p>
						<a
							href="mailto:info@civicdata.tech"
							className="text-primary font-medium hover:underline"
						>
							Contact us at info@civicdata.tech &rarr;
						</a>
					</div>

					{/* Decorative Blob */}
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-3xl rounded-full -z-0" />
				</div>
			</div>
		</section>
	);
}
