const subscbtn = document.getElementById("subscribe");
const visabt = document.getElementById("visabt");
const razorpay = document.getElementById("razorpay");
const paypal = document.getElementById("paypal");
const submitbtn = document.getElementById("submitbtn");
const subscription = document.getElementById("subscription");
const payment = document.getElementById("payment");

submitbtn.onclick = function () {
    if(subscbtn.checked){
        subscription.textContent = `YOU have subscribed the channel`;
    }
    else{
        subscription.textContent = `YOU havn't subscribed the channel`;
    }

    if(visabt.checked){
        payment.textContent = `YOU are going to pay through visa`;
    }
    else if(razorpay.checked){
        payment.textContent = `YOU are going to pay through razorpay`;
    }
    else if(paypal.checked){
        payment.textContent = `YOU are going to pay through paypal`;
    }
    else{
        payment.textContent = `YOU havent choosed any of the payment`;
    }
}
