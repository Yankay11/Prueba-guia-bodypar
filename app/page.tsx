"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ChapterCover from "@/components/chapter-cover"
import ChapterContent from "@/components/chapter-content"

export default function Home() {
  const [showContent, setShowContent] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      {!showContent ? (
        // Portada principal
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 to-black text-white">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
          <div className="container mx-auto px-4 z-10 text-center">
            <div className="mb-12">
              <img src="/placeholder.svg?height=120&width=120" alt="BY LEBRON Logo" className="mx-auto h-24 w-24" />
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 tracking-tight">Guía Experta BODYPAR</h1>
            <p className="font-sans text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-slate-200">
              Recupera el Control de Tu Bienestar
            </p>
            <p className="font-sans text-lg mb-12 max-w-xl mx-auto opacity-80">BY LEBRON • 2024</p>
            <Button
              size="lg"
              className="rounded-none bg-blue-600 hover:bg-blue-700 text-white border-none"
              onClick={() => setShowContent(true)}
            >
              <span className="flex items-center font-sans">
                Comenzar Lectura <ChevronRight className="ml-2 h-4 w-4" />
              </span>
            </Button>
          </div>
        </section>
      ) : (
        // Contenido del capítulo
        <div className="flex flex-col min-h-screen">
          <header className="h-16 border-b flex items-center px-6 sticky top-0 bg-white z-30">
            <Button variant="ghost" size="sm" onClick={() => setShowContent(false)} className="font-sans text-sm">
              Volver a Portada
            </Button>
            <div className="ml-auto flex items-center space-x-4">
              <Button variant="outline" size="sm" className="font-sans text-sm flex items-center">
                <span className="mr-2">↓</span>
                Exportar PDF
              </Button>
              <div className="text-sm text-slate-500 font-sans">BY LEBRON • Guía Experta BODYPAR</div>
            </div>
          </header>

          <div className="flex flex-col flex-1">
            <ChapterCover title="Introducción" subtitle="Recupera el Control de Tu Bienestar" />
            <ChapterContent />
          </div>
        </div>
      )}
    </main>
  )
}
