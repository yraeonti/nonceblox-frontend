export type APIDATA = {
  prices: number[][];
  market_caps: number[][];
  total_volumes: number[][];
};

export type CHARTDATA = {
  timestamp: number | string;
  price: number;
  marketCap: number;
  volume: number;
}[];

export type Inputs = {
  coin: string;
  currency: string;
  from: number | string;
  to: number | string;
};

export type Metrics = {
  price: boolean;
  marketCap: boolean;
  volume: boolean;
};

export interface IChartProps {
  data: CHARTDATA;
  metric: keyof Metrics;
}
