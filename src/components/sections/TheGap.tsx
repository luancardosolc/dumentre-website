const pillars = [
  {
    axis: "Legacy ↔ AI",
    title: "Sistemas legados, inteligência moderna",
    description:
      "Transformamos o que existe em motor de IA sem jogar fora o que funciona.",
  },
  {
    axis: "Physical ↔ Digital",
    title: "Do chão de fábrica ao dashboard",
    description:
      "Integramos operações físicas com sistemas digitais em tempo real.",
  },
  {
    axis: "Integration ↔ Automation",
    title: "Se não conversa, não funciona",
    description:
      "Fazemos sistemas que não se falam trabalharem como um único organismo.",
  },
];

export function TheGap() {
  return (
    <section className="border-gray-subtle bg-charcoal-subtle border-t px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-off-white mb-8 text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
            Entre o seu processo atual e a eficiência total, existe um abismo
            técnico. Nós somos a ponte.
          </h2>
          <p className="text-gray-muted mb-4 leading-relaxed">
            Sistemas legados que não se falam. Planilhas que substituem
            software. Processos manuais que custam horas e geram erros. Enquanto
            o mercado acelera, a operação emperra.
          </p>
          <p className="text-gray-muted leading-relaxed">
            A Dumentre não constrói código. Nós desenhamos arquiteturas que
            eliminam esses gargalos — conectando o que existe ao que deveria
            existir.
          </p>
        </div>

        <div className="bg-gray-subtle grid gap-px sm:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.axis}
              className="bg-charcoal-subtle hover:bg-charcoal p-8 transition-colors"
            >
              <p className="text-gold mb-4 text-xs font-semibold tracking-[0.2em] uppercase">
                {pillar.axis}
              </p>
              <h3 className="text-off-white mb-3 text-lg font-semibold">
                {pillar.title}
              </h3>
              <p className="text-gray-muted text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
