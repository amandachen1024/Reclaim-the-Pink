const averagePrices = {"Shampoo": 10, "Conditioner": 10, "Razor": 10, "Soap": 10};
const qualityMutipliers = {"Extremely-Below": 0.25, "Below": 0.5, "Average": 1.0, "Above": 1.5, "Extremely-Above": 2.0};
const threshold = 20;

let productType = "";
let quality = "";

function getProductType(btn){
    let numChoices = document.getElementsByClassName("product-type").length;
    for (let i = 0; i < numChoices; i++)
    {
        document.getElementsByClassName("product-type")[i].style.backgroundColor="grey";
    }
    productType = btn.id;
    document.getElementById(productType).style.backgroundColor="pink";
}

function getQuality(btn){
    let numChoices = document.getElementsByClassName("quality-type").length;
    for (let i = 0; i < numChoices; i++)
    {
        document.getElementsByClassName("quality-type")[i].style.backgroundColor="grey";
    }
    quality = btn.id;
    document.getElementById(quality).style.backgroundColor="pink";
}

function checkProduct(){

    let price = document.getElementById("product-price").value;
    let average = averagePrices[productType];
    let markup = 100*(price - average)/average;
    let multiplier = qualityMutipliers[quality];
    let adjustedThreshold = threshold * multiplier;
    let hasPinkTax = markup > adjustedThreshold;

    document.getElementById("average-price").innerHTML = average;
    document.getElementById("markup-price").innerHTML = markup + "%";

    if (hasPinkTax){
        document.getElementById("has-pink-tax").innerHTML = "This product is much more expensive than expected. It is likely that it has the Pink Tax.";
    }
    else{
        document.getElementById("has-pink-tax").innerHTML = "This product is not much more expensive than expected. It is not likely that it has the Pink Tax.";
    }
    
    // some formula to get a probability of having pink tax applied
    
}