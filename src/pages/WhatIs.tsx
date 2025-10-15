import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, MessageSquare, Frown, Smartphone, Repeat } from "lucide-react";

const WhatIs = () => {
  const bullyingTypes = [
    {
      icon: AlertCircle,
      title: "Físico",
      description: "Golpes, empujones, daño a pertenencias personales",
      examples: "Pegar, robar objetos, destruir trabajos",
      color: "text-destructive"
    },
    {
      icon: MessageSquare,
      title: "Verbal",
      description: "Insultos, burlas, amenazas y apodos ofensivos",
      examples: "Insultar, humillar públicamente, poner sobrenombres hirientes",
      color: "text-accent"
    },
    {
      icon: Frown,
      title: "Psicológico",
      description: "Exclusión social, manipulación y daño emocional",
      examples: "Ignorar, aislar del grupo, difundir rumores falsos",
      color: "text-primary"
    },
    {
      icon: Smartphone,
      title: "Cibernético",
      description: "Acoso a través de redes sociales y medios digitales",
      examples: "Mensajes ofensivos, publicar fotos sin permiso, amenazas online",
      color: "text-secondary"
    },
    {
      icon: Repeat,
      title: "Características",
      description: "El bullying es repetitivo, intencional y desigual",
      examples: "Ocurre de forma continua, hay desequilibrio de poder, busca dañar",
      color: "text-muted-foreground"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              ¿Qué es el Bullying?
            </h1>
            <p className="text-lg text-muted-foreground">
              El bullying o acoso escolar es un comportamiento agresivo, repetitivo e intencional
              que involucra un desequilibrio de poder entre el agresor y la víctima.
            </p>
          </div>

          {/* Definition Card */}
          <Card className="mb-12 shadow-card animate-scale-in">
            <CardHeader>
              <CardTitle className="text-2xl">Definición</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                El bullying es un patrón de comportamiento agresivo donde una persona o grupo
                ejerce poder sobre otra de manera repetida y deliberada. No es un simple conflicto
                o pelea ocasional, sino una situación sostenida que causa daño físico, emocional
                o social a la víctima.
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="font-semibold mb-2">Elementos clave del bullying:</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>Intencionalidad:</strong> El agresor busca deliberadamente hacer daño</li>
                  <li>• <strong>Repetición:</strong> Ocurre de forma continua en el tiempo</li>
                  <li>• <strong>Desequilibrio de poder:</strong> Existe una diferencia de fuerza o influencia</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Types of Bullying */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Tipos de Bullying</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {bullyingTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <Card 
                    key={index} 
                    className="shadow-card hover:shadow-soft transition-all animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className={`p-2 bg-muted rounded-lg ${type.color}`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <CardTitle>{type.title}</CardTitle>
                      </div>
                      <CardDescription>{type.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm text-muted-foreground">
                        <p className="font-medium mb-1">Ejemplos:</p>
                        <p>{type.examples}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Warning Signs */}
          <Card className="shadow-card animate-fade-in bg-accent/5 border-accent/20">
            <CardHeader>
              <CardTitle className="text-2xl text-accent">Señales de Alerta</CardTitle>
              <CardDescription>
                Indicadores de que alguien puede estar siendo víctima de bullying
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Cambios emocionales:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Tristeza o ansiedad constante</li>
                    <li>• Baja autoestima</li>
                    <li>• Cambios de humor repentinos</li>
                    <li>• Miedo a ir a la escuela</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Cambios de comportamiento:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Aislamiento social</li>
                    <li>• Pérdida de pertenencias</li>
                    <li>• Lesiones inexplicables</li>
                    <li>• Problemas académicos</li>
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

export default WhatIs;
