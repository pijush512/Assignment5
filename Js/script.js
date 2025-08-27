// Love count
const loveCount = document.getElementById("love_count");

const heardButtons = document.getElementsByClassName("heard_btn");
    for(const button of heardButtons){
        button.addEventListener('click', function(){
            loveCount.innerText = parseInt(loveCount.innerText) + 1;
        });
    };
    
// Call Button Funcationality
// National emergency 
const NationalEmergencyCallBtn = document.getElementById("national_emergency_call_btn");
const coinCount = document.getElementById("coin");
const callHistory = document.getElementById("call_history_container");
    NationalEmergencyCallBtn.addEventListener('click', function(){
        const serviceName = "National Emergency Number";
        const serviceNumber = "999";
        alert(`Calling ${serviceName} ${serviceNumber}...`);
        let availablecoin = parseInt(coinCount.innerText);
        if(availablecoin >= 20){
            coinCount.innerText = availablecoin - 20;
        }
        else{
            alert("You Have not Available coin.");
            return;
        };
        // History
        const time = new Date().toLocaleTimeString();
        const newHistory = document.createElement("div");
            newHistory.innerHTML = `
                <div class="mt-4 history mx-[30px] p-2 rounded-lg bg-[#FAFAFA]">
                    <div class="flex justify-between items-center">
                        <div>
                            <h2 class="font-bold">${serviceName}</h2>
                            <h2 class="font-bold text-[#5C5C5C]">${serviceNumber}</h2>
                        </div>
                        <p class="font-semibold">${time}</p>
                    </div>   
                </div>
            `;
            callHistory.prepend(newHistory);
    });
// police Helpline button
const policeHelplineBtn = document.getElementById("police_helpline_btn");
policeHelplineBtn.addEventListener('click', function(){
    const serviceName = "Police Helpline Number";
    const serviceNumber = "999";
    alert(`Calling ${serviceName} ${serviceNumber}`);
    let availablecoin = parseInt(coinCount.innerText);
    if(availablecoin >= 20){
        coinCount.innerText = availablecoin - 20;
    }
    else{
        alert("You Have not Available coin.");
        return;
        };
    
    const time = new Date().toLocaleTimeString();
        const newHistory = document.createElement("div");
            newHistory.innerHTML = `
                <div class="mt-4 history mx-[30px] p-2 rounded-lg bg-[#FAFAFA]">
                    <div class="flex justify-between items-center">
                        <div>
                            <h2 class="font-bold">${serviceName}</h2>
                            <h2 class="font-bold text-[#5C5C5C]">${serviceNumber}</h2>
                        </div>
                        <p class="font-semibold">${time}</p>
                    </div>   
                </div>
            `;
            callHistory.prepend(newHistory);
});


// Call history clear funcationality
const historyClearButton = document.getElementById("call_history_clear_btn");
historyClearButton.addEventListener('click', function(){
    callHistory.innerHTML = "";
});


// Copy Count
const copyCount = document.getElementById("copy_count");
const copyButtons = document.getElementsByClassName("copy_button");
    for(const button of copyButtons){
        button.addEventListener('click', function(){
            const card = this.closest(".card");
            const number = card.querySelector(".service_number").innerText;
            navigator.clipboard.writeText(number);
            alert(`Number copied ${number}`);
            copyCount.innerText = parseInt(copyCount.innerText) + 1;
        });
    };