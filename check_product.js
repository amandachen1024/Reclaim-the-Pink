const averagePrices = {"Shampoo": 4.13, "Conditioner": 5.10, "Deodorant": 4.20, "Razor": 2.99, "Soap": 1.17};
const qualityMutipliers = 
{
    "Shampoo":{"Extremely-Below": 0.476, "Below": 0.69, "Average": 1.0, "Above": 4.08, "Extremely-Above": 16.65},
    "Conditioner":{"Extremely-Below": 0.578, "Below": 0.76, "Average": 1.0, "Above": 3.06, "Extremely-Above": 9.36},
    "Deodorant": {"Extremely-Below": 0.4225, "Below": 0.65, "Average": 1.0, "Above": 3.31, "Extremely-Above": 10.96},
    "Razor": {"Extremely-Below": 0.0576, "Below": 0.24, "Average": 1.0, "Above": 1.79, "Extremely-Above": 3.2041},
    "Soap": {"Extremely-Below": 0.360, "Below": 0.60, "Average": 1.0, "Above": 7.28, "Extremely-Above": 53.0}
};
const threshold = 10;

let productType = "";
let quality = "Average";

function getProductType(btn){
    let numChoices = document.getElementsByClassName("product-type").length;
    for (let i = 0; i < numChoices; i++)
    {
        document.getElementsByClassName("product-type")[i].style.backgroundColor= "#322F2F";
    }
    productType = btn.id;
    document.getElementById(productType).style.backgroundColor="#FF5190";
}

function getQuality(btn){
    let numChoices = document.getElementsByClassName("quality-type").length;
    for (let i = 0; i < numChoices; i++)
    {
        document.getElementsByClassName("quality-type")[i].style.backgroundColor="#322F2F";
    }
    quality = btn.id;
    document.getElementById(quality).style.backgroundColor="#FF5190";
}

function checkProduct(){

    let price = document.getElementById("product-price").value;
    let average = averagePrices[productType];
    let markup = 100*(price - average)/average;
    let multiplier = qualityMutipliers[productType][quality];
    let adjustedThreshold = threshold * multiplier;
    let hasPinkTax = markup > adjustedThreshold;

    document.getElementById("average-price").innerHTML = "$" + average.toFixed(2);
    document.getElementById("markup-price").innerHTML = markup.toFixed(2) + "%";

    if (hasPinkTax){
        document.getElementById("has-pink-tax").innerHTML = "This product is much more expensive than expected. It is likely that it has the Pink Tax. </br> If  you would like to shop alternatives from local, women-owned businesses, visit our local shop page.";
    }
    else{
        document.getElementById("has-pink-tax").innerHTML = "This product is not much more expensive than expected. It is not likely that it has the Pink Tax.";
    }
    
    // some formula to get a probability of having pink tax applied
    
}