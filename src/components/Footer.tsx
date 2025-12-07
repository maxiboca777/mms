import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import logo from "figma:asset/83c25b30b6f7145b95f51dbb9df6d9693f7f13bc.png";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Multimedia Show" className="w-12 h-12" />
              <h3 className="text-xl bg-gradient-to-r from-[#B545D1] to-[#00B4D8] text-transparent bg-clip-text">
                Multimedia Show
              </h3>
            </div>
            <p className="text-gray-400 text-sm">
              Servicios profesionales de producción multimedia para festivales y eventos musicales en Argentina.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-[#00B4D8] transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-[#00B4D8] transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00B4D8] transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00B4D8] transition-colors">
                  Términos y Condiciones
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="mb-4">Seguinos</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-white/5 hover:bg-gradient-to-r hover:from-[#B545D1] hover:to-[#00B4D8] border border-white/10 hover:border-[#00B4D8] w-10 h-10 rounded-lg flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/5 hover:bg-gradient-to-r hover:from-[#B545D1] hover:to-[#00B4D8] border border-white/10 hover:border-[#00B4D8] w-10 h-10 rounded-lg flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/5 hover:bg-gradient-to-r hover:from-[#B545D1] hover:to-[#00B4D8] border border-white/10 hover:border-[#00B4D8] w-10 h-10 rounded-lg flex items-center justify-center transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/5 hover:bg-gradient-to-r hover:from-[#B545D1] hover:to-[#00B4D8] border border-white/10 hover:border-[#00B4D8] w-10 h-10 rounded-lg flex items-center justify-center transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Multimedia Show. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
