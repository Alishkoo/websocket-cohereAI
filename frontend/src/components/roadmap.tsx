// Измените компонент Roadmap для отображения сообщений в стиле чата

import React from 'react';

type ChatmapProps = {
  title: string;
  messages: string[]; // Предполагается, что это массив сообщений
};



const Roadmap: React.FC<ChatmapProps> = ({ title, messages }) => {
  // Объединяем все сообщения в одно предложение
  const combinedMessage = messages.join(' ');

  return (
    <div className="bg-white shadow-md p-6 rounded-lg max-w-md w-full">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="flex flex-col gap-2">
        {/* Отображаем объединенное сообщение в одном блоке */}
        <div className="bg-gray-200 rounded-lg px-4 py-2 self-start">
          {combinedMessage}
        </div>
      </div>
    </div>
  );
};
export default Roadmap;