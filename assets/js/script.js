async function getCoins() {
    try {
        const res = await fetch("https://mindicador.cl/api")
        const data = await res.json()
        console.log(data)
        console.log(data.dolar.nombre)

        let CoinSelector = ''
        CoinSelector += `
        <option selected id="selected">Seleccione moneda</option>
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
    var selectedItemName = document.getElementById("selected").innerText
    console.log(inputNumber)
    console.log(selectedItem)
    console.log(selectedItemName)

    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: 'numero',
                data: [19, 3, 5, 2, 3],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    var total = (inputNumber / selectedItem).toFixed(2)

    let CoinResult = ''
    CoinResult += `
        <h5 class="card-text m-3">Resultado: $ ${total} ${selectedItemName}</h5>
        
        `
    const CoinOP =
        document.querySelector(".CoinResult")
    CoinOP.innerHTML = CoinResult
}

