export default function Header() {
  return (
    <header className="w-full py-6 px-4 md:px-8">
      <nav className="max-w-4xl mx-auto flex justify-end gap-8">
        <a
          href="https://www.linkedin.com/in/abdulloh-mirzayev-a0b4a0294/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors text-sm"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/abdullokhmirzayev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors text-sm"
        >
          Github
        </a>
        <a
          href="https://t.me/abdulloh_io"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors text-sm"
        >
          Telegram
        </a>
      </nav>
    </header>
  )
}
