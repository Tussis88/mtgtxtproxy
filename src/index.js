import "./styles/styles.css";

import { scryfallRequest } from "./modules/scryfallRequest";
import { listParser } from "./modules/dataFetcher";

const cards = ["black lotus", "opt", "dispel", "bfdd", "refurbished familiar"];
const text = "4 black lotus \n 2 opt \n 3 dispel \n\n 5 asd";

scryfallRequest(cards);
console.log(listParser(text));
