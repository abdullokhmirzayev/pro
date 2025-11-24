'use client'

import { format } from 'date-fns'
import { Github, Linkedin, Moon, Send, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Footer() {
	const { theme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return null

	return (
		<footer className='w-full py-6 px-4 md:px-8 border-t border-border'>
			<div className='max-w-4xl mx-auto flex justify-between items-center'>
				<p className='text-xs text-muted-foreground'>
					&copy;{format(new Date(), 'yyyy')}{' '}
					<Link
						href={'https://t.me/abdulloh_io'}
						target='_blank'
						className='dark:hover:text-gray-200 hover:text-gray-700'
					>
						Abdulloh_io
					</Link>
					. All rights reserved.
				</p>
				<div className='flex gap-3'>
					<Link href={'https://t.me/abdulloh_io'}>
						<button className='p-2 rounded-lg hover:bg-muted transition-colors cursor-pointer'>
							<Send className='w-5 h-5 text-muted-foreground hover:text-foreground' />
						</button>
					</Link>
					<Link href={'https://github.com/abdullokhmirzayev'}>
						<button className='p-2 rounded-lg hover:bg-muted transition-colors cursor-pointer'>
							<Github className='w-5 h-5 text-muted-foreground hover:text-foreground' />
						</button>
					</Link>
					<Link
						href={'https://www.linkedin.com/in/abdulloh-mirzayev-a0b4a0294/'}
					>
						<button className='p-2 rounded-lg hover:bg-muted transition-colors cursor-pointer'>
							<Linkedin className='w-5 h-5 text-muted-foreground hover:text-foreground' />
						</button>
					</Link>

					<button
						onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
						className='p-2 rounded-lg hover:bg-muted transition-colors cursor-pointer'
						aria-label='Toggle theme'
					>
						{theme === 'dark' ? (
							<Sun className='w-5 h-5 text-muted-foreground hover:text-foreground' />
						) : (
							<Moon className='w-5 h-5 text-muted-foreground hover:text-foreground' />
						)}
					</button>
				</div>
			</div>
		</footer>
	)
}
