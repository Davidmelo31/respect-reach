import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Sparkles, Clock } from "lucide-react";

const AI = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex p-4 bg-gradient-hero rounded-full mb-6">
              <Bot className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              Asistente con IA
            </h1>
            <p className="text-lg text-muted-foreground">
              Próximamente: Tu compañero inteligente contra el bullying
            </p>
          </div>

          {/* Coming Soon Card */}
          <Card className="shadow-soft animate-scale-in">
            <CardHeader className="text-center">
              <div className="inline-flex items-center justify-center gap-2 mb-4">
                <Clock className="h-6 w-6 text-accent" />
                <CardTitle className="text-2xl">Próximamente Disponible</CardTitle>
              </div>
              <CardDescription className="text-base">
                Estamos desarrollando una herramienta de inteligencia artificial que te ayudará
                en tu lucha contra el bullying
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Features Preview */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-secondary" />
                  ¿Qué podrá hacer?
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2 text-primary">💬 Chat de apoyo</h4>
                    <p className="text-sm text-muted-foreground">
                      Conversación confidencial 24/7 para orientación inmediata
                    </p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2 text-secondary">🔍 Análisis de situaciones</h4>
                    <p className="text-sm text-muted-foreground">
                      Evaluación de casos y recomendaciones personalizadas
                    </p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2 text-accent">📚 Recursos educativos</h4>
                    <p className="text-sm text-muted-foreground">
                      Material personalizado según tu situación
                    </p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2 text-primary">🛡️ Estrategias de acción</h4>
                    <p className="text-sm text-muted-foreground">
                      Planes paso a paso para enfrentar el acoso
                    </p>
                  </div>
                </div>
              </div>

              {/* Important Notice */}
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                <p className="text-sm text-center">
                  <strong>Nota importante:</strong> La IA será un complemento de apoyo, no un
                  sustituto de ayuda profesional. Siempre recomendaremos contactar con expertos
                  cuando sea necesario.
                </p>
              </div>

              {/* Stay Tuned */}
              <div className="text-center pt-4">
                <p className="text-muted-foreground">
                  Estamos trabajando arduamente para traerte esta funcionalidad.
                  <br />
                  Mantente atento a las actualizaciones.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Tech Info */}
          <Card className="mt-8 shadow-card animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <CardHeader>
              <CardTitle className="text-xl">Tecnología responsable</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Nuestro asistente de IA estará diseñado con los más altos estándares de ética
                y privacidad. Priorizamos tu seguridad, confidencialidad y bienestar emocional
                en cada interacción.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default AI;
