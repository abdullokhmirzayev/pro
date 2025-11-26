'use client'

import { useMobile } from '@/components/ui/use-mobile'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import MobileHeader from '../ui/mobile-header'

export default function Header() {
	const isMobile = useMobile()
	const pathname = usePathname()

	const navLinks = [
		{ href: '/blog', label: 'Blog', mobile: true },
		{ href: '/about', label: 'About Me', mobile: true },
		{ href: '/projects', label: 'Projects', mobile: true },
		{
			href: 'https://t.me/abdulloh_io',
			label: 'Channel',
			external: true,
			mobile: false,
		},
	]

	const isActive = (href: string) => {
		if (href.startsWith('http')) return false
		return pathname === href || pathname.startsWith(href + '/')
	}

	return (
		<header className='w-full py-6 px-4 md:px-8 border-b border-border sticky top-0 z-50 bg-background/95 backdrop-blur'>
			<div className='max-w-4xl mx-auto flex justify-between items-center'>
				<Link href='/' className='text-lg font-semibold'>
					Abdulloh Mirzayev&apos;s Blog
				</Link>

				{/* Desktop navigation */}
				<nav className='hidden md:block'>
					<ul className='flex items-center gap-6'>
						{navLinks.map(link => (
							<li key={link.label}>
								<Link
									href={link.href}
									{...(link.external && {
										target: '_blank',
										rel: 'noopener noreferrer',
									})}
									className={`transition-all duration-300 text-sm ${
										isActive(link.href)
											? 'text-foreground font-medium'
											: 'text-muted-foreground hover:text-foreground'
									}`}
								>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				{/* Mobile navigation */}
				{isMobile && <MobileHeader navLinks={navLinks} isActive={isActive} />}
			</div>
		</header>
	)
}
