'use client'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { DialogTitle } from '@radix-ui/react-dialog'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import IconSocial from '../ui/icon-social'

export default function MobileHeader({ navLinks, isActive }: any) {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger asChild>
				<Button variant='ghost' size='icon' className='hover:bg-primary/10'>
					<Menu className='h-6 w-6' />
				</Button>
			</SheetTrigger>

			<SheetContent side='top' className='space-y-4'>
				<DialogTitle />

				<nav className='flex flex-col gap-2 mt-8 items-center'>
					{navLinks
						.filter((l: any) => l.mobile)
						.map((link: any) => (
							<Link
								key={link.label}
								href={link.href}
								onClick={() => !link.external && setIsOpen(false)}
								{...(link.external && {
									target: '_blank',
									rel: 'noopener noreferrer',
								})}
								className={`px-4 py-3 rounded-lg transition-all duration-300 block ${
									isActive(link.href)
										? 'bg-primary text-primary-foreground font-medium'
										: 'text-foreground hover:bg-secondary hover:translate-x-2'
								}`}
							>
								{link.label}
							</Link>
						))}
				</nav>

				<div className='flex gap-3 justify-center'>
					<IconSocial />
				</div>
			</SheetContent>
		</Sheet>
	)
}
