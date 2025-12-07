import { Target, Heart, TrendingUp, Award } from "lucide-react";

export function About() {
  const stats = [
    { number: "100+", label: "Eventos Producidos" },
    { number: "50K+", label: "Espectadores Online" },
    { number: "30+", label: "Productoras Asociadas" },
    { number: "100%", label: "Satisfacción Cliente" }
  ];

  const values = [
    {
      icon: Target,
      title: "Enfoque Profesional",
      description: "Trabajamos exclusivamente con productoras de festivales y eventos, entendiendo sus necesidades específicas."
    },
    {
      icon: TrendingUp,
      title: "Tecnología de Punta",
      description: "Utilizamos las últimas herramientas de IA y streaming para ofrecer resultados superiores."
    },
    {
      icon: Heart,
      title: "Pasión por la Música",
      description: "Somos fanáticos de los eventos musicales y nos apasiona ayudar a que sean un éxito."
    },
    {
      icon: Award,
      title: "Calidad Garantizada",
      description: "Cada proyecto es tratado con el máximo nivel de profesionalismo y atención al detalle."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#B545D1]/10 to-black">
      <div className="container mx-auto px-4">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl mb-2 bg-gradient-to-r from-[#B545D1] to-[#00B4D8] text-transparent bg-clip-text">
                {stat.number}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* About Content */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            Sobre Multimedia Show
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            Somos una empresa especializada en brindar servicios integrales de producción multimedia para la industria de eventos musicales en Argentina.
          </p>
          <p className="text-lg text-gray-400">
            Nuestro equipo combina experiencia en producción audiovisual, tecnologías emergentes y un profundo conocimiento de la industria del entretenimiento para ofrecer soluciones que maximizan el alcance y el impacto de cada evento.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-b from-white/5 to-white/0 border border-white/10 rounded-xl p-6 hover:border-[#00B4D8]/50 transition-all"
              >
                <div className="bg-gradient-to-r from-[#B545D1] to-[#00B4D8] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl mb-2">{value.title}</h3>
                <p className="text-sm text-gray-400">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
