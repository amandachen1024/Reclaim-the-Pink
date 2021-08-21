const averagePrices = {"Shampoo": 10, "Conditioner": 10, "Razor": 10, "Soap": 10};
const qualityMutipliers = {"Extremely-Below": 2.0, "Below": 1.5, "Average": 1.0, "Above": 0.5, "Extremely-Above": 0.25};

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