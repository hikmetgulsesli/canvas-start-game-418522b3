import type { ApplicationState } from "../prod-canvas-start-game/prod-canvas-start-game.types";

export interface ActStartGamePorts {
  setApplicationState: (state: ApplicationState) => void;
  setHighScore: (highScore: number) => void;
  persistHighScore: (highScore: number) => void;
}

export function createActStartGame(ports: ActStartGamePorts): () => void {
  return () => {
    const highScore = 0;

    ports.setApplicationState({ status: "playing" });
    ports.setHighScore(highScore);
    ports.persistHighScore(highScore);
  };
}
