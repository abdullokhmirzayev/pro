import { Github, Linkedin, Send } from 'lucide-react'
import Link from 'next/link'
import Theme from './theme'

const IconSocial = () => {
	return (
		<>
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
			<Link href={'https://www.linkedin.com/in/abdulloh-mirzayev-a0b4a0294/'}>
				<button className='p-2 rounded-lg hover:bg-muted transition-colors cursor-pointer'>
					<Linkedin className='w-5 h-5 text-muted-foreground hover:text-foreground' />
				</button>
			</Link>
			<div className='hidden md:flex gap-3 justify-self-end'>
				<Theme />
			</div>
		</>
	)
}

export default IconSocial
