import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, AlertCircle, HeartHandshake, Shield, Users } from "lucide-react";

const Help = () => {
  const actionSteps = [
    {
      title: "Si eres víctima",
      icon: Shield,
      color: "text-primary",
      steps: [
        "No estás solo. El bullying no es tu culpa",
        "Habla con un adulto de confianza (padres, maestros, orientador)",
        "Documenta los incidentes (fecha, hora, testigos)",
        "No respondas con violencia, busca ayuda",
        "Mantén la calma y aléjate de situaciones peligrosas"
      ]
    },
    {
      title: "Si eres testigo",
      icon: Users,
      color: "text-secondary",
      steps: [
        "No seas un espectador pasivo, actúa",
        "Apoya a la víctima, hazle saber que no está sola",
        "Reporta lo que viste a un adulto responsable",
        "No compartas contenido de acoso en redes",
        "Si es seguro, intervén de manera asertiva"
      ]
    },
    {
      title: "Si eres padre/madre",
      icon: HeartHandshake,
      color: "text-accent",
      steps: [
        "Escucha sin juzgar, valida sus sentimientos",
        "Mantén la calma y no tomes represalias directas",
        "Contacta a la escuela inmediatamente",
        "Documenta todo con evidencias",
        "Considera apoyo psicológico si es necesario"
      ]
    }
  ];

  const emergencyContacts = [
    {
      name: "Línea de Ayuda Nacional",
      number: "800-123-4567",
      description: "Atención 24/7 para casos de emergencia"
    },
    {
      name: "Ministerio de Educación",
      number: "800-765-4321",
      description: "Denuncias de acoso escolar"
    },
    {
      name: "Ayuda Psicológica",
      number: "800-555-0123",
      description: "Apoyo emocional y orientación"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-accent">
              ¿Necesitas Ayuda?
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              No estás solo. Aquí encontrarás recursos, contactos y guías para
              enfrentar situaciones de bullying.
            </p>
          </div>

          {/* Emergency Alert */}
          <Card className="mb-12 shadow-soft bg-destructive/5 border-destructive/20 animate-scale-in">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <AlertCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">¿Situación de emergencia?</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Si estás en peligro inmediato o presencias violencia grave, contacta
                    a las autoridades locales o servicios de emergencia.
                  </p>
                  <Button variant="destructive" size="sm">
                    <Phone className="h-4 w-4 mr-2" />
                    Llamar Emergencias
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Steps */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">¿Qué hacer?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {actionSteps.map((section, index) => {
                const Icon = section.icon;
                return (
                  <Card 
                    key={index}
                    className="shadow-card hover:shadow-soft transition-all animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-muted rounded-lg">
                          <Icon className={`h-6 w-6 ${section.color}`} />
                        </div>
                        <CardTitle className="text-lg">{section.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ol className="space-y-3">
                        {section.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="text-sm text-muted-foreground flex items-start">
                            <span className={`${section.color} mr-2 font-bold`}>
                              {stepIndex + 1}.
                            </span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Contact Resources */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Contactos de Apoyo</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {emergencyContacts.map((contact, index) => (
                <Card 
                  key={index}
                  className="shadow-card animate-scale-in text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="inline-flex p-3 bg-primary/10 rounded-full mx-auto mb-3">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{contact.name}</CardTitle>
                    <CardDescription>{contact.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-primary mb-3">{contact.number}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      <Phone className="h-4 w-4 mr-2" />
                      Llamar ahora
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Online Resources */}
          <Card className="shadow-card animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl">Recursos Adicionales</CardTitle>
              <CardDescription>
                Más formas de obtener apoyo y orientación
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Correo de Apoyo</h4>
                    <p className="text-sm text-muted-foreground">ayuda@contrabullying.org</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                  <Users className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Grupos de Apoyo</h4>
                    <p className="text-sm text-muted-foreground">Reuniones semanales virtuales</p>
                  </div>
                </div>
              </div>
              <div className="bg-secondary/10 p-4 rounded-lg">
                <p className="text-sm text-center">
                  <strong>Nota importante:</strong> Todos los contactos y recursos están disponibles
                  de forma gratuita y confidencial. Tu seguridad es nuestra prioridad.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Help;
