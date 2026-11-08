export const HIGH_SCORE_STORAGE_KEY =
  "setfarm.canvas_start_game.high_score_local_storage.v1" as const;

export type ApplicationStatus = "ready" | "playing";

export interface ApplicationState {
  status: ApplicationStatus;
}

export interface ProdCanvasStartGameStates {
  STATE_APPLICATION_STATE: ApplicationState;
  STATE_HIGH_SCORE: number | null;
}

export interface ProdCanvasStartGameStoreValue {
  states: ProdCanvasStartGameStates;
  startGame: () => void;
}
