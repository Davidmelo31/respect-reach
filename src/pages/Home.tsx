import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Heart, Users, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16 animate-fade-in">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
              Juntos Contra el Bullying
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Un espacio seguro para aprender, prevenir y combatir el acoso escolar.
              Porque todos merecemos respeto y dignidad.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/que-es">
                <Button size="lg" className="shadow-soft">
                  Aprende más
                </Button>
              </Link>
              <Link to="/ayuda">
                <Button size="lg" variant="outline" className="shadow-soft">
                  Buscar ayuda
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="shadow-card hover:shadow-soft transition-all hover:scale-105 animate-scale-in">
            <CardContent className="pt-6 text-center">
              <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Información</h3>
              <p className="text-sm text-muted-foreground">
                Conoce qué es el bullying y sus diferentes formas
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-soft transition-all hover:scale-105 animate-scale-in" style={{ animationDelay: "0.1s" }}>
            <CardContent className="pt-6 text-center">
              <div className="inline-flex p-3 bg-secondary/10 rounded-full mb-4">
                <Heart className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Prevención</h3>
              <p className="text-sm text-muted-foreground">
                Estrategias para crear ambientes seguros y respetuosos
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-soft transition-all hover:scale-105 animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <CardContent className="pt-6 text-center">
              <div className="inline-flex p-3 bg-accent/10 rounded-full mb-4">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Ayuda</h3>
              <p className="text-sm text-muted-foreground">
                Recursos y contactos para víctimas y testigos
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-soft transition-all hover:scale-105 animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <CardContent className="pt-6 text-center">
              <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Respeto</h3>
              <p className="text-sm text-muted-foreground">
                Promovemos valores de empatía y convivencia sana
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-center text-white shadow-soft animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tu voz puede hacer la diferencia
          </h2>
          <p className="text-lg mb-6 opacity-90">
            No estás solo. Juntos podemos crear un ambiente libre de acoso.
          </p>
          <Link to="/respeto">
            <Button size="lg" variant="secondary" className="shadow-soft">
              Conoce más sobre el respeto
            </Button>
          </Link>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
