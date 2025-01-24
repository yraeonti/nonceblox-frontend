import { APIDATA } from "./dto";
import moment from "moment";

export const fetcher = (url: string) =>
  fetch(url, {
    headers: {
      x_cg_demo_api_key: "CG-L79svskcxvVPrBQ2ytcMJnTo",
    },
  }).then((r) => r.json());

export const transformData = (apiData: APIDATA) =>
  apiData.prices.map(([timestamp, price], index) => {
    return {
      timestamp: moment.unix(timestamp / 1000).format("ll"), // Timestamp from prices
      price, // Price value
      marketCap: apiData.market_caps[index][1], // Corresponding market cap
      volume: apiData.total_volumes[index][1], // Corresponding volume
    };
  });
