'use client'

import { Mail, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function BlogPage() {
	const upcomingTopics = [
		{
			title: 'Building Scalable React Applications',
			description:
				'Learn best practices for architecting large-scale React applications with Next.js',
			icon: '⚛️',
		},
		{
			title: 'Mastering Tailwind CSS',
			description:
				'Advanced techniques and patterns for building beautiful UIs with utility-first CSS',
			icon: '🎨',
		},
		{
			title: 'Performance Optimization Tips',
			description:
				'Essential strategies to improve your web application performance and user experience',
			icon: '⚡',
		},
		{
			title: 'Web Development Best Practices',
			description:
				'Industry standards and patterns for writing maintainable and scalable code',
			icon: '✨',
		},
	]

	return (
		<>
			<main className='flex-1 flex items-center justify-center px-4 py-12 md:py-20'>
				<div className='w-full max-w-4xl'>
					{/* Header Section */}
					<div className='mb-12 md:mb-20 text-center'>
						<div className='flex justify-center mb-4'>
							<BookOpen className='w-12 h-12 md:w-16 md:h-16 text-primary' />
						</div>
						<h1 className='text-4xl md:text-5xl font-bold mb-4 text-balance'>
							Blog
						</h1>
						<p className='text-muted-foreground text-lg max-w-2xl mx-auto'>
							In-depth articles about frontend development, React, Next.js, and
							modern web technologies.
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
								Fresh Content on the Way
							</h2>
							<p className='text-muted-foreground'>
								Exciting articles are being prepared. Stay tuned for insights on
								cutting-edge frontend development.
							</p>
						</div>
					</div>

					{/* Upcoming Topics Grid */}
					<div className='mb-12'>
						<h2 className='text-2xl font-semibold mb-6'>Upcoming Topics</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
							{upcomingTopics.map((topic, index) => (
								<div
									key={index}
									className='bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors'
								>
									<div className='text-3xl mb-3'>{topic.icon}</div>
									<h3 className='font-semibold mb-2'>{topic.title}</h3>
									<p className='text-sm text-muted-foreground'>
										{topic.description}
									</p>
								</div>
							))}
						</div>
					</div>

					{/* Newsletter Section */}
					<div className='bg-primary/5 border border-primary/20 rounded-lg p-8 md:p-10 text-center'>
						<Mail className='w-10 h-10 mx-auto mb-4 text-primary' />
						<h3 className='text-xl font-semibold mb-2'>Stay Updated</h3>
						<p className='text-muted-foreground mb-6 max-w-md mx-auto'>
							Get notified when new articles are published. Subscribe to my
							newsletter for exclusive content.
						</p>
						<Button className='rounded-full px-8' size='lg'>
							Subscribe to Newsletter
						</Button>
					</div>
				</div>
			</main>
		</>
	)
}
