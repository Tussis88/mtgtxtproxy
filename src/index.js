import "./styles/styles.css";

//test
import { check } from "./modules/123check";
import test_image from "./assets/images/test_image.jpg";
import { scryfallRequest } from "./modules/scryfallRequest";

console.log(check);
document.body.textContent = check;

scryfallRequest();

const imageTest = document.createElement("img");
imageTest.src = test_image;

document.body.appendChild(imageTest);
