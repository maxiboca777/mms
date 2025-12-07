import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // TODO: REPLACE 'YOUR_FORM_ID' WITH YOUR ACTUAL FORMSPREE FORM ID
    // Register at https://formspree.io/ to get one.
    const FORMSPREE_ID = "xvgeqezo";

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("success");
        alert("¡Gracias por tu mensaje! Nos pondremos en contacto pronto.");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
        alert("Hubo un error al enviar el mensaje. Por favor intenta nuevamente.");
      }
    } catch (error) {
      setStatus("error");
      alert("Hubo un error de conexión.");
    } finally {
      setStatus("idle");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-black to-[#B545D1]/10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4">
              Contactanos
            </h2>
            <p className="text-xl text-gray-400">
              ¿Tenés un evento en mente? Hablemos sobre cómo podemos ayudarte
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-[#B545D1]/20 to-[#00B4D8]/20 border border-[#00B4D8]/30 rounded-2xl p-8">
                <h3 className="text-2xl mb-6">Información de Contacto</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-[#B545D1] to-[#00B4D8] p-3 rounded-lg">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Email</div>
                      <div>info@multimediashow.com.ar</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-[#B545D1] to-[#00B4D8] p-3 rounded-lg">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Teléfono</div>
                      <div>+54 11 1234-5678</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-[#B545D1] to-[#00B4D8] p-3 rounded-lg">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Ubicación</div>
                      <div>Buenos Aires, Argentina</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl mb-4">Horarios de Atención</h3>
                <p className="text-gray-400">Lunes a Viernes: 9:00 - 18:00</p>
                <p className="text-gray-400">Sábados: 10:00 - 14:00</p>
                <p className="text-sm text-[#00B4D8] mt-4">
                  * Disponibilidad 24/7 para eventos en curso
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-b from-white/5 to-white/0 border border-white/10 rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2 text-gray-300">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00B4D8] transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm mb-2 text-gray-300">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00B4D8] transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm mb-2 text-gray-300">
                    Productora / Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00B4D8] transition-colors"
                    placeholder="Nombre de tu productora"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm mb-2 text-gray-300">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00B4D8] transition-colors resize-none"
                    placeholder="Contanos sobre tu evento y cómo podemos ayudarte"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-gradient-to-r from-[#B545D1] to-[#00B4D8] hover:from-[#9333EA] hover:to-[#0891B2] disabled:opacity-50 disabled:cursor-not-allowed px-6 py-4 rounded-lg transition-all flex items-center justify-center gap-2 group"
                >
                  <span>{status === "submitting" ? "Enviando..." : "Enviar Mensaje"}</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
