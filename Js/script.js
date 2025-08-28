// Love count Funcationality
const loveCount = document.getElementById("love_count");

const heardButtons = document.getElementsByClassName("heard_btn");
    for(const button of heardButtons){
        button.addEventListener('click', function(){
            loveCount.innerText = parseInt(loveCount.innerText) + 1;
        });
    };
    
// Call Button Funcationality
// National emergency 
// const NationalEmergencyCallBtn = document.getElementById("national_emergency_call_btn");
// const coinCount = document.getElementById("coin");
// const callHistory = document.getElementById("call_history_container");
//     NationalEmergencyCallBtn.addEventListener('click', function(){
//         const serviceName = "National Emergency Number";
//         const serviceNumber = "999";
//         alert(`Calling ${serviceName} ${serviceNumber}...`);
//         let availablecoin = parseInt(coinCount.innerText);
//         if(availablecoin >= 20){
//             coinCount.innerText = availablecoin - 20;
//         }
//         else{
//             alert("You Have not Available coin.");
//             return;
//         };
//         // History
//         const time = new Date().toLocaleTimeString();
//         const newHistory = document.createElement("div");
//             newHistory.innerHTML = `
//                 <div class="mt-4 history mx-[30px] p-2 rounded-lg bg-[#FAFAFA]">
//                     <div class="flex justify-between items-center">
//                         <div>
//                             <h2 class="font-bold">${serviceName}</h2>
//                             <h2 class="font-bold text-[#5C5C5C]">${serviceNumber}</h2>
//                         </div>
//                         <p class="font-semibold">${time}</p>
//                     </div>   
//                 </div>
//             `;
//             callHistory.prepend(newHistory);
//     });



// Call Button funcationality
const coinCount = document.getElementById("coin");
const callHistory = document.getElementById("call_history_container");

function callButton(id){
const callButton = document.getElementById(id);
    callButton.addEventListener('click', function(){
        const card = this.closest(".card");
        const serviceName = card.querySelector(".service_name").innerText;
        const serviceNumber = card.querySelector(".service_number").innerText;

        alert(`Calling ${serviceName} ${serviceNumber}...`);
        let availableCoin = parseInt(coinCount.innerText);
        if(availableCoin >= 20){
            coinCount.innerText = availableCoin - 20;
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
}

// National Emergency call button
callButton("national_emergency_call_btn");

// police Helpline call button
callButton("police_helpline_btn");

// Fier Service call button
callButton("fire_service_call_btn");

// Ambulance Service call button
callButton("ambulance_helpline_btn");

// Women& Child call button
callButton("women&child_call_btn");

// Anti-Corruption call button
callButton("anticorruption_call_btn");

// Electricty Helpline call Button
callButton("Electricity_helpline_call_btn");

// Brac Helpline call Button
callButton("brac_helpline_call_btn");

// Bangladesh Railway Helpline call Button
callButton("bd_railway_helpline_call_btn");











// police Helpline button
// const policeHelplineBtn = document.getElementById("police_helpline_btn");
// policeHelplineBtn.addEventListener('click', function(){
//     const serviceName = "Police Helpline Number";
//     const serviceNumber = "999";
//     alert(`Calling ${serviceName} ${serviceNumber}`);
//     let availablecoin = parseInt(coinCount.innerText);
//     if(availablecoin >= 20){
//         coinCount.innerText = availablecoin - 20;
//     }
//     else{
//         alert("You Have not Available coin.");
//         return;
//         };
    
//     const time = new Date().toLocaleTimeString();
//         const newHistory = document.createElement("div");
//             newHistory.innerHTML = `
//                 <div class="mt-4 history mx-[30px] p-2 rounded-lg bg-[#FAFAFA]">
//                     <div class="flex justify-between items-center">
//                         <div>
//                             <h2 class="font-bold">${serviceName}</h2>
//                             <h2 class="font-bold text-[#5C5C5C]">${serviceNumber}</h2>
//                         </div>
//                         <p class="font-semibold">${time}</p>
//                     </div>   
//                 </div>
//             `;
//             callHistory.prepend(newHistory);
// });


// Call history clear funcationality
const historyClearButton = document.getElementById("call_history_clear_btn");
historyClearButton.addEventListener('click', function(){
    callHistory.innerHTML = "";
});


// Copy Count funcationality
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