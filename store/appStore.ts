import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface AppStore {
  slideUp: boolean;
  setSlideUp: (value: boolean) => void;
}

export const appStore = create<AppStore>()(
  persist(
    (set) => ({
      slideUp: false,
      setSlideUp: (value) => set({ slideUp: value }),
    }),
    {
      name: "luvra-storage", // localStorage key
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
