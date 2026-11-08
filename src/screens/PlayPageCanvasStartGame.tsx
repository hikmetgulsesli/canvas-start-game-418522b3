// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Play Page - Canvas Start Game
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Preserve the generated action-input state and exact payload transport
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state


export type PlayPageCanvasStartGameActionId = "start-1";

export interface PlayPageCanvasStartGameProps {
  actions?: {
    "start-1"?: () => void;
  };
  highScore?: number;
  gameStatus?: string;
}

export type PlayPageCanvasStartGameActionCallbacks = NonNullable<PlayPageCanvasStartGameProps["actions"]>;

export function PlayPageCanvasStartGame({
  actions,
  highScore = 0,
  gameStatus = "Game started",
}: PlayPageCanvasStartGameProps) {
  const highScoreText = String(highScore);

  return (
    <>
      <div data-surface-id="SURF_PLAY_PAGE" className="flex-1 flex flex-col justify-between p-6 max-w-7xl mx-auto w-full" data-setfarm-element-ref="E000001" data-observable-refs="OBS_START_GAME_PLAY_ROUTE_STABILITY">
          {/* Top Header Bar */}
          <header className="flex items-center justify-between border-b border-slate-800 pb-5">
            <div className="flex items-center space-x-3">
              <div className="h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
              <span className="text-lg font-bold tracking-wider uppercase text-slate-200">Canvas Arena</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono">STANDALONE</span>
            </div>
      
            <div className="flex items-center space-x-6">
              <div className="text-right">
                <div className="text-xs text-slate-500 font-mono tracking-wider">RECORD VAULT</div>
                <div className="flex items-baseline space-x-2">
                  <span className="text-xs text-slate-400">High Score:</span>
                  <div data-surface-id="SURF_HIGH_SCORE_DISPLAY" className="inline-block" data-setfarm-element-ref="E000002" data-observable-refs="OBS_START_GAME_HIGH_SCORE_ZERO" data-value={highScoreText}>
                    <span className="font-mono text-xl font-bold text-emerald-400">{highScoreText}</span>
                  </div>
                </div>
              </div>
            </div>
          </header>
      
          {/* Main Game Area */}
          <main className="my-8 flex-1 flex flex-col items-center justify-center">
            <div className="w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl relative overflow-hidden flex flex-col items-center">
              {/* Visual Game Viewport Container */}
              <div data-surface-id="SURF_GAME_CANVAS" className="w-full h-96 bg-slate-950 rounded-xl border border-slate-800 relative flex flex-col items-center justify-center overflow-hidden" data-setfarm-element-ref="E000003">
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"></div>
                
                <div className="relative z-10 flex flex-col items-center text-center px-4">
                  <div className="h-16 w-16 mb-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden={true}>
                      <polygon points="5 3 19 12 5 21 5 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></polygon>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-white tracking-tight">Arena Grid Standby</h2>
                  <p className="text-slate-400 text-sm max-w-md mt-2">Initialize the rendering loop and physics worker to begin interactive play session.</p>
                </div>
              </div>
      
              {/* Action Control Slot */}
              <div className="mt-6 flex flex-col items-center">
                <button type="button" data-action="ACT_START_GAME" data-control-slot="CSLOT_START_GAME_START_BUTTON" className="px-8 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.35)] transition duration-150 uppercase tracking-wider text-sm flex items-center space-x-2 cursor-pointer" data-setfarm-element-ref="E000004" data-observable-refs="OBS_START_GAME_START_BUTTON_STATE" data-action-id="start-1" onClick={actions?.["start-1"]}>
                  <span>Start</span>
                </button>
              </div>
            </div>
          </main>
      
          {/* Bottom Status Panel */}
          <footer className="border-t border-slate-800 pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-3">
            <div className="flex items-center space-x-3">
              <span className="text-slate-600">SESSION TELEMETRY:</span>
              <div data-surface-id="SURF_GAME_STATUS" className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-md text-emerald-400 font-medium" data-setfarm-element-ref="E000005" data-observable-refs="OBS_START_GAME_GAME_STARTED_TEXT">
                {gameStatus}
              </div>
            </div>
      
            <div className="flex items-center space-x-4">
              <span>Route: /play</span>
              <span className="text-slate-700">|</span>
              <span>Tick: 60fps</span>
            </div>
          </footer>
        </div>
    </>
  );
}
