function toggleSearch() {
    var searchContainer = document.getElementById("searchContainer");
    if (searchContainer.style.display === "none" || searchContainer.style.display === "") {
        searchContainer.style.display = "flex";
    } else {
        searchContainer.style.display = "none";
    }
}
