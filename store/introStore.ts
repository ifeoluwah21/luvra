import { create } from "zustand";
import { persist } from "zustand/middleware";
import ls from "localstorage-ttl";

interface IntroStore {
  slideUp: boolean;
  setSlideUp: (value: boolean) => void;
}

const ttlStorage: any = {
  getItem: (name: string) => {
    const item = ls.get(name);
    return item === undefined ? null : item; // localStorage returns null for missing keys
  },
  setItem: (name: string, value: string) => {
    // set TTL to 3 days
    const ttl = 3 * 24 * 60 * 60 * 1000;
    ls.set(name, value, ttl);
  },
  removeItem: (name: string) => {
    ls.remove(name);
  },
};

export const introStore = create<IntroStore>()(
  persist(
    (set) => ({
      slideUp: false,
      setSlideUp: (value) => set({ slideUp: value }),
    }),
    {
      name: "luvra-storage",
      storage: ttlStorage, // custom TTL storage
    },
  ),
);
