export interface IItem {
  vendor: string;
  name: string;
  price: string;
  is_hybrid?: string;
  system?: string;
}

export interface ITab {
  title: string,
  items: IItem[];
  active?: boolean;
  index?: number;
}
