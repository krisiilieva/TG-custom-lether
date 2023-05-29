

function NextPage() {
    if (document.getElementById('wallets').checked == true) {
        location.href = 'indexbookingWallets.html'
    }
    if (document.getElementById('belts').checked == true) {
        location.href = 'indexAT.html'
    }
    if (document.getElementById('keyholders').checked == true) {
        location.href = 'indexDUK.html'
    }
    else {
        alert('Please select a product type :)')
    }
}