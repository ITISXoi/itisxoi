import { FC, PropsWithChildren } from "react";

export type FCC<P = object> = FC<PropsWithChildren<P>>;

export interface ROUTE_TYPE {
  key: string;
  name: string;
  route: string;
}

export interface TitleFooterT {
  title: string;
  subTitle: { name: string }[];
}

export interface ListVideoT {
  title: string;
  product: VideoT[];
}
export interface VideoT {
  key: number;
  name: string;
  series: string;
  subject: string;
  description: string;
  price: number;
  imageUrl: string;
}

export interface ListBookT {
  title: string;
  product: BookT[];
}
export interface BookT {
  key: number;
  name: string;
  author: string;
  description: string;
  price: number;
  imageUrl: string;
}
