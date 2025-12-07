import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Video, Sparkles, ShoppingBag, Radio, Users, Zap } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Video,
      title: "Streaming de Shows",
      description: "Transmisión en vivo de alta calidad para que tu evento llegue a todo el mundo. Equipos profesionales y tecnología de última generación.",
      image: "https://images.unsplash.com/photo-1652172100914-c5b691730756?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwc3RyZWFtaW5nJTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3NjQyODcxMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        { icon: Radio, text: "Transmisión multi-plataforma" },
        { icon: Users, text: "Alcance ilimitado de audiencia" },
        { icon: Zap, text: "Calidad 4K y baja latencia" }
      ]
    },
    {
      icon: Sparkles,
      title: "Creación de Contenido con IA",
      description: "Generamos contenido impactante para redes sociales utilizando las últimas tecnologías de inteligencia artificial para promocionar tus eventos.",
      image: "https://images.unsplash.com/photo-1572814392266-1620040c58be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGNvbnRlbnQlMjBjcmVhdGlvbnxlbnwxfHx8fDE3NjQyNDQwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        { icon: Sparkles, text: "Contenido generado con IA" },
        { icon: Video, text: "Videos y gráficos personalizados" },
        { icon: Zap, text: "Rápida producción y entrega" }
      ]
    },
    {
      icon: ShoppingBag,
      title: "Merchandising Personalizado",
      description: "Diseñamos y producimos merchandise de alta calidad: botellas, mochilas, gorras y bandoleras perfectas para vender en tus eventos.",
      image: "https://images.unsplash.com/photo-1567967736267-f06a0e7738c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXJjaGFuZGlzZSUyMGFwcGFyZWwlMjBib3R0bGVzfGVufDF8fHx8MTc2NDI4NzEwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        { icon: ShoppingBag, text: "Diseños exclusivos" },
        { icon: Sparkles, text: "Productos premium" },
        { icon: Zap, text: "Producción a gran escala" }
      ]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gradient-to-b from-black to-[#B545D1]/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Soluciones completas para llevar tu evento al próximo nivel
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-b from-white/5 to-white/0 border border-white/10 rounded-2xl overflow-hidden hover:border-[#00B4D8]/50 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-gradient-to-r from-[#B545D1] to-[#00B4D8] p-3 rounded-xl">
                      <Icon className="w-8 h-8" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>

                  {/* Features */}
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <div key={idx} className="flex items-center gap-3">
                          <FeatureIcon className="w-5 h-5 text-[#00B4D8]" />
                          <span className="text-sm text-gray-300">{feature.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
