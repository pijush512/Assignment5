// Love count
const loveCount = document.getElementById("love_count");

const heardButtons = document.getElementsByClassName("heard_btn");
    for(const button of heardButtons){
        button.addEventListener('click', function(){
            loveCount.innerText = parseInt(loveCount.innerText) + 1;
        });
    };
    
