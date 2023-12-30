export interface ShoppingOrderState {
  getName(): string;
  approvePaymente(): void;
  rejectPaymente(): void;
  waitPaymente(): void;
  shipOrder(): void;
}
