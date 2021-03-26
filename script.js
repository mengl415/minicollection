let container = document.querySelector(".container");

let stubbyvCount = 0;
let stubbydCount = 0;

let button1 = document.querySelector(".click-stubbyv");
button1.addEventListener("click", function(){
    let stubbyvImage = document.createElement("img");
    stubbyvImage.classList.add("stubbyvImage");
    stubbyvImage.src = "./assets/stubbyV.png";
    stubbyvCount++;
    if(stubbyvCount % 2 > 0){
        container.append(stubbyvImage);
        console.log(stubbyvCount);
    }
    else{
        stubbyvImage.container.removeChild(stubbyvImage);
        console.log(stubbyvCount);
    }
});

let button2 = document.querySelector(".click-stubbyd");
button2.addEventListener("click", function(){
    let stubbydImage = document.createElement("img");
    stubbydImage.classList.add("stubbydImage");
    stubbydImage.src = "./assets/stubbyD.png";
    stubbydCount++;
    if(stubbydCount%2 > 0){
        container.append(stubbydImage);
        console.log(stubbydCount);
    }
    else{
        stubbydImage.container.removeChild(stubbydImage);
        console.log(stubbydCount);
    }
});

