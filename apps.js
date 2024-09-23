// Toggle Donation and History Button
var donationBtn = document.getElementById('donationBtn')
var historyBtn = document.getElementById('historyBtn')
var donationSection = document.getElementById('donationSection')
var historySection = document.getElementById('historySection')

var walletAmountp = document.getElementById('walletAmountp')//wallet amount for pc



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





function isValid(num) {
    return !isNaN(num) && num.toString().trim() === parseFloat(num).toString();; 
}

// Donation section handling

function forNoakhali(){
    var donatebtn = document.getElementById('noakhalibtn');
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
            console.log(currentWalletAmount)
            walletAmountp.innerText = (currentWalletAmount - donationAmount); 
            inp.value = '';
    
        } else {
            invalidMessage();
            inp.value = '';
        }
    });

}

forNoakhali();




