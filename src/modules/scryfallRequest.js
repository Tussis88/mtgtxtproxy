async function scryfallRequest() {
    const url = "https://api.scryfall.com/cards/collection/";
    const cards = ["black lotus", "opt", "dispel"];

    const identifiers = cards.map(name => ({ name }));
    const cardRequest = new Request(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ identifiers })
    })

    try {
        const response = await fetch(cardRequest);
        if (!response.ok) {
            throw new Error("Error: " + response.status);
        }

        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error.message);
    }
}

export { scryfallRequest }
