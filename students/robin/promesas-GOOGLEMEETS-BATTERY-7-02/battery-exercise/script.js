

function showBattery(){
    navigator.getBattery().then(function(battery) {
    const batt = document.getElementById('status')
    const pBatt = document.createElement('p')
    batt.appendChild(pBatt)


    console.log(batteryIsCharging)
    batteryIsCharging = battery.charging;
    console.log(batteryIsCharging)
    batteryLevel = batteryIsCharging*100
    console.log(batteryLevel)
    changeDivColor(battery)
    pBatt.textContent = `${batteryLevel}%`

    
    if(batteryIsCharging === true){
        const pInfo = document.createElement('p')
        pInfo.textContent = "Battery Charging"
        batt.appendChild(pInfo)
    }
})
}
showBattery()





const progressBattery = document.getElementById('progres');
let batteryLevel;
let batteryIsCharging;
let divs = document.querySelectorAll('.batteryprogres div')




function changeDivColor(){
    let counter = 0;
    if(batteryIsCharging === true){
        const batteryContainer = document.getElementById('progres');
        setInterval(() => {
            const div = document.createElement('div')
            if(counter< 5){
                counter = counter+1
                
                div.classList.add('indicator')
                
                batteryContainer.appendChild(div)
            }if (counter === 5){
                
               const div2 = document.querySelectorAll('.indicator');
               div2.forEach(value => value.remove('indicator'))
               counter = 0
            }
            
        },200)
       
       
    }
}

changeDivColor()





