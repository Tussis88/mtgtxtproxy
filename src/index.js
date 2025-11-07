import "./styles/styles.css";

import { scryfallRequest } from "./modules/scryfallRequest";
import { dataFetcher } from "./modules/dataFetcher";
import { proxyGenerator } from "./modules/proxyGenerator";

const textWrong = "4 black lotus\n opt\n3 dispel\n\n5 asd\n3 fulmine";
const textOk = "4 black lotus\nopt\n3 Writhing Chrysalis\n\n5 lightning bolt\n2 refurbished familiar";

const test = dataFetcher(textOk);
console.log(test);

scryfallRequest(test).then((result) => {
    console.log(result);
    proxyGenerator(result, test)
});
// const result = scryfallRequest(test);
// console.log(result);

// proxyGenerator(result, test);
