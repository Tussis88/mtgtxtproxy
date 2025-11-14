import "./styles/styles.css";

import { searchCollector } from "./modules/searchCollector";

const textWrong = "4 black lotus\n opt\n3 dispel\n\n5 asd\n3 fulmine";
const textWrong2 = "4 black lotus\nopt\n3 Writhing Chrysalis\n\n5 \n2 refurbished familiar"
const textOk = "4 black lotus\nopt\n3 Writhing Chrysalis\n\n5 lightning bolt\n2 refurbished familiar";

const printButton = document.querySelector("#print");
printButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.print();
})

const searchForm = document.querySelector(".search");

searchForm.addEventListener("submit", searchCollector);


// const test = dataFetcher(textWrong2);
// console.log(test);

// scryfallRequest(test).then((result) => {
//     console.log(result);
//     proxyGenerator(result, test)
// });