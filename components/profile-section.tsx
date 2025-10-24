import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function ProfileSection() {
  return (
    <div className="w-full max-w-2xl">
      <div className="flex flex-col items-start gap-8">
        {/* Avatar */}
        <div className="w-24 h-24 rounded-full overflow-hidden bg-muted">
          <Image
            src="/professional-headshot.jpg"
            alt="Abdulloh image"
            width={96}
            height={96}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-5xl font-bold">Hi, I'm Abdulloh.</h1>

        {/* Bio */}
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Frontend Software Engineer specializing in creating scalable and user-focused interfaces. I bring together modern engineering practices and thoughtful design. Currently developing at{" "}
            <a href="https://pethub.uz/ru"target='_blank' className="text-foreground font-semibold hover:underline">
              Pethub.uz
            </a>{" "}
            ⚡
          </p>
        </div>

        {/* Skills Section */}
        <div className="space-y-3 w-full">
          <h2 className="text-lg font-semibold">Top Skills</h2>
          <div className="flex flex-wrap gap-2">
            {["Next.js", "JavaScript", "React.js", "Tailwind css" , "Shadcn UI", "CSS"].map((skill) => (
              <span key={skill} className="text-muted-foreground text-sm">
                {skill}
                {skill !== "CSS" && <span className="ml-2">·</span>}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <Button
          className="rounded-full px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
          size="lg"
        >
          Say Hello
        </Button>
      </div>
    </div>
  )
}
