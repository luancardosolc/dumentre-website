import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-gold mb-8 text-xs font-semibold tracking-[0.25em] uppercase">
          Dumentre
        </p>

        <h1 className="text-off-white mb-8 text-4xl leading-[1.1] font-bold sm:text-5xl lg:text-6xl xl:text-7xl">
          Connecting the world that exists
          <br />
          to the systems that should exist.
        </h1>

        <p className="text-gray-muted mx-auto mb-12 max-w-xl text-base leading-relaxed sm:text-lg">
          Arquitetura de sistemas autônomos para empresas que superaram seus
          processos manuais e sistemas legados.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contato"
            className={cn(buttonVariants({ variant: "primary", size: "lg" }))}
          >
            Agendar Auditoria Estratégica →
          </a>
          <a
            href="#servicos"
            className={cn(buttonVariants({ variant: "ghost", size: "lg" }))}
          >
            Ver como funciona
          </a>
        </div>
      </div>
    </section>
  );
}
