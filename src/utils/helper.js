export function filterData(searchText, products) {
    const filterData = products.filter((p) => p.title.toLowerCase().includes(searchText.toLowerCase()));
    return filterData;
}