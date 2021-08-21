const averagePrices = {"Shampoo": 4.13, "Conditioner": 4.12}
const qualityMutipliers = {"Extremely-Below": 2.0, "Below": 1.5, "Average": 1.0} 

let productType = "";
let quality = "";

function getProductType(btn){
    productType = btn.id;
    document.getElementById(productType).style.backgroundColor="pink";
}

function getQuality(btn){
    quality = btn.id;
    document.getElementById(quality).style.backgroundColor="pink";
}

function checkProduct(){

    let price = document.getElementById("product-price").value;
    let average = averagePrices[productType];
    let markup = 100*(price - average)/average;
    let multiplier = qualityMutipliers[quality];
    let probability = 0;

    document.getElementById("average-price").innerHTML = average;
    document.getElementById("markup-price").innerHTML = markup + "%";
    
    // some formula to get a probability of having pink tax applied
    
}