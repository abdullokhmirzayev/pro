import Link from 'next/link'

export default function Header() {
	return (
		<header className="w-full py-6 px-4 md:px-8">
			<div className="max-w-4xl mx-auto flex justify-between items-center">
				<Link href="/" className="text-lg font-semibold">
					Abdulloh Mirzayev&apos;s Blog
				</Link>

				<nav>
					<ul className="flex items-center gap-6">
						<li>
							<Link
								href="/blog"
								className="text-muted-foreground hover:text-foreground transition-colors text-sm"
							>
								Blog
							</Link>
						</li>

						<li>
							<Link
								href="/about"
								className="text-muted-foreground hover:text-foreground transition-colors text-sm"
							>
								About Me
							</Link>
						</li>

						<li>
							<Link
								href="https://t.me/abdulloh_io"
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-foreground transition-colors text-sm"
							>
								Channel
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}
