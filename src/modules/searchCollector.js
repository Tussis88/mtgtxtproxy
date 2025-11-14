import { dataFetcher } from "./dataFetcher";
import { proxyGenerator } from "./proxyGenerator";
import { scryfallRequest } from "./scryfallRequest";

function searchCollector(e) {
    const searchForm = document.querySelector(".search");
    const printButton = document.querySelector("#print");
    e.preventDefault();

    const list = dataFetcher(searchForm.searcharea.value);
    scryfallRequest(list).then((result) => {
        console.log(result);
        proxyGenerator(result, list)
        printButton.style.display = "inline-block";
    });
}

export { searchCollector };