const contentDiv = document.querySelector(".content");

function proxyGenerator(cardsArray, userData) {
    const quantityArray = userData.map(line => line.quantity);
    contentDiv.textContent = "";

    cardsArray.forEach((cardObj, index) => {
        for (let i = 0; i < quantityArray[index]; i++) {
            createProxyCard(cardObj);
        }
    })
}

function createProxyCard(cardData) {

    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    contentDiv.appendChild(cardDiv);

    //TOP: NOME e COSTO DI MANA
    const topDiv = document.createElement("div");
    topDiv.classList.add("top");
    cardDiv.appendChild(topDiv);

    const nameDiv = document.createElement("div");
    nameDiv.classList.add("name");
    nameDiv.textContent = cardData.name;

    const manaCostDiv = document.createElement("div");
    manaCostDiv.classList.add("manaCost");
    manaCostDiv.textContent = cardData.mana_cost;

    topDiv.appendChild(nameDiv);
    topDiv.appendChild(manaCostDiv);

    //MID: TIPO e SOTTOTIPO
    const typeDiv = document.createElement("div");
    typeDiv.classList.add("type");
    typeDiv.textContent = cardData.type_line;
    cardDiv.appendChild(typeDiv);

    //TEXTBOX: TESTO CARTA
    const oracleDiv = document.createElement("div");
    oracleDiv.classList.add("oracle");
    oracleDiv.textContent = cardData.oracle_text;
    cardDiv.appendChild(oracleDiv);

    //BOT: COLORE e FOR/COS
    const bottomDiv = document.createElement("div");
    bottomDiv.classList.add("bottom");
    cardDiv.appendChild(bottomDiv);

    if (cardData.colors.length >= 1) {
        const colorDiv = document.createElement("div");
        colorDiv.classList.add("color");
        colorDiv.textContent = "color: " + cardData.colors.join(", ");

        bottomDiv.appendChild(colorDiv);
    }

    if (cardData.power) {
        const powAndTouDiv = document.createElement("div");
        powAndTouDiv.classList.add("stats");
        powAndTouDiv.textContent = cardData.power + "/" + cardData.toughness;
        bottomDiv.appendChild(powAndTouDiv);
    }

}

export { proxyGenerator }