'use client'

import { useEffect, useRef } from 'react';
import { Game } from '../game/Game';

export default function Canvas() {
  const gameContainerRef = useRef<HTMLDivElement | null>(null);
  const gameInstanceRef = useRef<Game | null>(null);

  useEffect(() => {
    if (gameContainerRef.current && !gameInstanceRef.current) {
      gameInstanceRef.current = new Game(gameContainerRef.current);
    }

    // Cleanup para remover o jogo quando o componente for desmontado
    return () => {
      gameInstanceRef.current = null;
    };
  }, []);

  return <div ref={gameContainerRef} className="w-full h-screen"></div>;
}