export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 font-bold">Hændy Kits</h3>
            <p className="text-muted-foreground text-sm">
              Kits créatifs et éducatifs pour enfants et adolescents. Apprendre en jouant !
            </p>
          </div>

          <div>
            <h3 className="mb-3 font-bold">Liens Rapides</h3>
            <ul className="text-muted-foreground space-y-2 text-sm">
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
            <h3 className="mb-3 font-bold">Contact</h3>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>Email: haendy.kits@gmail.com</li>
              <li>Téléphone: +33 6 31 85 47 53</li>
              <li>Adresse: Toulouse, France</li>
            </ul>
          </div>
        </div>

        <div className="text-muted-foreground mt-8 border-t pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Hændy Kits. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
