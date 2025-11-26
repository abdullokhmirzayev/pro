import Footer from '@/components/footer'
import Header from '@/components/header'
import ProfileSection from '@/components/profile-section'

export default function Home() {
	return (
		<div className='min-h-screen bg-background text-foreground flex flex-col'>
			<Header />
			<main className='flex-1 flex items-center justify-center px-4 py-12 md:py-20'>
				<ProfileSection />
			</main>
			<Footer />
		</div>
	)
}
