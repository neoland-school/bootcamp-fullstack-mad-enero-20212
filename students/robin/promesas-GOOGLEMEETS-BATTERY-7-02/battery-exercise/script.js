

function showBattery(){
    navigator.getBattery().then(function(battery) {
    const batt = document.getElementById('status')
    const pBatt = document.createElement('p')
    batt.appendChild(pBatt)

    batteryIsCharging = battery.charging;
    
     batteryLevel = battery.level*100
    changeDivColor(battery)
    pBatt.textContent = `${batteryLevel}%`

  
    if(batteryIsCharging === true){
        const pInfo = document.createElement('p')
        pInfo.textContent = "Battery Charging"
        batt.appendChild(pInfo)
    }else if(batteryIsCharging === false ){
        const pInfo = document.createElement('p')
        pInfo.textContent = 'Not charging'
        batt.appendChild(pInfo)
        batt.appendChild(pInfo)
    }

 

    if(batteryLevel < 50 && batteryLevel > 20){
        const batteryColor = document.querySelector('.battery');
        batteryColor.style.backgroundColor = 'orange'
    }else if (batteryLevel < 20){
        const batteryColor = document.querySelector('.battery');
        batteryColor.style.backgroundColor = 'red'
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

    }else if(batteryIsCharging === false && batteryLevel > 90){
        const batteryContainer = document.getElementById('progres');
        const div1 = document.createElement('div');
        div1.classList.add('indicator')
        const div2 = document.createElement('div');
        div2.classList.add('indicator')
        const div3 = document.createElement('div');
        div3.classList.add('indicator')
        const div4 = document.createElement('div');
        div4.classList.add('indicator')

        batteryContainer.appendChild(div1)
        batteryContainer.appendChild(div2)
        batteryContainer.appendChild(div3)
        batteryContainer.appendChild(div4)
       
    }else if(batteryIsCharging === false && batteryLevel < 50 && batteryLevel > 20 ){
        const batteryContainer = document.getElementById('progres');
        const div1 = document.createElement('div');
        div1.classList.add('indicator')
        const div2 = document.createElement('div');
        div2.classList.add('indicator')

        batteryContainer.appendChild(div1)
        batteryContainer.appendChild(div2)

    }else if(batteryIsCharging === false && batteryLevel < 20){
        const batteryContainer = document.getElementById('progres');
        const div1 = document.createElement('div');
        div1.classList.add('indicator')
        batteryContainer.appendChild(div1)
    }

}





changeDivColor()








