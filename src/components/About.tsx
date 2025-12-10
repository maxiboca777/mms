import { Target, Heart, TrendingUp, Award } from "lucide-react";

export function About() {

  const values = [
    {
      icon: Target,
      title: "Enfoque Profesional",
    },
    {
      icon: TrendingUp,
      title: "Tecnología de Punta",
    },
    {
      icon: Heart,
      title: "Pasión por la Música",
    },
    {
      icon: Award,
      title: "Calidad Garantizada",
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#B545D1]/10 to-black">
      <div className="container mx-auto px-4">


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
                className="bg-gradient-to-b from-white/5 to-white/0 border border-white/10 rounded-xl p-6 hover:border-[#00B4D8]/50 transition-all flex flex-col items-center text-center h-full justify-center"
              >
                <div className="bg-gradient-to-r from-[#B545D1] to-[#00B4D8] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium">{value.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
