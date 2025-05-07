import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Briefcase, Award, Phone, Building, BookOpen, ShoppingBag, UserCheck } from "lucide-react"

interface GuideContentProps {
  currentSection: string
}

export default function GuideContent({ currentSection }: GuideContentProps) {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Introducción */}
      <section className={cn(currentSection === "introduccion" ? "block" : "hidden")}>
        <h1 className="text-3xl font-bold mb-6">Introducción</h1>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-center mb-6">
              <BookOpen className="h-12 w-12 text-slate-700" />
            </div>
            <p className="text-lg mb-4">
              Bienvenido a la guía de presentación de [Nombre de la Empresa]. Este documento ha sido diseñado para
              proporcionar una visión completa de nuestra organización, nuestros valores, productos y servicios.
            </p>
            <p className="mb-4">
              A través de las siguientes páginas, conocerá nuestra historia, misión y visión, así como los productos y
              servicios que ofrecemos a nuestros clientes. También presentaremos a nuestro equipo de profesionales y
              algunos de nuestros casos de éxito más destacados.
            </p>
            <p>
              Le invitamos a explorar esta guía para descubrir cómo podemos ayudarle a alcanzar sus objetivos y por qué
              somos líderes en nuestro sector.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Nuestra Empresa */}
      <section className={cn(currentSection === "empresa" ? "block" : "hidden")}>
        <h1 className="text-3xl font-bold mb-6">Nuestra Empresa</h1>
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-center mb-6">
              <Building className="h-12 w-12 text-slate-700" />
            </div>
            <p className="text-lg mb-4">
              [Nombre de la Empresa] fue fundada en [año] con el objetivo de [objetivo principal]. Desde entonces, hemos
              crecido hasta convertirnos en [descripción de la posición actual en el mercado].
            </p>
            <p className="mb-4">
              Con sede en [ubicación], contamos con [número] empleados y operamos en [áreas geográficas]. Nuestra
              experiencia en [sector/industria] nos ha permitido desarrollar soluciones innovadoras que satisfacen las
              necesidades de nuestros clientes.
            </p>
            <p>
              A lo largo de nuestra historia, hemos mantenido un compromiso inquebrantable con la calidad, la innovación
              y la satisfacción del cliente, valores que siguen guiando nuestras operaciones diarias.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Misión */}
      <section className={cn(currentSection === "mision" ? "block" : "hidden")}>
        <h1 className="text-3xl font-bold mb-6">Nuestra Misión</h1>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-center mb-6">
              <Award className="h-12 w-12 text-slate-700" />
            </div>
            <p className="text-lg mb-4 font-medium text-center italic">
              "Proporcionar [productos/servicios] de la más alta calidad que [beneficio principal para los clientes],
              mientras mantenemos un compromiso con [valores importantes para la empresa]."
            </p>
            <p className="mb-4">
              Nuestra misión refleja nuestro compromiso diario con nuestros clientes, empleados y la sociedad. Nos
              esforzamos por [objetivos específicos relacionados con la misión] y trabajamos constantemente para mejorar
              nuestros procesos y servicios.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Visión */}
      <section className={cn(currentSection === "vision" ? "block" : "hidden")}>
        <h1 className="text-3xl font-bold mb-6">Nuestra Visión</h1>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-center mb-6">
              <Award className="h-12 w-12 text-slate-700" />
            </div>
            <p className="text-lg mb-4 font-medium text-center italic">
              "Ser reconocidos como [posición deseada en el mercado] en [industria/sector], destacando por
              [características distintivas] y generando [impacto deseado] en [grupos de interés]."
            </p>
            <p className="mb-4">
              Nuestra visión nos impulsa a mirar hacia el futuro y establecer metas ambiciosas pero alcanzables.
              Queremos [objetivos a largo plazo] y estamos comprometidos con [estrategias clave para lograr la visión].
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Valores */}
      <section className={cn(currentSection === "valores" ? "block" : "hidden")}>
        <h1 className="text-3xl font-bold mb-6">Nuestros Valores</h1>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-center mb-6">
              <Award className="h-12 w-12 text-slate-700" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Excelencia</h3>
                <p>
                  Nos esforzamos por alcanzar los más altos estándares en todo lo que hacemos, superando las
                  expectativas de nuestros clientes.
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Integridad</h3>
                <p>
                  Actuamos con honestidad, transparencia y ética en todas nuestras relaciones comerciales y personales.
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Innovación</h3>
                <p>
                  Buscamos constantemente nuevas ideas y soluciones creativas para mejorar nuestros productos y
                  servicios.
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Trabajo en equipo</h3>
                <p>
                  Colaboramos eficazmente, aprovechando nuestras diversas habilidades y experiencias para lograr
                  objetivos comunes.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Productos y Servicios */}
      <section className={cn(currentSection === "productos" ? "block" : "hidden")}>
        <h1 className="text-3xl font-bold mb-6">Productos y Servicios</h1>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-center mb-6">
              <ShoppingBag className="h-12 w-12 text-slate-700" />
            </div>
            <div className="grid gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Producto/Servicio 1</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center">
                    <img src="/placeholder.svg?height=200&width=300" alt="Producto 1" className="max-h-full" />
                  </div>
                  <div className="md:col-span-2">
                    <p className="mb-3">
                      Descripción detallada del producto o servicio, incluyendo sus características principales y
                      beneficios para el cliente.
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Característica destacada 1</li>
                      <li>Característica destacada 2</li>
                      <li>Característica destacada 3</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Producto/Servicio 2</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center">
                    <img src="/placeholder.svg?height=200&width=300" alt="Producto 2" className="max-h-full" />
                  </div>
                  <div className="md:col-span-2">
                    <p className="mb-3">
                      Descripción detallada del producto o servicio, incluyendo sus características principales y
                      beneficios para el cliente.
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Característica destacada 1</li>
                      <li>Característica destacada 2</li>
                      <li>Característica destacada 3</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Nuestro Equipo */}
      <section className={cn(currentSection === "equipo" ? "block" : "hidden")}>
        <h1 className="text-3xl font-bold mb-6">Nuestro Equipo</h1>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-center mb-6">
              <Users className="h-12 w-12 text-slate-700" />
            </div>
            <p className="text-lg mb-6">
              Nuestro equipo está formado por profesionales altamente cualificados y comprometidos con la excelencia.
              Cada miembro aporta su experiencia y talento único para ofrecer soluciones excepcionales a nuestros
              clientes.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-slate-200 mx-auto mb-4 overflow-hidden">
                  <img
                    src="/placeholder.svg?height=128&width=128"
                    alt="Miembro del equipo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold">Nombre Apellido</h3>
                <p className="text-sm text-slate-600">Cargo / Posición</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-slate-200 mx-auto mb-4 overflow-hidden">
                  <img
                    src="/placeholder.svg?height=128&width=128"
                    alt="Miembro del equipo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold">Nombre Apellido</h3>
                <p className="text-sm text-slate-600">Cargo / Posición</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-slate-200 mx-auto mb-4 overflow-hidden">
                  <img
                    src="/placeholder.svg?height=128&width=128"
                    alt="Miembro del equipo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold">Nombre Apellido</h3>
                <p className="text-sm text-slate-600">Cargo / Posición</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Clientes */}
      <section className={cn(currentSection === "clientes" ? "block" : "hidden")}>
        <h1 className="text-3xl font-bold mb-6">Nuestros Clientes</h1>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-center mb-6">
              <Briefcase className="h-12 w-12 text-slate-700" />
            </div>
            <p className="text-lg mb-6">
              Tenemos el privilegio de trabajar con una amplia gama de clientes en diversos sectores. A continuación,
              presentamos algunas de las organizaciones que han confiado en nosotros:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="aspect-square bg-slate-100 rounded-lg flex items-center justify-center p-4">
                <img src="/placeholder.svg?height=100&width=100" alt="Logo cliente" className="max-w-full max-h-full" />
              </div>
              <div className="aspect-square bg-slate-100 rounded-lg flex items-center justify-center p-4">
                <img src="/placeholder.svg?height=100&width=100" alt="Logo cliente" className="max-w-full max-h-full" />
              </div>
              <div className="aspect-square bg-slate-100 rounded-lg flex items-center justify-center p-4">
                <img src="/placeholder.svg?height=100&width=100" alt="Logo cliente" className="max-w-full max-h-full" />
              </div>
              <div className="aspect-square bg-slate-100 rounded-lg flex items-center justify-center p-4">
                <img src="/placeholder.svg?height=100&width=100" alt="Logo cliente" className="max-w-full max-h-full" />
              </div>
              <div className="aspect-square bg-slate-100 rounded-lg flex items-center justify-center p-4">
                <img src="/placeholder.svg?height=100&width=100" alt="Logo cliente" className="max-w-full max-h-full" />
              </div>
              <div className="aspect-square bg-slate-100 rounded-lg flex items-center justify-center p-4">
                <img src="/placeholder.svg?height=100&width=100" alt="Logo cliente" className="max-w-full max-h-full" />
              </div>
              <div className="aspect-square bg-slate-100 rounded-lg flex items-center justify-center p-4">
                <img src="/placeholder.svg?height=100&width=100" alt="Logo cliente" className="max-w-full max-h-full" />
              </div>
              <div className="aspect-square bg-slate-100 rounded-lg flex items-center justify-center p-4">
                <img src="/placeholder.svg?height=100&width=100" alt="Logo cliente" className="max-w-full max-h-full" />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Casos de Éxito */}
      <section className={cn(currentSection === "casos" ? "block" : "hidden")}>
        <h1 className="text-3xl font-bold mb-6">Casos de Éxito</h1>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-center mb-6">
              <UserCheck className="h-12 w-12 text-slate-700" />
            </div>
            <div className="space-y-8">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Cliente: [Nombre del Cliente]</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center">
                    <img src="/placeholder.svg?height=200&width=300" alt="Caso de éxito" className="max-h-full" />
                  </div>
                  <div className="md:col-span-2">
                    <p className="mb-3">
                      <strong>Desafío:</strong> Descripción del problema o desafío que enfrentaba el cliente antes de
                      trabajar con nosotros.
                    </p>
                    <p className="mb-3">
                      <strong>Solución:</strong> Explicación de cómo abordamos el desafío y qué soluciones
                      implementamos.
                    </p>
                    <p>
                      <strong>Resultados:</strong> Descripción de los resultados obtenidos, preferiblemente con datos
                      cuantitativos que demuestren el éxito.
                    </p>
                  </div>
                </div>
                <blockquote className="border-l-4 border-slate-300 pl-4 italic text-slate-600">
                  "Testimonio del cliente sobre su experiencia trabajando con nosotros y los resultados obtenidos."
                  <footer className="mt-2 font-medium text-slate-800">— Nombre, Cargo en [Empresa]</footer>
                </blockquote>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Cliente: [Nombre del Cliente]</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center">
                    <img src="/placeholder.svg?height=200&width=300" alt="Caso de éxito" className="max-h-full" />
                  </div>
                  <div className="md:col-span-2">
                    <p className="mb-3">
                      <strong>Desafío:</strong> Descripción del problema o desafío que enfrentaba el cliente antes de
                      trabajar con nosotros.
                    </p>
                    <p className="mb-3">
                      <strong>Solución:</strong> Explicación de cómo abordamos el desafío y qué soluciones
                      implementamos.
                    </p>
                    <p>
                      <strong>Resultados:</strong> Descripción de los resultados obtenidos, preferiblemente con datos
                      cuantitativos que demuestren el éxito.
                    </p>
                  </div>
                </div>
                <blockquote className="border-l-4 border-slate-300 pl-4 italic text-slate-600">
                  "Testimonio del cliente sobre su experiencia trabajando con nosotros y los resultados obtenidos."
                  <footer className="mt-2 font-medium text-slate-800">— Nombre, Cargo en [Empresa]</footer>
                </blockquote>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Contacto */}
      <section className={cn(currentSection === "contacto" ? "block" : "hidden")}>
        <h1 className="text-3xl font-bold mb-6">Contacto</h1>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-center mb-6">
              <Phone className="h-12 w-12 text-slate-700" />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Información de Contacto</h3>
                <div className="space-y-3">
                  <p>
                    <strong>Dirección:</strong>
                    <br />
                    Calle Principal, 123
                    <br />
                    Ciudad, Código Postal
                    <br />
                    País
                  </p>
                  <p>
                    <strong>Teléfono:</strong>
                    <br />
                    +00 123 456 789
                  </p>
                  <p>
                    <strong>Email:</strong>
                    <br />
                    info@empresa.com
                  </p>
                  <p>
                    <strong>Horario de atención:</strong>
                    <br />
                    Lunes a Viernes: 9:00 - 18:00
                    <br />
                    Sábados: 9:00 - 13:00
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Ubicación</h3>
                <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="Mapa de ubicación"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <p className="mt-3 text-sm text-slate-600">
                  Estamos ubicados en una zona céntrica de fácil acceso. Disponemos de estacionamiento para clientes.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

