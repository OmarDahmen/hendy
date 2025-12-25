import { Card, CardContent } from '@/components/ui/card'
import { Palette, BookOpen, Sparkles, Heart } from 'lucide-react'

export function About() {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">À Propos de Hændy Kits</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Une marque créative et éducative pour enfants et adolescents
        </p>

        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-2xl font-bold mb-4">Notre Mission</h2>
          <p className="text-muted-foreground mb-6">
            Hændy Kits a pour ambition de devenir une marque de référence dans le domaine
            des produits créatifs et éducatifs pour enfants et adolescents. Nous nous positionnons
            à l'intersection de la créativité, de l'éducation et de l'amusement, offrant des
            expériences ludiques qui stimulent l'imagination et le développement cognitif,
            mais aussi la motricité fine.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">Notre Vision</h2>
          <p className="text-muted-foreground mb-6">
            Nous croyons que chaque enfant mérite des outils créatifs qui lui permettent
            d'apprendre en jouant. Nos kits d'activités et carnets personnalisables sont
            conçus pour encourager l'expression personnelle et rendre chaque produit unique
            pour son utilisateur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardContent className="p-6">
              <Palette className="h-10 w-10 mb-4 text-primary" />
              <h3 className="font-bold text-xl mb-2">Créativité</h3>
              <p className="text-muted-foreground">
                Stimuler l'imagination et l'expression artistique à travers des activités
                ludiques et engageantes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <BookOpen className="h-10 w-10 mb-4 text-primary" />
              <h3 className="font-bold text-xl mb-2">Éducation</h3>
              <p className="text-muted-foreground">
                Proposer des kits éducatifs qui permettent aux enfants d'apprendre
                en s'amusant, développant leurs compétences cognitives.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Sparkles className="h-10 w-10 mb-4 text-primary" />
              <h3 className="font-bold text-xl mb-2">Personnalisation</h3>
              <p className="text-muted-foreground">
                Mettre en avant la personnalisation comme valeur centrale, rendant
                chaque produit unique pour son utilisateur.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Heart className="h-10 w-10 mb-4 text-primary" />
              <h3 className="font-bold text-xl mb-2">Qualité</h3>
              <p className="text-muted-foreground">
                Des produits soigneusement conçus pour garantir sécurité,
                durabilité et valeur éducative.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Nos Publics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-primary/5">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-3">Enfants (3-12 ans)</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Kits éducatifs et jouets</li>
                  <li>• Activités manuelles</li>
                  <li>• Carnets créatifs personnalisés</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-secondary/5">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-3">Adolescents (13-17 ans)</h3>
                <ul className="space-y-2 text-muted-foreground">
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
            <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
            <p className="text-muted-foreground mb-2">
              Des questions ou des suggestions ? Nous serions ravis de vous entendre !
            </p>
            <p className="text-muted-foreground">
              Écrivez-nous à{' '}
              <a
                href="mailto:contact@haendy.com"
                className="text-primary hover:underline font-medium"
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