import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Eye, MessageCircle, BookOpen, Home } from "lucide-react";

const Prevention = () => {
  const preventionStrategies = [
    {
      icon: Shield,
      title: "Educación y Concienciación",
      tips: [
        "Informar sobre qué es el bullying y sus consecuencias",
        "Promover programas de prevención en escuelas",
        "Capacitar al personal educativo para detectar señales",
        "Realizar talleres de empatía y respeto"
      ]
    },
    {
      icon: Users,
      title: "Crear Ambientes Seguros",
      tips: [
        "Fomentar la inclusión y el respeto a la diversidad",
        "Establecer normas claras contra el acoso",
        "Crear espacios de diálogo abierto",
        "Promover actividades de integración grupal"
      ]
    },
    {
      icon: Eye,
      title: "Supervisión Activa",
      tips: [
        "Monitorear áreas comunes (patios, pasillos, baños)",
        "Estar atentos a cambios de comportamiento",
        "Revisar interacciones en redes sociales escolares",
        "Mantener comunicación constante con estudiantes"
      ]
    },
    {
      icon: MessageCircle,
      title: "Fomentar la Comunicación",
      tips: [
        "Crear canales seguros para reportar acoso",
        "Animar a hablar sobre sus sentimientos",
        "Escuchar sin juzgar ni minimizar",
        "Mantener confidencialidad cuando sea apropiado"
      ]
    },
    {
      icon: BookOpen,
      title: "Desarrollar Habilidades Sociales",
      tips: [
        "Enseñar resolución pacífica de conflictos",
        "Trabajar la inteligencia emocional",
        "Promover la asertividad",
        "Practicar la empatía y comprensión"
      ]
    },
    {
      icon: Home,
      title: "Involucrar a las Familias",
      tips: [
        "Mantener comunicación regular con padres",
        "Organizar reuniones informativas",
        "Compartir señales de alerta",
        "Crear red de apoyo entre familias"
      ]
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">
              Prevención del Bullying
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              La prevención es la mejor herramienta. Descubre estrategias efectivas
              para crear entornos seguros y respetuosos.
            </p>
          </div>

          {/* Key Message */}
          <Card className="mb-12 shadow-soft bg-gradient-to-r from-secondary/10 to-primary/10 border-secondary/20 animate-scale-in">
            <CardContent className="pt-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-3">¿Por qué prevenir?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  La prevención del bullying no solo protege a las víctimas potenciales,
                  sino que también ayuda a los posibles agresores a desarrollar
                  comportamientos saludables. Un ambiente de respeto y empatía beneficia
                  a toda la comunidad.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Prevention Strategies */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Estrategias de Prevención</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {preventionStrategies.map((strategy, index) => {
                const Icon = strategy.icon;
                return (
                  <Card 
                    key={index}
                    className="shadow-card hover:shadow-soft transition-all animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-secondary/10 rounded-lg">
                          <Icon className="h-6 w-6 text-secondary" />
                        </div>
                        <CardTitle className="text-lg">{strategy.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {strategy.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-secondary mr-2 font-bold">•</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Best Practices */}
          <Card className="shadow-card animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl">Buenas Prácticas de Convivencia</CardTitle>
              <CardDescription>
                Acciones diarias que construyen un ambiente de respeto
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg text-primary">Para estudiantes:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Trata a los demás como quieres ser tratado</li>
                    <li>✓ No seas testigo silencioso, reporta el acoso</li>
                    <li>✓ Apoya a quien lo necesite</li>
                    <li>✓ Acepta y celebra las diferencias</li>
                    <li>✓ Piensa antes de publicar en redes sociales</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg text-secondary">Para educadores y padres:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Sé un modelo de respeto y empatía</li>
                    <li>✓ Intervén de inmediato ante cualquier acoso</li>
                    <li>✓ Mantén líneas de comunicación abiertas</li>
                    <li>✓ Refuerza comportamientos positivos</li>
                    <li>✓ Trabaja en equipo con otros adultos</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Prevention;
