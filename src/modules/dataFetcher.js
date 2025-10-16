function listParser(text) {
    text = text.split("\n").filter(line => line.trim() !== "").map(line => line.trim());
    const quantity = text.map(line => parseInt(line.split(" ")[0]));
    const cardName = text.map(line => line.split(" ").slice(1).join(" "));
    const data = quantity.map((line, index) => ({ quantity: quantity[index], cardName: cardName[index] }));

    return data
}

export { listParser }