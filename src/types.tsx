export type CardProps = {
  image: string;
  text: string;
};

export type ColumnsConfig = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

export type CardsCollectionProps = {
  cards: CardProps[];
  columns: ColumnsConfig;
};

export type ImageCardProps = {
  imageTop: string;
  imageBottom: string;
  borderClass: string;
};
