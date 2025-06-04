import { Button } from "@/components/ui/button"
import { Brain, Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  const handleGoHome = () => {
    window.location.href = "/"
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          {/* Logo */}
          <div className="mb-8 animate-scale-up">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
              <Brain className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* 404 Message */}
          <h1 className="text-8xl md:text-9xl font-bold mb-4 animate-fade-in-up">
            <span className="gradient-text">404</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 animate-fade-in-up delay-200">
            Página No Encontrada
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed animate-fade-in-up delay-400">
            La página que buscas no existe o ha sido movida. 
            <br />
            Volvé al inicio para explorar nuestras soluciones de IA.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-600">
            <Button
              onClick={handleGoHome}
              className="btn-gradient text-white font-semibold text-lg px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 flex items-center space-x-3"
            >
              <Home className="w-5 h-5" />
              <span>Volver al Inicio</span>
            </Button>
            
            <Button
              onClick={() => window.history.back()}
              variant="outline"
              className="px-8 py-4 rounded-xl border-2 border-slate-600 text-muted-foreground font-semibold text-lg hover:border-blue-500 hover:text-blue-500 hover:bg-blue-500/5 transition-all duration-300 flex items-center space-x-3"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Página Anterior</span>
            </Button>
          </div>

          {/* Additional Info */}
          <div className="mt-12 animate-fade-in-up delay-800">
            <p className="text-muted-foreground/70 text-sm">
              Si necesitas ayuda, contactanos por WhatsApp: 
              <br />
              <span className="text-cyan-500 font-semibold">+54 9 11 6039-0755</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}