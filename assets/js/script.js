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

        const resB = await fetch(`https://mindicador.cl/api/${data[selectedItem.value].codigo}`);
        const dataB = await resB.json();
        let labelsData = [];
        let dataPrice = [];
        dataB.serie.forEach(element => {
            let nuevafecha = element.fecha.split("T")[0];
            element.fecha = nuevafecha;
            labelsData.push(element.fecha);
            dataPrice.push(element.valor);
        });
        console.log(dataB)
        console.log(labelsData, dataPrice)

        new Chart(document.getElementById("line-chart"), {
            type: 'line',
            data: {
              labels: labelsData.reverse(),
              datasets: [{ 
                  data: dataPrice.reverse(),
                  label: `${dataB.nombre} - Historial`,
                  borderColor: "#3e95cd",
                  fill: true
                }
              ]
            },
            options: {
              title: {
                display: false,
                text: 'World population per region (in millions)'
              }
            }
          });
    } catch (e) {
        alert(e.message);
    }
  
};
