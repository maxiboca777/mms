import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Video, Sparkles, ShoppingBag } from "lucide-react";
import logo from "figma:asset/83c25b30b6f7145b95f51dbb9df6d9693f7f13bc.png";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1611523627563-40dc862ee241?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGZlc3RpdmFsJTIwY29uY2VydHxlbnwxfHx8fDE3NjQxODM3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Festival de música"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="mb-8 flex justify-center">
          <img src={logo} alt="Multimedia Show" className="w-48 h-48 md:w-64 md:h-64" />
        </div>
        <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-gray-200 max-w-3xl mx-auto">
          Servicios completos de producción multimedia para festivales y eventos musicales en Argentina
        </p>
        
        {/* Quick Services Icons */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <Video className="w-6 h-6 text-[#00B4D8]" />
            <span className="text-lg">Streaming</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-[#B545D1]" />
            <span className="text-lg">Contenido IA</span>
          </div>
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-6 h-6 text-[#00B4D8]" />
            <span className="text-lg">Merchandising</span>
          </div>
        </div>

        <a
          href="#servicios"
          className="inline-block bg-gradient-to-r from-[#B545D1] to-[#00B4D8] hover:from-[#9333EA] hover:to-[#0891B2] px-8 py-4 rounded-full transition-all transform hover:scale-105"
        >
          Conocé nuestros servicios
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
}
