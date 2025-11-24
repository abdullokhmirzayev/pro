import Footer from '@/components/footer'
import Header from '@/components/header'

const AboutPage = () => {
	return (
		<>
			<div className='min-h-screen bg-background text-foreground flex flex-col'>
				<Header />
				<main className='flex-1 flex items-center justify-center px-4 py-12'></main>
				<Footer />
			</div>
		</>
	)
}

export default AboutPage
