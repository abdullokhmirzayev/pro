'use client'

import { ThemeProvider } from 'next-themes'
import type React from 'react'

export default function ClientLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
			{children}
		</ThemeProvider>
	)
}
