import "./styles/styles.css";

import { scryfallRequest } from "./modules/scryfallRequest";
import { dataFetcher } from "./modules/dataFetcher";
import { proxyGenerator } from "./modules/proxyGenerator";

const textWrong = "4 black lotus\n opt\n3 dispel\n\n5 asd\n3 fulmine";
const textOk = "4 black lotus\nopt\n3 dispel\n\n5 lightning bolt";

const test = dataFetcher(textOk);
console.log(test);

const result = scryfallRequest(test);
console.log(result);

proxyGenerator(result, test);
