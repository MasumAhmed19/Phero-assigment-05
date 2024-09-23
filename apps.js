// Toggle Donation and History Button
var donationBtn = document.getElementById('donationBtn')
var historyBtn = document.getElementById('historyBtn')
var donationSection = document.getElementById('donationSection')
var historySection = document.getElementById('historySection')


historyBtn.addEventListener('click', function(){
    historySection.classList.remove('hidden')
    donationSection.classList.add('hidden')
    
})

donationSection.addEventListener('click', function(){
    donationSection.classList.remove('hidden')
    historySection.classList.add('hidden')
    
})


//hudden function

function makeHidden(itemItem){
    document.getElementById('itemItem').classList.toggle ='hidden'
}