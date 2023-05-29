function selected() {
    let start = 1
    var add = 0
    var prodName = ""
    if(document.getElementById("standard").checked) {
        add = 230;
        prodName = "Standart wallet"
    }
    if(document.getElementById("extended").checked) {
        add = 280;
        prodName = "Extended wallet"
    }
    if(document.getElementById("extra").checked) {
        add = 330;
        prodName = "Extra wallet"
    }
    var total = start + add + "" + "Dkk";
    document.getElementById("price_output").innerHTML = total;

    var prodName = "Wallet standart"
    document.getElementById("product_output").innerHTML = prodName;


    localStorage.setItem('currentprice', total);
    localStorage.setItem('prodname', prodName)


};

function NextPage() {
    if (document.getElementById('standard').checked == true) {
        location.href = 'indexbookingWallets2.html'
    }
    if (document.getElementById('extended').checked == true) {
        location.href = 'indexbookingWallets2.html'
    }
    if (document.getElementById('extra').checked == true) {
        location.href = 'indexbookingWallets2.html'
    }
    else {
        alert('Please select a product type :)')
    }
}