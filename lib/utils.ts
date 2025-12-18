import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function mockDelay(number: number) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(undefined);
    }, number);
  });
}
