'use client'

import type React from 'react'

import { ThemeProvider } from 'next-themes'

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
