import React, { useState, useEffect } from "react";

type Trecho = {
  titulo: string;
  descricao: string;
};

const trechos: Trecho[] = [
  {
    titulo: "Fundamentos do Investimento Imobiliário nos EUA",
    descricao:
      "Aprenda a ler o mercado como um profissional, identificando tendências, regiões de alto potencial e os riscos que a maioria dos investidores não vê.",
  },
  {
    titulo: "Estrutura Jurídica, Empresarial e Tributária",
    descricao:
      "Proteja seu patrimônio e otimize seus impostos com as melhores estratégias de estruturação de negócios nos EUA.",
  },
  {
    titulo: "Licenciamento e Compliance",
    descricao:
      "Desvende os segredos do licenciamento de obras, evitando os gargalos que atrasam e encarecem os projetos.",
  },
  {
    titulo: "Formação de Equipes e Contratos",
    descricao:
      "Aprenda a montar e gerenciar equipes de alta performance, com contratos que te protegem de imprevistos.",
  },
  {
    titulo: "Gestão de Custos e Fornecedores",
    descricao:
      "Domine a arte de negociar com fornecedores e controlar os custos da obra em tempo real, garantindo a margem de lucro do projeto.",
  },
  {
    titulo: "Construção na Prática",
    descricao:
      "Acompanhe o passo a passo da execução de uma obra, do alicerce ao acabamento, com foco em prazo, custo e qualidade.",
  },
  {
    titulo: "Reforma de Imóveis",
    descricao:
      "Descubra quando vale a pena reformar em vez de construir e como calcular o ROI de uma reforma para maximizar seus lucros.",
  },
  {
    titulo: "Financiamento e Estrutura de Capital",
    descricao:
      "Aprenda a captar recursos com bancos e investidores privados, usando o crédito de forma inteligente para alavancar seus resultados.",
  },
  {
    titulo: "Estratégias de Valorização",
    descricao:
      "Descubra os segredos de design, acabamento e tecnologia que aumentam o valor percebido do imóvel e aceleram a venda.",
  },
  {
    titulo: "Preparação para Venda",
    descricao:
      "Aprenda a preparar a documentação e a criar uma estratégia de marketing matadora para atrair os melhores compradores.",
  },
  {
    titulo: "Os Segredos do Fechamento com Lucro Máximo",
    descricao:
      "Domine as técnicas de negociação e análise de mercado para vender seus imóveis no momento certo e com o maior lucro possível.",
  },
  {
    titulo: "Escala e Vida Plena",
    descricao:
      "Aprenda a replicar o processo em múltiplos projetos, construir um negócio de longo prazo e viver uma vida com propósito e equilíbrio.",
  },
];

const Mentoria: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  // Atualiza automaticamente o número de slides conforme o tamanho da tela
  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % trechos.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + trechos.length) % trechos.length);
  };

  return (
    
    <div className="p-6">
      <div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs sm:text-sm font-semibold">
            Mentoria
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
            A JORNADA DE 12 SEMANAS
          </h2>
          <p className="text-sm sm:text-lg md:text-2xl text-muted-foreground">
            Este programa foi desenhado para um grupo seleto de investidores e empreendedores que estão prontos para o próximo nível.
          </p>
        </div>
      {/* ===== MOBILE (scroll lateral) ===== */}
      <div className="flex gap-4 overflow-x-auto lg:hidden scrollbar-hide scroll-smooth">
        {trechos.map((t, i) => (
          <div
            key={i}
            className="min-w-[80%] sm:min-w-[60%] bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h3 className="font-bold text-lg mb-2">{t.titulo}</h3>
            <p className="text-gray-700">{t.descricao}</p>
          </div>
        ))}
      </div>

      {/* ===== DESKTOP (carrossel com botões) ===== */}
      <div className="relative overflow-hidden hidden lg:block">
        {/* Botões de navegação */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-200 text-gray-700 px-3 py-2 rounded-full hover:bg-gray-300 z-10"
        >
          ‹
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200 text-gray-700 px-3 py-2 rounded-full hover:bg-gray-300 z-10"
        >
          ›
        </button>

        {/* Container de slides */}
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${(index * 100) / slidesPerView}%)`,
            width: `${(trechos.length * 100) / slidesPerView}%`,
          }}
        >
          {trechos.map((t, i) => (
            <div key={i} className="w-1/3 flex-shrink-0 p-4">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <h3 className="font-bold text-lg mb-2">{t.titulo}</h3>
                <p className="text-gray-700">{t.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mentoria;
