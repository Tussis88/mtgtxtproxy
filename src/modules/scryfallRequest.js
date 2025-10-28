async function scryfallRequest(fetchedData) {
    const url = "https://api.scryfall.com/cards/collection/";

    const cardNames = fetchedData.map(card => ({ name: card.cardName }));
    const cardRequest = new Request(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ identifiers: cardNames })
    });

    try {
        const response = await fetch(cardRequest);
        if (!response.ok) {
            throw new Error("ERROR: " + response.status);
        }

        const result = await response.json();
        if (result.not_found.length > 0) {
            throw new Error("CARDS NOT FOUND: " + result.not_found.map(line => line.name).join(", "));
        }
        return result.data;
    } catch (error) {
        alert(error.message);
    }
}

export { scryfallRequest }
