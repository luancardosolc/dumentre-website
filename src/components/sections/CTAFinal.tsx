import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CTAFinal() {
  return (
    <section
      id="contato"
      className="border-gray-subtle border-t px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-off-white mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
          Pronto para conectar o que existe ao que deveria existir?
        </h2>
        <p className="text-gray-muted mb-10 text-base leading-relaxed sm:text-lg">
          A conversa começa com um diagnóstico honesto.
          <br />
          Sem compromisso, sem proposta genérica.
        </p>
        <a
          href="mailto:contato@dumentre.com"
          className={cn(buttonVariants({ variant: "primary", size: "lg" }))}
        >
          Agendar conversa →
        </a>
        <p className="text-gray-muted mt-8 text-xs">
          Não fazemos freelances de código. Desenhamos sistemas autônomos.
        </p>
      </div>
    </section>
  );
}
