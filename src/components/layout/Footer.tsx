export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-8 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-3">Hændy Kits</h3>
            <p className="text-sm text-muted-foreground">
              Kits créatifs et éducatifs pour enfants et adolescents. Apprendre en jouant !
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-3">Liens Rapides</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/" className="hover:underline">
                  Accueil
                </a>
              </li>
              <li>
                <a href="/kits" className="hover:underline">
                  Nos Kits
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  À Propos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: contact@haendy.com</li>
              <li>Téléphone: +33 1 23 45 67 89</li>
              <li>Adresse: Paris, France</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Hændy Kits. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
