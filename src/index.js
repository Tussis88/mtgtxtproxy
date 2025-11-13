import "./styles/styles.css";

import { scryfallRequest } from "./modules/scryfallRequest";
import { dataFetcher } from "./modules/dataFetcher";
import { proxyGenerator } from "./modules/proxyGenerator";

const textWrong = "4 black lotus\n opt\n3 dispel\n\n5 asd\n3 fulmine";
const textWrong2 = "4 black lotus\nopt\n3 Writhing Chrysalis\n\n5 \n2 refurbished familiar"
const textOk = "4 black lotus\nopt\n3 Writhing Chrysalis\n\n5 lightning bolt\n2 refurbished familiar";

const genButton = document.querySelector("#generate");
const printButton = document.querySelector("#print");

const test = dataFetcher(textWrong2);
console.log(test);

scryfallRequest(test).then((result) => {
    console.log(result);
    proxyGenerator(result, test)
});