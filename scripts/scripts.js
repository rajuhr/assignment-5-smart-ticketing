const seats = document.getElementsByClassName("seat-bus");
const availableSeat = document.getElementById("availableSeat");
const total = document.getElementById("total");
const leftbutton = document.getElementById("left-button-option");
const maxTicket = document.getElementById("max-ticket");
const couponField = document.getElementById("coupon-field-offer");
const couponBtn = document.getElementById("coupon-btn-field");
const discountContainer = document.getElementById('discount-container-offer');
const discountText = document.getElementById('discount-option');
const couponContainer = document.getElementById('coupon-container-gift')
const grandTotal = document.getElementById('grand-total-count');
const phoneNumber = document.getElementById('phone-option');
const submitBtn = document.getElementById('submit-btn-option')

let seatCountValue = 0;
let totalTk = 0;
let seatAvailAble = 8;
for (const seat of seats) {
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

    seatCountValue++;
    totalTk = totalTk + 550;
    seatAvailAble--;
    seat.disabled = true;
    phoneNumber.disabled = false
 
    availableSeat.innerText = seatCountValue;
    total.innerText = totalTk;
    leftbutton.innerText = seatAvailAble;
    grandTotal.innerText = totalTk

    if (seatCountValue >= 4) {
      for (const seat of seats) {
        seat.disabled = true;
        maxTicket.innerText = "Ticket reach out";
        couponField.disabled = false;
        couponBtn.disabled = false;
      }
    }

  });
}


couponBtn.addEventListener('click', function(){
    const coupon = couponField.value;
    if(coupon === 'NEW15' || coupon === 'Couple 20'){
        if(coupon === 'NEW15'){
            const discount = totalTk*0.15;
            discountContainer.classList.remove('hidden');
            discountText.innerText = discount;
            couponContainer.classList.add('hidden');

            const totalPrice = totalTk - discount;
            grandTotal.innerText = totalPrice
        }

        if(coupon === 'Couple 20'){
            const discount = totalTk * 0.2;
            discountContainer.classList.remove('hidden');
            discountText.innerText = discount;
            couponContainer.classList.add('hidden');

            const totalPrice = totalTk - discount;
            grandTotal.innerText = totalPrice
            
        }
    }else{
        document.getElementById('invalid').classList.remove('hidden')
    }

    
})

phoneNumber.addEventListener('input',function (){
    const number = phoneNumber.value;
    if(seatCountValue > 0 && number.length > 0){
        submitBtn.disabled = false
    }else{
        submitBtn.disabled = true
    }
})