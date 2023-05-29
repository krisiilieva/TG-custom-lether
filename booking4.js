var currentPrice = localStorage.getItem('currentprice');
var prodName = localStorage.getItem('prodname');
var color = localStorage.getItem('color');

window.onload = document.getElementById('price_output').innerHTML = currentPrice;
window.onload = document.getElementById('product_output').innerHTML = prodName;


var firstname = document.getElementById('name').value;
var lastname = document.getElementById('lastname').value;
var email = document.getElementById('email').value;
var tel = document.getElementById('tel').value;
var address = document.getElementById('address').value;
var country = document.getElementById('country').value;
var city = document.getElementById('city').value;

function NextPage() {
    localStorage.setItem('name', firstname);
    localStorage.setItem('lstname', lastname);
    localStorage.setItem('email', email);
    localStorage.setItem('tel', tel);
    localStorage.setItem('address', address);
    localStorage.setItem('country', country);
    localStorage.setItem('city', city);

    location.href = "bookingreceipt.html"
}