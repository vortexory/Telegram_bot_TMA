import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const calculateDateDifference = (d1: string | null, d2: string) => {
  if (!d1) return 1;
  const date1 = new Date(d1);
  const date2 = new Date(d2);
  return Math.floor(Math.abs((date1.setHours(0, 0, 0, 0) - date2.setHours(0, 0, 0, 0)) / (1000 * 3600 * 36)));
};