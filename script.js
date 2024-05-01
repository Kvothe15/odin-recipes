var recipes = [
    "./recipes/lasagna.html",
    "./recipes/champagne_chicken.html",
    "./recipes/roasted_broccoli.html",
    "./recipes/garlic_mushrooms.html",
    "./recipes/oven_roasted_grape_tomatoes.html"
];

function showPopup(recipe) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let popup = document.createElement('div');
            popup.classList.add('popup');
            popup.setAttribute('id', recipe);
            popup.innerHTML = this.responseText;
            document.body.appendChild(popup);
        }
    };
    xhttp.open('GET', './recipes/' + recipe + '.html', true);
    xhttp.send();
};

function hidePopup(recipe) {
    var popup = document.getElementById(recipe);
    if (popup) {
        popup.remove();
    }
}