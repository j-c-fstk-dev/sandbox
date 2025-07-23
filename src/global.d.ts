// src/types/global.d.ts
declare global {
    interface Window {
      twttr?: {
        widgets?: {
          load: (element?: HTMLElement) => void;
          createTweet: (tweetId: string, element: HTMLElement, options?: object) => Promise<HTMLElement>;
        };
      };
    }
  }
  
  export {}; // Isso garante que o arquivo é tratado como um módulo