var currentPrice = localStorage.getItem('currentprice');
var prodName = localStorage.getItem('prodname');

window.onload = document.getElementById('price_output').innerHTML = currentPrice;
window.onload = document.getElementById('product_output').innerHTML = prodName;


var color = document.getElementById('color').value; 

function NextPage() {

    localStorage.setItem('color', color);
    location.href = "indexbookingWallets3.html"
}