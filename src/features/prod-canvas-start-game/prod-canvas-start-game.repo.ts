import { HIGH_SCORE_STORAGE_KEY } from "./prod-canvas-start-game.types";

function localStorageOrNull(): Storage | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

export function readHighScore(): number | null {
  const storage = localStorageOrNull();
  if (storage === null) {
    return null;
  }

  try {
    const serialized = storage.getItem(HIGH_SCORE_STORAGE_KEY);
    if (serialized === null) {
      return null;
    }

    const value: unknown = JSON.parse(serialized);
    return typeof value === "number" && Number.isFinite(value) && value >= 0
      ? value
      : null;
  } catch {
    return null;
  }
}

export function writeHighScore(highScore: number): void {
  localStorageOrNull()?.setItem(
    HIGH_SCORE_STORAGE_KEY,
    JSON.stringify(highScore),
  );
}
