const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/dumentre" },
  { label: "X", href: "https://x.com/dumentre" },
  { label: "LinkedIn", href: "https://linkedin.com/company/dumentre" },
  { label: "GitHub", href: "https://github.com/dumentre" },
];

export function Footer() {
  return (
    <footer className="border-gray-subtle border-t px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-off-white mb-2 text-sm font-bold tracking-[0.2em] uppercase">
              Dumentre
            </p>
            <p className="text-gray-muted text-xs">
              Simplifica Desenvolvimento de Softwares Ltda
            </p>
            <p className="text-gray-muted mt-3 text-xs italic">
              &ldquo;Between systems. Beyond manual work.&rdquo;
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-muted hover:text-gold text-xs transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href="mailto:contato@dumentre.com"
              className="text-gray-muted hover:text-gold text-xs transition-colors"
            >
              contato@dumentre.com
            </a>
          </div>
        </div>

        <div className="border-gray-subtle mt-12 border-t pt-8">
          <p className="text-gray-muted text-xs">
            © {new Date().getFullYear()} Dumentre. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
