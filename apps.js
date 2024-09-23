// Toggle Donation and History Button
var donationBtn = document.getElementById('donationBtn')
var historyBtn = document.getElementById('historyBtn')
var donationSection = document.getElementById('donationSection')
var historySection = document.getElementById('historySection')
var walletAmountp = document.getElementById('walletAmountp')//wallet amount for pc
var walletAmountm = document.getElementById('walletAmountm')//wallet amount for mobile
var addHistory = document.getElementById('addHistory')



function makeShow(item){
    item.classList.remove('hidden')
}
function makeHidden(item){
    item.classList.add('hidden')
}



donationBtn.addEventListener('click', function(){
    makeShow(donationSection)
    makeHidden(historySection)
    
})


historyBtn.addEventListener('click', function(){
    makeShow(historySection)
    makeHidden(donationSection)
    
})

// likhte hbeeeee -------------------------------------
function invalidMessage(){
    alert('wrong input')
}


// 
function komTaka(){
    alert('taka kom apnr')
}

var currentDate = new Date();
var formattedDate = currentDate.toString(); 



function isValid(num) {
    return !isNaN(num) && num.toString().trim() === parseFloat(num).toString();; 
}

// Donation section handling
// all should be select with ID
//a=donatebnt   b=inputfield    c=totalDonationnumber
//noakhalibtn   noakhaliInp         noakhaliTotalDonation
//fenibtn       feniInp                feniTotalDonation
//aidBtn        aidInp              aidTotalDonation


function forDonation(a){
    var donatebtn = document.getElementById(a);
    var inp = document.getElementById('noakhaliInp');
    var TotalDonationElem = document.getElementById('noakhaliTotalDonation');
    
    var prevAmount = parseFloat(TotalDonationElem.innerText); 
    
    donatebtn.addEventListener('click', function() {
        var inpVal = inp.value.trim(); 
    
        if (isValid(inpVal) && parseFloat(inpVal) > 0 && parseFloat(inpVal) <= parseFloat(walletAmountp.innerText)) {
            var donationAmount = parseFloat(inpVal);
            prevAmount += donationAmount; 
    
            TotalDonationElem.innerText = prevAmount;
    
            var currentWalletAmount = parseFloat(walletAmountp.innerText);
            walletAmountp.innerText = (currentWalletAmount - donationAmount); //for pc
            walletAmountm.innerText = (currentWalletAmount - donationAmount); //for mobile

            inp.value = '';

            addHistory.innerHTML += `<div class=" flex flex-col px-6 py-8 border-2 rounded-lg gap-4">
                    <h4 class="text-xl font-bold">${donationAmount} Taka is Donated for famine-2024 at Noakhali, Bangladesh</h4>
                    <p class="text-[#585858]">Date :  ${formattedDate}</p>
                </div>`
    
        } else {
            invalidMessage();
            inp.value = '';
        }
    });

}

forDonation('noakhalibtn');




