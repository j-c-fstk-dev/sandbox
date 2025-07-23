// components/TweetEmbed.tsx
import React, { useEffect, useRef } from 'react';
import Link from 'next/link'
// Importe seu arquivo CSS Modules, se estiver usando, ou garanta que o CSS esteja globalmente disponível
// Exemplo: import styles from './TweetEmbed.module.css';

// REMOVA O BLOCO 'declare global' DAQUI!
// Ele será movido para um arquivo global.d.ts

interface TweetEmbedProps {
  tweetUrl: string; // Ex: "https://twitter.com/handle/status/123456789"
}

const TweetEmbed: React.FC<TweetEmbedProps> = ({ tweetUrl }) => {
  const embedRef = useRef<HTMLDivElement>(null); // Ref para o container do embed

  useEffect(() => {
    // Garante que o script do Twitter seja carregado apenas uma vez e processe os blockquotes
    const scriptId = 'twitter-widgets-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      script.setAttribute('charset', 'utf-8'); // Adicionado charset conforme embed original
      script.setAttribute('loading', 'lazy'); // Lazy loading para otimização
      document.body.appendChild(script);

      // Opcional: Recarregar widgets após o script ser carregado, para garantir que o tweet seja renderizado
      script.onload = () => {
        if (window.twttr && window.twttr.widgets) {
          window.twttr.widgets.load(embedRef.current || undefined);
        }
      };
    } else {
      // Se o script já existe, tente carregar o widget para o elemento atual
      if (window.twttr && window.twttr.widgets) {
        window.twttr.widgets.load(embedRef.current || undefined);
      }
    }
  }, [tweetUrl]); // Re-executa se a URL do tweet mudar

  // Extrai o ID do tweet da URL
  const tweetIdMatch = tweetUrl.match(/\/status\/(\d+)/);
  const tweetId = tweetIdMatch ? tweetIdMatch[1] : '';

  if (!tweetId) {
    console.warn("Invalid tweetUrl provided to TweetEmbed:", tweetUrl);
    return (
      <div className="text-red-500">
        Não foi possível carregar o tweet. URL inválida.
        <Link href={tweetUrl} target="_blank" rel="noopener noreferrer" className="text-primary-green hover:underline text-sm mt-2 block">
            Ver no X (Twitter)
        </Link>
      </div>
    );
  }

  return (
    // Aplique a classe do contêiner para rolagem aqui.
    // Se estiver usando CSS Modules, seria: className={styles['tweet-container']}
    // Se for Tailwind ou CSS global, use: className="tweet-container"
    <div className="tweet-container" ref={embedRef}>
      <blockquote
        className="twitter-tweet"
        data-width="550" // Largura máxima do embed
        data-dnt="true" // Do Not Track (opcional, boa prática de privacidade)
      >
        {/* Placeholder que o script do Twitter irá substituir */}
        <p lang="en" dir="ltr">Carregando tweet...</p>
        &mdash; <a href={tweetUrl}></a>
      </blockquote>
    </div>
  );
};

export default TweetEmbed;