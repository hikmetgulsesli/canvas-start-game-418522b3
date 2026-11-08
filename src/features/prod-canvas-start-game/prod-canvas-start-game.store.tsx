import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { createActStartGame } from "../surf-play-page/act_start_game";
import { readHighScore, writeHighScore } from "./prod-canvas-start-game.repo";
import type {
  ApplicationState,
  ProdCanvasStartGameStates,
  ProdCanvasStartGameStoreValue,
} from "./prod-canvas-start-game.types";

const ProdCanvasStartGameStoreContext =
  createContext<ProdCanvasStartGameStoreValue | null>(null);

export function ProdCanvasStartGameProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [applicationState, setApplicationState] = useState<ApplicationState>(
    () => ({ status: "ready" }),
  );
  const [highScore, setHighScore] = useState<number | null>(() =>
    readHighScore(),
  );

  const startGame = useMemo(
    () =>
      createActStartGame({
        setApplicationState,
        setHighScore,
        persistHighScore: writeHighScore,
      }),
    [],
  );

  const states = useMemo<ProdCanvasStartGameStates>(
    () => ({
      STATE_APPLICATION_STATE: applicationState,
      STATE_HIGH_SCORE: highScore,
    }),
    [applicationState, highScore],
  );

  const value = useMemo<ProdCanvasStartGameStoreValue>(
    () => ({ states, startGame }),
    [states, startGame],
  );

  return (
    <ProdCanvasStartGameStoreContext.Provider value={value}>
      {children}
    </ProdCanvasStartGameStoreContext.Provider>
  );
}

export function useProdCanvasStartGameStore(): ProdCanvasStartGameStoreValue {
  const value = useContext(ProdCanvasStartGameStoreContext);
  if (value === null) {
    throw new Error(
      "useProdCanvasStartGameStore must be used within ProdCanvasStartGameProvider",
    );
  }
  return value;
}
