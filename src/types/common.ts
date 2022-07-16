export type ItemType = "person" | "product";

export type SortType = "ascending" | "descending";

export interface SelectOption {
  label: string;
  value: string;
  sortType?: SortType;
}
