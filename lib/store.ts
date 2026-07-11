import { create } from "zustand";
import type { AppId } from "@/components/window/windowConfig";
import { WINDOWS } from "@/components/window/windowConfig";

export type Pos = { top: number; left: number };

type WindowState = {
  /** Whether this window is rendered/visible */
  open: boolean;
  /** Stacking order */
  z: number;
  /** Maximized (fills the desktop) */
  maxed: boolean;
  /** Current desktop position; null = use the config default */
  pos: Pos | null;
};

type DesktopState = {
  windows: Record<AppId, WindowState>;
  topZ: number;
  booted: boolean;
  openApp: (id: AppId) => void;
  closeApp: (id: AppId) => void;
  focusApp: (id: AppId) => void;
  toggleMax: (id: AppId) => void;
  setPos: (id: AppId, pos: Pos) => void;
  finishBoot: () => void;
};

const BASE_Z = 30;

function initialWindows(): Record<AppId, WindowState> {
  const entries = Object.keys(WINDOWS) as AppId[];
  return entries.reduce(
    (acc, id) => {
      acc[id] = { open: false, z: BASE_Z, maxed: false, pos: null };
      return acc;
    },
    {} as Record<AppId, WindowState>,
  );
}

export const useDesktop = create<DesktopState>((set) => ({
  windows: initialWindows(),
  topZ: BASE_Z,
  booted: false,

  openApp: (id) =>
    set((s) => {
      const z = s.topZ + 1;
      return {
        topZ: z,
        windows: {
          ...s.windows,
          [id]: { ...s.windows[id], open: true, z },
        },
      };
    }),

  closeApp: (id) =>
    set((s) => ({
      windows: {
        ...s.windows,
        [id]: { ...s.windows[id], open: false, maxed: false },
      },
    })),

  focusApp: (id) =>
    set((s) => {
      if (s.windows[id].z === s.topZ) return s;
      const z = s.topZ + 1;
      return {
        topZ: z,
        windows: { ...s.windows, [id]: { ...s.windows[id], z } },
      };
    }),

  toggleMax: (id) =>
    set((s) => {
      const z = s.topZ + 1;
      return {
        topZ: z,
        windows: {
          ...s.windows,
          [id]: { ...s.windows[id], maxed: !s.windows[id].maxed, z },
        },
      };
    }),

  setPos: (id, pos) =>
    set((s) => ({
      windows: { ...s.windows, [id]: { ...s.windows[id], pos } },
    })),

  finishBoot: () => set({ booted: true }),
}));
