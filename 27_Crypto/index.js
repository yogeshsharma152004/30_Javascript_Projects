var btc = document.getElementById("bitcoin");

var eth = document.getElementById("ethereum");

var dtc  = document.getElementById("dogecoin");

var settings ={
    "async" : true,
    "scrossDomain" : true,
    "url" :"https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&ids=bitcoin%2Cethereum%2Cdogecoin&names=Bitcoin&symbols=btc",
    "method":"GET",
    "headers":{}
}

$.ajax(settings).done(function(response){
    btc.innerHTML = response.bitcoin.usd;

    eth.innerHTML = response.ethereum.usd;

    dtc.innerHTML = response.dogecoin.usd;
});