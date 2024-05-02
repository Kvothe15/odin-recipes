var recipes = [
    "./recipes/lasagna.html",
    "./recipes/champagne_chicken.html",
    "./recipes/roasted_broccoli.html",
    "./recipes/garlic_mushrooms.html",
    "./recipes/oven_roasted_grape_tomatoes.html"
];

function showPopup(recipe) {
    fetch('./recipes/' + recipe + '.html')
        .then(response => response.text())
        .then(html => {
            let popup = document.createElement('div');
            popup.classList.add('popup');
            popup.setAttribute('id', recipe);
            popup.innerHTML = html;
            document.body.appendChild(popup);
        })
        .catch(error => console.error(error));
}

function hidePopup(recipe) {
    var popup = document.getElementById(recipe);
    if (popup) {
        popup.remove();
    }
}