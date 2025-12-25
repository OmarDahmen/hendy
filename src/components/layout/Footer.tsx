export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-8 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-3">Hændy</h3>
            <p className="text-sm text-muted-foreground">
              Your one-stop shop for the latest tech gadgets and accessories.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="hover:underline">
                  Products
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: info@hændy.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Tech Street, CA</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Hændy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
