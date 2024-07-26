import Link from "next/link"

import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export function SiteHeader() {
	return (
		<header className="sticky top-0 z-40 w-full border-b bg-background">
			<div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
				<div className="flex gap-6 md:gap-10">
					<Link href="/" className="flex items-center space-x-4">
						<Icons.logo className="h-6 w-6" />
						<span className="inline-block font-bold">{siteConfig.name}</span>
					</Link>
				</div>
				<div className="flex flex-1 items-center justify-end space-x-4">
					<nav className="flex items-center space-x-1">
						<Link
							href={siteConfig.links.github}
							target="_blank"
							rel="noreferrer"
						>
							<div
								className={buttonVariants({
									size: "icon",
									variant: "ghost",
								})}
							>
								<Icons.gitHub className="size-5" />
								<span className="sr-only">GitHub</span>
							</div>
						</Link>
						<Link
							href={siteConfig.links.linkedin}
							target="_blank"
							rel="noreferrer"
						>
							<div
								className={buttonVariants({
									size: "icon",
									variant: "ghost",
								})}
							>
								<Icons.linkedin className="size-5 fill-current" />
								<span className="sr-only">LinkedIn</span>
							</div>
						</Link>
						<ThemeToggle />
					</nav>
				</div>
			</div>
		</header>
	)
}
