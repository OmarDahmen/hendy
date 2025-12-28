import { Card, CardContent } from '@/components/ui/card'
import { Palette, BookOpen, Sparkles, Heart } from 'lucide-react'

export function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-3xl font-bold md:text-4xl">À Propos de Hændy Kits</h1>
        <p className="text-muted-foreground mb-12 text-lg">
          Une marque créative et éducative pour enfants et adolescents
        </p>

        <div className="prose prose-lg mb-12 max-w-none">
          <h2 className="mb-4 text-2xl font-bold">Notre Mission</h2>
          <p className="text-muted-foreground mb-6">
            Hændy Kits a pour ambition de devenir une marque de référence dans le domaine des
            produits créatifs et éducatifs pour enfants et adolescents. Nous nous positionnons à
            l'intersection de la créativité, de l'éducation et de l'amusement, offrant des
            expériences ludiques qui stimulent l'imagination et le développement cognitif, mais
            aussi la motricité fine.
          </p>

          <h2 className="mt-8 mb-4 text-2xl font-bold">Notre Vision</h2>
          <p className="text-muted-foreground mb-6">
            Nous croyons que chaque enfant mérite des outils créatifs qui lui permettent d'apprendre
            en jouant. Nos kits d'activités et carnets personnalisables sont conçus pour encourager
            l'expression personnelle et rendre chaque produit unique pour son utilisateur.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="p-6">
              <Palette className="text-primary mb-4 h-10 w-10" />
              <h3 className="mb-2 text-xl font-bold">Créativité</h3>
              <p className="text-muted-foreground">
                Stimuler l'imagination et l'expression artistique à travers des activités ludiques
                et engageantes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <BookOpen className="text-primary mb-4 h-10 w-10" />
              <h3 className="mb-2 text-xl font-bold">Éducation</h3>
              <p className="text-muted-foreground">
                Proposer des kits éducatifs qui permettent aux enfants d'apprendre en s'amusant,
                développant leurs compétences cognitives.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Sparkles className="text-primary mb-4 h-10 w-10" />
              <h3 className="mb-2 text-xl font-bold">Personnalisation</h3>
              <p className="text-muted-foreground">
                Mettre en avant la personnalisation comme valeur centrale, rendant chaque produit
                unique pour son utilisateur.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Heart className="text-primary mb-4 h-10 w-10" />
              <h3 className="mb-2 text-xl font-bold">Qualité</h3>
              <p className="text-muted-foreground">
                Des produits soigneusement conçus pour garantir sécurité, durabilité et valeur
                éducative.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Nos Publics</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card className="bg-primary/5">
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-bold">Enfants (3-12 ans)</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Kits éducatifs et jouets</li>
                  <li>• Activités manuelles</li>
                  <li>• Carnets créatifs personnalisés</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-secondary/5">
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-bold">Adolescents (13-17 ans)</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Carnets créatifs avancés</li>
                  <li>• Journaux personnels</li>
                  <li>• Kits créatifs élaborés</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="bg-primary/5">
          <CardContent className="p-8 text-center">
            <h2 className="mb-4 text-2xl font-bold">Contactez-nous</h2>
            <p className="text-muted-foreground mb-2">
              Des questions ou des suggestions ? Nous serions ravis de vous entendre !
            </p>
            <p className="text-muted-foreground">
              Écrivez-nous à{' '}
              <a
                href="mailto:contact@haendy.com"
                className="text-primary font-medium hover:underline"
              >
                contact@haendy.com
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
