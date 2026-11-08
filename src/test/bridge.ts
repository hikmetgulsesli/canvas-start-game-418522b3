import { useEffect, useRef } from "react";
import { useProdCanvasStartGameStore } from "../features/prod-canvas-start-game/prod-canvas-start-game.store";
import type { ProdCanvasStartGameStates } from "../features/prod-canvas-start-game/prod-canvas-start-game.types";

export interface SetfarmBrowserBridge {
  states: ProdCanvasStartGameStates;
  invokeAction: (
    actionRef: string,
    input?: Record<string, unknown>,
  ) => void;
}

declare global {
  interface Window {
    __SETFARM_TEST_BRIDGE__?: SetfarmBrowserBridge;
    __SETFARM_SCENARIO_MODE__?: "manual";
  }
}

export function TestBridgeInstaller() {
  const { states, startGame } = useProdCanvasStartGameStore();
  const bridgeRef = useRef<SetfarmBrowserBridge | null>(null);

  if (bridgeRef.current === null) {
    bridgeRef.current = {
      states,
      invokeAction: (actionRef) => {
        if (actionRef !== "ACT_START_GAME") {
          throw new Error(`Unknown Setfarm action: ${actionRef}`);
        }
        startGame();
      },
    };
  }

  bridgeRef.current.states = states;

  useEffect(() => {
    const bridge = bridgeRef.current;
    if (bridge === null) {
      return;
    }

    window.__SETFARM_SCENARIO_MODE__ = "manual";
    window.__SETFARM_TEST_BRIDGE__ = bridge;

    return () => {
      if (window.__SETFARM_TEST_BRIDGE__ === bridge) {
        delete window.__SETFARM_TEST_BRIDGE__;
      }
    };
  }, []);

  return null;
}
