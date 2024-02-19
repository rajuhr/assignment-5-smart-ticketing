const seatOptionValue = document.getElementsByClassName("seat-bus");
const availableSeat = document.getElementById("availableSeatOption");
const totalValue = document.getElementById("total");
const leftbuttonoption = document.getElementById("left-button-option");
const maxTicketOption = document.getElementById("max-ticket");
const couponFieldMenu = document.getElementById("coupon-field-offer");
const couponBtnOption = document.getElementById("coupon-btn-field");
const discountContainerAmount = document.getElementById('discount-container-offer');
const discountTextValue = document.getElementById('discount-option');
const couponContainerDiscount = document.getElementById('coupon-container-gift')
const grandTotalAmount = document.getElementById('grand-total-count');
const phoneNumberOption = document.getElementById('phone-option');
const submitBtnMenu = document.getElementById('submit-btn-option')

let seatCountValueOfBus = 0;
let totalTk = 0;
let seatAvailAble = 8;
for (const seat of seatOptionValue) {
  seat.addEventListener("click", function (e) {
    seat.style.backgroundColor = "#1DD100";
    seat.style.color = "white";

    const tbody = document.querySelector("tbody");
    const tr = document.createElement("tr");
    tr.innerHTML = `
            <td>${e.target.innerText}</td>
            <td>Economics</td>
            <td>550</td>
        `;
    tbody.appendChild(tr);

    seatCountValueOfBus++;
    totalTk = totalTk + 550;
    seatAvailAble--;
    seat.disabled = true;
    phoneNumberOption.disabled = false
 
    availableSeat.innerText = seatCountValueOfBus;
    totalValue.innerText = totalTk;
    leftbuttonoption.innerText = seatAvailAble;
    grandTotalAmount.innerText = totalTk

    if (seatCountValueOfBus >= 4) {
      for (const seat of seatOptionValue) {
        seat.disabled = true;
        maxTicketOption.innerText = "Ticket reach out";
        couponFieldMenu.disabled = false;
        couponBtnOption.disabled = false;
      }
    }

  });
}


couponBtnOption.addEventListener('click', function(){
    const coupon = couponFieldMenu.value;
    if(coupon === 'NEW15' || coupon === 'Couple 20'){
        if(coupon === 'NEW15'){
            const discount = totalTk*0.15;
            discountContainerAmount.classList.remove('hidden');
            discountTextValue.innerText = discount;
            couponContainerDiscount.classList.add('hidden');

            const totalPrice = totalTk - discount;
            grandTotalAmount.innerText = totalPrice
        }

        if(coupon === 'Couple 20'){
            const discount = totalTk * 0.2;
            discountContainerAmount.classList.remove('hidden');
            discountTextValue.innerText = discount;
            couponContainerDiscount.classList.add('hidden');

            const totalPrice = totalTk - discount;
            grandTotalAmount.innerText = totalPrice
            
        }
    }else{
        document.getElementById('invalid').classList.remove('hidden')
    }

    
})

phoneNumberOption.addEventListener('input',function (){
    const number = phoneNumberOption.value;
    if(seatCountValueOfBus > 0 && number.length > 0){
        submitBtnMenu.disabled = false
    }else{
        submitBtnMenu.disabled = true
    }
})