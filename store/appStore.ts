import { create } from "zustand";

interface AppState {
  slideUp: boolean;
  setSlideUp: (val: boolean) => void;
}
export const appStore = create<AppState>((set) => ({
  slideUp: false,
  setSlideUp: (val: boolean) => set({ slideUp: val }),
}));
