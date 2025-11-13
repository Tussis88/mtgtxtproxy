function searchCollector(e) {
    const searchForm = document.querySelector(".search");
    e.preventDefault();
    const list = searchForm.searcharea.value;

    return list;
}

export { searchCollector };