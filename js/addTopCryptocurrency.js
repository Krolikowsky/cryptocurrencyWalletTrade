fetch("https://api.coincap.io/v2/assets")
    .then(response => response.json())
    .then(response => showTopFourCryptocurrency(response))
    .catch(error => console.log('error', error));

function showTopFourCryptocurrency(response){
    const cryptocurrencyTopDashboard = document.querySelector(".topCryptocurrency__dashboard")
   
    for (let index = 0; index < 4; index++) {
        const cryptocurrencyRowBox = document.createElement("div")
        const cryptocurrencyIMG = document.createElement("img")
        const cryptocurrencyBoxName = document.createElement("div")
        const cryprocurrencyFullName = document.createElement("p")
        const cryptocurrencyShortCut = document.createElement("p")
        const cryptocurrencyPriceBox = document.createElement("div")
        const cryptocurrencyPriceUSDBox = document.createElement("p")
        const cryptocurrencyChangePercent24 = document.createElement("p")
        const dashBoardLeftSide = document.createElement("div")

        cryptocurrencyIMG.setAttribute("src", `/image/icon${response.data[index].id}.png`)
        cryptocurrencyRowBox.classList.add("topCryptocurrency__rowDashboard")
        cryptocurrencyBoxName.classList.add("topCryptocurrency__cryptoName")
        cryprocurrencyFullName.classList.add("paragraphWhite")
        cryptocurrencyShortCut.classList.add("paragraph")
        cryptocurrencyShortCut.classList.add("topCryptocurrency__paragraphShortcut")
        cryptocurrencyPriceBox.classList.add("topCryptocurrency__price")
        cryptocurrencyPriceUSDBox.classList.add("paragraphWhite")
        cryptocurrencyChangePercent24.classList.add("paragraph")
        cryptocurrencyChangePercent24.classList.add("topCryptocurrency__paragraphPercent")
        dashBoardLeftSide.style.display = "flex"
        dashBoardLeftSide.style.alignItems = "center"
        dashBoardLeftSide.style.alignContent = "center"
        cryptocurrencyIMG.style.width = "30px"
        cryptocurrencyIMG.style.height = "30px"

        let nameCryptocurrency = response.data[index].name
        let shortCutCryptocurrency = response.data[index].symbol.toUpperCase()
        let cryptocurrencyPriceUSD = response.data[index].priceUsd * 1
        let cryptocurrencyChangePercentValue = response.data[index].changePercent24Hr * 1

        cryprocurrencyFullName.innerText = nameCryptocurrency
        cryptocurrencyShortCut.innerText = shortCutCryptocurrency
        cryptocurrencyPriceUSDBox.innerText = `$` + cryptocurrencyPriceUSD.toFixed(2)
        cryptocurrencyChangePercent24.innerText = cryptocurrencyChangePercentValue.toFixed(2) + `%`

        if(cryptocurrencyChangePercentValue < 0) {
            cryptocurrencyChangePercent24.classList.add("topCryptocurrency__paragraphPercent--red")
        }

        cryptocurrencyTopDashboard.appendChild(cryptocurrencyRowBox)
        cryptocurrencyRowBox.appendChild(dashBoardLeftSide)
        dashBoardLeftSide.appendChild(cryptocurrencyIMG)
        dashBoardLeftSide.appendChild(cryptocurrencyBoxName)
        cryptocurrencyBoxName.appendChild(cryprocurrencyFullName)
        cryptocurrencyBoxName.appendChild(cryptocurrencyShortCut)
        cryptocurrencyRowBox.appendChild(cryptocurrencyPriceBox)
        cryptocurrencyPriceBox.appendChild(cryptocurrencyPriceUSDBox)
        cryptocurrencyPriceBox.appendChild(cryptocurrencyChangePercent24)
    }
}