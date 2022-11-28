async function getCoins(){
    try {
        const res = await fetch("https://mindicador.cl/api")
        const data = await res.json()
        console.log(data)
        console.log(data.dolar.nombre)

        let CoinSelector = ''
        CoinSelector += `
        <option selected>Seleccione moneda</option>
                    <option value="${data.dolar.valor}">${data.dolar.nombre}</option>
                    <option value="${data.euro.valor}">${data.euro.nombre}</option>
                    <option value="${data.bitcoin.valor}">${data.bitcoin.nombre}</option>
                    
        ` 
         const selectCoin =
         document.querySelector(".CoinSelector")
         selectCoin.innerHTML = CoinSelector
    } catch (e) {
        alert(e.message);
    }
}
// $('.CoinSelector').change(function () {
//     var selectedItem = $('.CoinSelector').val();
//     alert(selectedItem);
// });
getCoins()
function Calcular() {
    var inputNumber = document.getElementById("inputNumber").value
    var selectedItem = document.getElementById("Coins").value
    console.log(inputNumber)
    console.log(selectedItem)
    

    var total = (inputNumber / selectedItem).toFixed(2)

    let CoinResult = ''
        CoinResult += `
        <h5 class="card-text m-3">Resultado:$${total}</h5>
        ` 
         const CoinOP =
         document.querySelector(".CoinResult")
         CoinOP.innerHTML = CoinResult
}