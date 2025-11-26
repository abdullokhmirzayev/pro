import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const Theme = () => {
	const { theme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return null
	return (
		<>
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
		</>
	)
}

export default Theme
