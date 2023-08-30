export type TView =  "card" | "json" | "list" | "grid" | "accordion" | "carousel";

export interface IViews {
    label: string;
    value: TView;
  }