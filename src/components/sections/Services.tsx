import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
  {
    badge: "Ponto de entrada",
    title: "Strategic System Audit",
    subtitle: "O diagnóstico antes da obra",
    description:
      "Você não contrata um arquiteto para executar — contrata para desenhar. Este é o nosso diagnóstico técnico completo: mapeamos seus sistemas, identificamos os gargalos reais e entregamos um Blueprint de arquitetura com o roadmap de modernização.",
    deliverable: "Entregável: Architecture Blueprint",
    deliverableNote:
      "documento técnico com solução, ferramentas e roadmap de implementação",
    pricing: "R$ 10.000 — R$ 20.000",
    pricingNote: "100% remoto · Preço fixo",
    highlight: true,
  },
  {
    badge: "Implementação",
    title: "Autonomous Build",
    subtitle: "A obra após o diagnóstico",
    description:
      "Implementação ponta a ponta da solução desenhada. Sistemas autônomos que substituem trabalho manual, agentes de IA integrados ao seu processo de negócio, pipelines de dados sob medida. Resultado — não horas.",
    deliverable: null,
    deliverableNote: null,
    pricing: "A partir de R$ 30.000",
    pricingNote: "Escopo definido após auditoria",
    highlight: false,
  },
  {
    badge: "Recorrente",
    title: "Strategic Partnership",
    subtitle: "Fractional CTO / Architect",
    description:
      "Retenção mensal para acompanhamento estratégico, evolução da arquitetura e mentoria técnica. Para empresas que precisam de visão de CTO sem o overhead de contratação.",
    deliverable: null,
    deliverableNote: null,
    pricing: "R$ 10.000 — R$ 25.000 / mês",
    pricingNote: "Contrato recorrente",
    highlight: false,
  },
];

export function Services() {
  return (
    <section
      id="servicos"
      className="border-gray-subtle border-t px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <p className="text-gold mb-4 text-xs font-semibold tracking-[0.25em] uppercase">
          Serviços
        </p>
        <h2 className="text-off-white mb-16 text-3xl font-bold sm:text-4xl">
          Três níveis de intervenção estratégica
        </h2>

        <div className="bg-gray-subtle grid gap-px sm:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className={cn(
                "flex flex-col p-8",
                service.highlight ? "bg-charcoal-subtle" : "bg-charcoal"
              )}
            >
              <p className="text-gold mb-6 text-xs font-semibold tracking-[0.2em] uppercase">
                {service.badge}
              </p>
              <h3 className="text-off-white mb-1 text-xl font-bold">
                {service.title}
              </h3>
              <p className="text-gray-muted mb-6 text-sm">{service.subtitle}</p>
              <p className="text-gray-muted mb-6 flex-1 text-sm leading-relaxed">
                {service.description}
              </p>
              {service.deliverable && (
                <div className="border-gold mb-6 border-l-2 pl-4">
                  <p className="text-off-white text-sm font-medium">
                    {service.deliverable}
                  </p>
                  <p className="text-gray-muted mt-1 text-xs">
                    {service.deliverableNote}
                  </p>
                </div>
              )}
              <div className="mt-auto">
                <p className="text-off-white text-lg font-bold">
                  {service.pricing}
                </p>
                <p className="text-gray-muted mt-1 text-xs">
                  {service.pricingNote}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="#contato"
            className={cn(buttonVariants({ variant: "primary", size: "lg" }))}
          >
            Começar com a Auditoria →
          </a>
        </div>
      </div>
    </section>
  );
}
