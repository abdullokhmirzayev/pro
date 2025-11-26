'use client'

import { Users, Lightbulb, Target, Code2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function AboutPage() {
	const values = [
		{
			icon: Code2,
			title: 'Clean Code',
			description:
				'I believe in writing maintainable, readable, and well-documented code that stands the test of time.',
		},
		{
			icon: Users,
			title: 'Collaboration',
			description:
				'Great products come from great teamwork. I enjoy working with designers, developers, and stakeholders.',
		},
		{
			icon: Lightbulb,
			title: 'Innovation',
			description:
				'Constantly learning and exploring new technologies to deliver cutting-edge solutions.',
		},
		{
			icon: Target,
			title: 'User-Focused',
			description:
				'Every design decision is made with the end user in mind for optimal experience.',
		},
	]

	return (
		<>
			<main className='flex-1 flex items-center justify-center px-4 py-12 md:py-20'>
				<div className='w-full max-w-4xl'>
					{/* Header Section */}
					<div className='mb-12 md:mb-20'>
						<h1 className='text-4xl md:text-5xl font-bold mb-6 text-balance'>
							About Me
						</h1>
						<p className='text-lg text-muted-foreground mb-6 leading-relaxed'>
							Welcome! I'm a passionate frontend developer based in Uzbekistan,
							dedicated to creating beautiful, performant, and accessible web
							experiences. With expertise in modern frontend technologies, I
							transform complex problems into simple, elegant solutions.
						</p>
					</div>

					{/* Coming Soon Section */}
					<div className='bg-card border border-border rounded-lg p-8 md:p-12 mb-12'>
						<div className='text-center mb-8'>
							<div className='inline-block px-3 py-1 bg-primary/10 rounded-full mb-4'>
								<span className='text-primary text-sm font-medium'>
									Coming Soon
								</span>
							</div>
							<h2 className='text-2xl md:text-3xl font-semibold mb-2'>
								Detailed Story
							</h2>
							<p className='text-muted-foreground'>
								A comprehensive look at my journey, experiences, and the
								projects that shaped me.
							</p>
						</div>
					</div>

					{/* Values Section */}
					<div className='mb-12'>
						<h2 className='text-2xl font-semibold mb-6'>My Values</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
							{values.map((value, index) => {
								const IconComponent = value.icon
								return (
									<div
										key={index}
										className='bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors'
									>
										<IconComponent className='w-8 h-8 text-primary mb-4' />
										<h3 className='font-semibold mb-2'>{value.title}</h3>
										<p className='text-sm text-muted-foreground'>
											{value.description}
										</p>
									</div>
								)
							})}
						</div>
					</div>

					{/* Tech Stack Section */}
					<div className='bg-card border border-border rounded-lg p-8 md:p-10 mb-12'>
						<h2 className='text-2xl font-semibold mb-6'>Tech Stack</h2>
						<div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
							{[
								'Next.js',
								'React',
								'TypeScript',
								'Tailwind CSS',
								'JavaScript',
								'HTML5',
								'CSS3',
								'Git',
							].map(tech => (
								<div
									key={tech}
									className='bg-background rounded px-4 py-3 text-center text-sm font-medium border border-border/50'
								>
									{tech}
								</div>
							))}
						</div>
					</div>

					{/* CTA Section */}
					<div className='bg-primary/5 border border-primary/20 rounded-lg p-8 md:p-10 text-center'>
						<h3 className='text-xl font-semibold mb-2'>Let's Work Together</h3>
						<p className='text-muted-foreground mb-6 max-w-md mx-auto'>
							Interested in collaborating on a project? Feel free to reach out.
							I'm always open to discussing new ideas.
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<a
								href='https://t.me/abdulloh_io'
								target='_blank'
								rel='noopener noreferrer'
							>
								<Button className='rounded-full px-8' size='lg'>
									Get in Touch
								</Button>
							</a>
							<a
								href='https://github.com/abdullokhmirzayev'
								target='_blank'
								rel='noopener noreferrer'
							>
								<Button
									variant='outline'
									className='rounded-full px-8'
									size='lg'
								>
									View GitHub
								</Button>
							</a>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}
