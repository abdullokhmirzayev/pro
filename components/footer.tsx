"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export default function Footer() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <footer className="w-full py-6 px-4 md:px-8 border-t border-border">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <p className="text-xs text-muted-foreground">© 2025 Mustafa. All rights reserved.</p>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-lg hover:bg-muted transition-colors"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5 text-muted-foreground hover:text-foreground" />
          ) : (
            <Moon className="w-5 h-5 text-muted-foreground hover:text-foreground" />
          )}
        </button>
      </div>
    </footer>
  )
}
