// const connectButton = document.getElementById("connectButton");

// connectButton.addEventListener("click", () => {
//    if (typeof window.ethereum !== "undefined") {
//        console.log("MetaMask installed")
//    } else {
//        window.open("https://metamask.io/download/", "_blank");
//    }
// })



// document.getElementById('connect-button').addEventListener('click', event => {
//   let account;
//   ethereum.request({method: 'eth_requestAccounts'}).then(accounts => {
//     account = accounts[0];
//     console.log(account);

//   });
// });

// ethereum.request({method: 'eth_getBalance' , params: [account, 'latest']}).then(result => {
//   console.log(result);
// });

// let wei = parseInt(result,16); 
// let balance = wei / (10**18);
// console.log(balance + " ETH");

// document.getElementById('connect-button').addEventListener('click', event => {
//   let account;
//   let button = event.target;
//   ethereum.request({method: 'eth_requestAccounts'}).then(accounts => {
//     account = accounts[0];
//     console.log(account);
//     button.textContent = account;
//   });
// });
document.getElementById('connect-button').addEventListener('click', event => {
let account;
let button = event.target;
ethereum.request({method: 'eth_requestAccounts'}).then(accounts => {
  account = accounts[0];
  console.log(account);
  button.textContent = account;

  ethereum.request({method: 'eth_getBalance' , params: [account, 'latest']}).then(result => {
    console.log(result);
    let wei = parseInt(result,16);
    let balance = wei / (10**18);
    console.log(balance + " ETH");
    });
  });
});

import { ajax } from './main.js';
ajax().then(respuesta=>console.log(respuesta));