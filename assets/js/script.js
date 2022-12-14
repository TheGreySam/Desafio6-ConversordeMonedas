const CoinForm = document.querySelector("#CoinForm");
const inputNumber = document.querySelector("#inputNumber");
const selectedItem = document.querySelector("#Coins");
const CoinResult = document.querySelector("#CoinResult");

// CoinForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     console.log("submit");
// });
async function getCoins() {
    try {
        const res = await fetch("https://mindicador.cl/api");
        const data = await res.json();
        console.log(inputNumber.value);
        console.log(selectedItem.value);
        console.log(data[selectedItem.value]);
        console.log(data[selectedItem.value].valor);
        
        CoinResult.innerHTML = 
        `<h5 class="card-text m-3">Resultado: </h5>
        <h3 class="m-3">$ ${inputNumber.value / data[selectedItem.value].valor} ${data[selectedItem.value].nombre}<h3>`;
       
    } catch (e) {
        alert(e.message);
    }
  
};
