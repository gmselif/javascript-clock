document.querySelector("#myName").innerHTML = prompt("Please enter your name");

function currentTime () {
    let clockDOM = document.querySelector("#myClock");
    let dayArr = ['Pazar', 'Pazartesi', 'Salı', 'Çarçamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    
    let currentDate = new Date();
    let day = dayArr[currentDate.getDay()];
    let clock = "" + currentDate.getHours() +
                ":"+ currentDate.getMinutes() +
                ":"+ currentDate.getSeconds(); 
                
    clockDOM.innerHTML = clock + " " + day;

    let t = setTimeout(function() { currentTime() }, 1000);
}

currentTime();
