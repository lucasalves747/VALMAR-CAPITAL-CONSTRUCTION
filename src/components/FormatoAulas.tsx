import React from "react";
import { Video, Clock, Users, BookOpen } from "lucide-react";

const aulas = [
  {
    titulo: "Formato das Aulas",
    descricao: "Encontros online pelo Zoom, uma vez por semana",
    icon: <Video className="text-accent w-6 h-6" />,
  },
  {
    titulo: "Duração",
    descricao: "Duração aproximada de 2 horas por módulo",
    icon: <Clock className="text-accent w-6 h-6" />,
  },
  {
    titulo: "Encontros Presenciais",
    descricao: "Encontros presenciais opcionais durante o andamento da mentoria",
    icon: <Users className="text-accent w-6 h-6" />,
  },
  {
    titulo: "Material de Apoio",
    descricao: "Material de apoio exclusivo para os participantes",
    icon: <BookOpen className="text-accent w-6 h-6" />,
  },
];

const AulaInfo: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto mt-20 pt-10 p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Detalhes das Aulas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {aulas.map((aula, i) => (
          <div
            key={i} 
            className="flex flex-col items-center bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-1 text-center"
          >
            <div className="mb-4">{aula.icon}</div>
            <h3 className="font-bold text-lg mb-2">{aula.titulo}</h3>
            <p className="text-gray-700 text-sm sm:text-base">{aula.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AulaInfo;
