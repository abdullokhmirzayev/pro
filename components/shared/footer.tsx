'use client'

import { format } from 'date-fns'
import Link from 'next/link'
import IconSocial from '../ui/icon-social'
import Theme from '../ui/theme'

export default function Footer() {
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

				<div className='md:hidden flex gap-3'>
					<Theme />
				</div>

				<div className='hidden md:flex gap-3'>
					<IconSocial />
				</div>
			</div>
		</footer>
	)
}
