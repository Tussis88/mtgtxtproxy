function listParser(text) {
    text = text.split("\n").filter(line => line.trim() !== "").map(line => line.trim());

    return text
}

export { listParser }