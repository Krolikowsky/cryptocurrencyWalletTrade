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
        const cryptocurrencyPriceUSD = document.createElement("p")

        cryptocurrencyIMG.setAttribute("src", "/image/iconBitcoin.png")
        cryptocurrencyRowBox.classList.add("topCryptocurrency__rowDashboard")
        cryptocurrencyBoxName.classList.add("topCryptocurrency__cryptoName")
        cryprocurrencyFullName.classList.add("paragraphWhite")
        cryptocurrencyShortCut.classList.add("paragraph")
        cryptocurrencyPriceBox.classList.add("topCryptocurrency__price")
        cryptocurrencyPriceUSD.classList.add("paragraphWhite")

        let nameCryptocurrency = response.data[index].id.split("-").map((str) => str = str.charAt(0).toUpperCase() + str.substring(1).toLowerCase()).join(" ")
        let shortCutCryptocurrency = response.data[index].symbol.toUpperCase()
        let cryptocuttencyPriceUSD = response.data[index].priceUsd

        console.log(cryptocuttencyPriceUSD.toFixed(2))

        cryprocurrencyFullName.innerText = nameCryptocurrency
        cryptocurrencyShortCut.innerText = shortCutCryptocurrency
        cryptocurrencyPriceUSD.innerText = cryptocuttencyPriceUSD

        cryptocurrencyTopDashboard.appendChild(cryptocurrencyRowBox)
        cryptocurrencyRowBox.appendChild(cryptocurrencyIMG)
        cryptocurrencyRowBox.appendChild(cryptocurrencyBoxName)
        cryptocurrencyBoxName.appendChild(cryprocurrencyFullName)
        cryptocurrencyBoxName.appendChild(cryptocurrencyShortCut)
        cryptocurrencyBoxName.appendChild(cryptocurrencyPriceBox)
        cryptocurrencyPriceBox.appendChild(cryptocurrencyPriceUSD)
    }
}