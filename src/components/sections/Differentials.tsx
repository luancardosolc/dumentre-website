const differentials = [
  "Nós somos donos da solução, não apenas da implementação.",
  "Sem overengineering. Entregamos o que funciona em produção.",
  "Preferimos perder a venda do que prometer algo tecnicamente frágil.",
  "Não destruímos o que existe — nós o potencializamos com IA.",
];

export function Differentials() {
  return (
    <section className="border-gray-subtle bg-charcoal-subtle border-t px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <p className="text-gold mb-4 text-xs font-semibold tracking-[0.25em] uppercase">
          Posicionamento
        </p>
        <h2 className="text-off-white mb-16 text-3xl font-bold sm:text-4xl">
          Arquiteto ou executor?
        </h2>

        <div className="bg-gray-subtle grid gap-px sm:grid-cols-2">
          {differentials.map((text, index) => (
            <div key={index} className="bg-charcoal-subtle p-8">
              <span className="text-gold mb-4 block text-xs font-semibold tracking-[0.2em]">
                0{index + 1}
              </span>
              <p className="text-off-white text-xl leading-snug font-semibold sm:text-2xl">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
