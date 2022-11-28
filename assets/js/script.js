async function getCoins(){
    try {
        const res = await fetch("https://mindicador.cl/api")
        const data = await res.json()
        console.log(data)
        console.log(data.dolar.nombre)

        let CoinSelector = ''
        CoinSelector += `
        <option selected>Seleccione moneda</option>
                    <option value="1">${data.dolar.nombre}</option>
                    <option value="2">${data.euro.nombre}</option>
                    <option value="3">${data.bitcoin.nombre}</option>
                    
        ` 
         const selectCoin =
         document.querySelector(".CoinSelector")
         selectCoin.innerHTML = CoinSelector
    } catch (e) {
        alert(e.message);
    }
}

getCoins()
function Calcular() {
    //var inputNumber = document.getElementById("inputNumber")

    let CoinResult = ''
        CoinResult += `
        <h5 class="card-text m-3">Resultado:</h5>
        ` 
         const CoinOP =
         document.querySelector(".CoinResult")
         CoinOP.innerHTML = CoinResult
}