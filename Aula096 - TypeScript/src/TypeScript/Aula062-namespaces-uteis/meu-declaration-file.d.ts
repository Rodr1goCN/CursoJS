// Declaração no namespace
declare namespace _ {
  declare interface LoDashStatic {
    mul(array: number[]): number;
  }
}
// Declaração global
declare const global: typeof globalThis & {
  MINHAGLOBAL: string;
};
