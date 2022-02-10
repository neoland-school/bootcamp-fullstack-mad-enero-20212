if (la condicion: battery) {
    batterystatusdom.tet.content = 'Battery id charging';
;} else {
     batterystatusdom.tet.content = 'Battery id NOT charging'
}

y cambiando a ternario

 batteryStatusDom.textContent = battery.charging ? 'Battery Charging' : 'Battery not Charging';