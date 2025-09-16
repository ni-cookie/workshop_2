import * as dotenv from 'dotenv';

dotenv.config();

export function add(a: number, b: number): number {
  return a + b;
}

export function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/** СКЛАДНИЙ ТИП */

export type NumberFormatOptions = {
  precision?: number;
  locale?: string;
};

export function formatNumber(value: number, options?: { precision?: number }): string {
  const precision = options?.precision ?? 0;
  return value.toFixed(precision);
}
