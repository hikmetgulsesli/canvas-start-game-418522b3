import { ProdCanvasStartGameProvider, useProdCanvasStartGameStore } from "./features/prod-canvas-start-game/prod-canvas-start-game.store";
import { PlayPageCanvasStartGame } from "./screens/PlayPageCanvasStartGame";
import { TestBridgeInstaller } from "./test/bridge";

function CanvasStartGameApplication() {
  const { states, startGame } = useProdCanvasStartGameStore();
  const highScore = states.STATE_HIGH_SCORE ?? 0;
  const gameStatus =
    states.STATE_APPLICATION_STATE.status === "playing"
      ? "Game started"
      : "Ready";

  return (
    <>
      <PlayPageCanvasStartGame
        actions={{ "start-1": startGame }}
        highScore={highScore}
        gameStatus={gameStatus}
      />
      <TestBridgeInstaller />
    </>
  );
}

export default function App() {
  return (
    <ProdCanvasStartGameProvider>
      <div
        data-setfarm-root="canvas-start-game"
        data-testid="setfarm-app-root"
        className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-emerald-500 selection:text-white"
      >
        <CanvasStartGameApplication />
      </div>
    </ProdCanvasStartGameProvider>
  );
}
