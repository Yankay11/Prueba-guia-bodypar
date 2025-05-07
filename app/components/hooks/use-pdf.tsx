"use client"

import { useState } from "react"

export function usePDF() {
  const [isGenerating, setIsGenerating] = useState(false)

  const exportPDF = async (element: HTMLElement, fileName: string) => {
    try {
      setIsGenerating(true)

      // Importamos dinámicamente las bibliotecas necesarias
      const [jsPDFModule, html2canvasModule] = await Promise.all([import("jspdf"), import("html2canvas")])

      const jsPDF = jsPDFModule.default
      const html2canvas = html2canvasModule.default

      // Creamos un nuevo documento PDF en formato A4
      const pdf = new jsPDF("p", "mm", "a4")
      const pageWidth = pdf.internal.pageSize.getWidth()
      const pageHeight = pdf.internal.pageSize.getHeight()

      // Capturamos el elemento como imagen
      const canvas = await html2canvas(element, {
        scale: 2, // Mayor calidad
        useCORS: true,
        logging: false,
        allowTaint: true,
        backgroundColor: "#ffffff",
      })

      // Obtenemos la imagen como data URL
      const imgData = canvas.toDataURL("image/png")

      // Calculamos la relación de aspecto para mantener las proporciones
      const imgWidth = pageWidth
      const imgHeight = (canvas.height * imgWidth) / canvas.width

      // Dividimos en páginas si el contenido es más alto que una página
      let heightLeft = imgHeight
      let position = 0

      // Añadimos la primera página
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight

      // Añadimos páginas adicionales si es necesario
      while (heightLeft > 0) {
        position = heightLeft - imgHeight
        pdf.addPage()
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight)
        heightLeft -= pageHeight
      }

      // Guardamos el PDF
      pdf.save(fileName)
    } catch (error) {
      console.error("Error al generar el PDF:", error)
      alert("Hubo un error al generar el PDF. Por favor, intenta de nuevo.")
    } finally {
      setIsGenerating(false)
    }
  }

  return { exportPDF, isGenerating }
