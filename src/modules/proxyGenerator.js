function proxyGenerator(cardsArray, userData) {
    const quantityArray = userData.map(line => line.quantity);
    const contentDiv = document.querySelector(".content");

    cardsArray.forEach((cardObj, index) => {
        for (let i = 0; i < quantityArray[index]; i++) {
            const cardDiv = document.createElement("div");
            cardDiv.classList.add("card");
            cardDiv.textContent = cardObj.name;

            contentDiv.appendChild(cardDiv);
        }
    })
}

export { proxyGenerator }