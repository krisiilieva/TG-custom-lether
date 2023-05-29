var currentPrice = localStorage.getItem('currentprice');
var prodName = localStorage.getItem('prodname');
var color = localStorage.getItem('color');
var firstname =  localStorage.getItem('firstname');
var lastname =  localStorage.getItem('lstname');
var email =  localStorage.getItem('email');
var tel =  localStorage.getItem('tel');
var address =  localStorage.getItem('address');
var country =  localStorage.getItem('country');
var city =  localStorage.getItem('city');

let receipt = 
`
    <div class="receipt_inner_top">
            <h3 class="receipt_title">
            Let's check what you have chosen, <b class="receipt_elemennt">${firstname}</b> 
            </h3>
            <div>
                <p class="receipt_first">Hmm <b class="receipt_elemennt">${color}</b>, <b class="receipt_elemennt"> ${prodName} </b></p>
                <p class="receipt_second">That will cost you <b class="receipt_elemennt"> ${currentPrice} </b></p>
            </div>
    </div>
    <div class="receipt_inner_bottom">
        <h3 class="receipt_title">Please check if that is correct</h3>
        <div class="receipt_personal_info_holder">
            <p class="receipt_personal_info_element"> You live on <b class="receipt_elemennt"> ${address} </b> , <b class="receipt_elemennt"> ${city} </b> in <b class="receipt_elemennt"> ${country} </b> </p>
            <p class="receipt_personal_info_element">We can contact you on <b class="receipt_elemennt"> ${tel} </b> </p>
            <p class="receipt_personal_info_element">And that's your correct email <b class="receipt_elemennt"> ${email} </b></p>
    </div>
`
window.onload = document.getElementById('output').innerHTML = receipt

function NextPage() {
    if(document.getElementById('final_step_check').checked == true) {
        location.href = ""
    }
    else {
        alert('Please make sure everything is correct :)')
    }

}