import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Sparkles, Users, Smile } from "lucide-react";

const Respect = () => {
  const values = [
    {
      icon: Heart,
      title: "Empatía",
      description: "Ponerse en el lugar del otro",
      quote: "La empatía es ver con los ojos del otro, escuchar con los oídos del otro y sentir con el corazón del otro."
    },
    {
      icon: Users,
      title: "Inclusión",
      description: "Todos merecen pertenecer",
      quote: "La diversidad es ser invitado a la fiesta. La inclusión es ser invitado a bailar."
    },
    {
      icon: Sparkles,
      title: "Respeto",
      description: "Valorar a cada persona",
      quote: "El respeto no se impone ni se suplica, se gana y se ofrece."
    },
    {
      icon: Smile,
      title: "Amabilidad",
      description: "Pequeños actos, grandes cambios",
      quote: "Un acto de amabilidad, por pequeño que sea, nunca se desperdicia."
    }
  ];

  const testimonials = [
    {
      text: "Aprendí que ser diferente no es malo, es lo que me hace especial. Ahora defiendo a otros que pasan por lo que yo pasé.",
      author: "María, 15 años",
      color: "border-primary/20 bg-primary/5"
    },
    {
      text: "Como profesor, decidí crear un ambiente donde cada estudiante se sienta valorado. Los resultados han sido increíbles.",
      author: "Profesor Juan",
      color: "border-secondary/20 bg-secondary/5"
    },
    {
      text: "Dejé de ser un espectador. Ahora cuando veo bullying, actúo. Todos podemos hacer la diferencia.",
      author: "Carlos, 16 años",
      color: "border-accent/20 bg-accent/5"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
              El Poder del Respeto
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              El respeto, la empatía y la amabilidad son las bases de una convivencia sana.
              Juntos podemos crear un mundo mejor.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={index}
                  className="shadow-card hover:shadow-soft transition-all animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-gradient-hero rounded-full">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{value.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <blockquote className="italic text-muted-foreground border-l-4 border-primary pl-4">
                      "{value.quote}"
                    </blockquote>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Inspirational Message */}
          <Card className="mb-16 shadow-soft bg-gradient-hero text-white animate-fade-in">
            <CardContent className="pt-6 pb-6">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">
                  Cada Acción Cuenta
                </h2>
                <p className="text-lg opacity-90 leading-relaxed">
                  No necesitas ser un superhéroe para hacer la diferencia. Un saludo, una sonrisa,
                  defender a alguien, escuchar sin juzgar... Cada gesto de respeto y amabilidad
                  crea un efecto dominó que transforma nuestra comunidad.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Testimonials */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Historias que Inspiran</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={index}
                  className={`shadow-card animate-scale-in ${testimonial.color}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="pt-6">
                    <div className="flex flex-col h-full">
                      <p className="text-muted-foreground italic mb-4 flex-grow">
                        "{testimonial.text}"
                      </p>
                      <p className="font-semibold text-sm">— {testimonial.author}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <Card className="shadow-card animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Comprométete Hoy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">Promesas personales:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Trataré a todos con respeto, sin importar nuestras diferencias</li>
                    <li>✓ No seré un espectador silencioso ante el bullying</li>
                    <li>✓ Ofreceré ayuda a quien la necesite</li>
                    <li>✓ Celebraré la diversidad en todas sus formas</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">Acciones diarias:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Saludar con amabilidad</li>
                    <li>✓ Incluir a quien está solo</li>
                    <li>✓ Defender a quien es atacado</li>
                    <li>✓ Practicar la escucha activa</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-secondary/10 rounded-lg text-center">
                <p className="font-semibold text-secondary">
                  El cambio comienza contigo. Sé el ejemplo que el mundo necesita.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Respect;
