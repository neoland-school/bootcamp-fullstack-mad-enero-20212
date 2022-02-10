
function startApp() {
    getCoinsData().then(data => {
        printCoinRows(data)
        colorPriceChange();
        enableSearchBar();
    })
}

startApp();