interface ChapterCoverProps {
  title: string
  subtitle: string
}

export default function ChapterCover({ title, subtitle }: ChapterCoverProps) {
  return (
    <section className="w-full py-24 md:py-32 bg-black text-white">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-2 opacity-80">
            <img src="/placeholder.svg?height=60&width=60" alt="BY LEBRON Logo" className="h-12 w-12" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 tracking-tight">{title}</h1>
          <div className="w-24 h-0.5 bg-blue-600 mb-6"></div>
          <p className="font-sans text-xl md:text-2xl text-slate-200 max-w-2xl">{subtitle}</p>
        </div>
      </div>
    </section>
  )
}

