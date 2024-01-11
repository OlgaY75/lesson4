function petrolFunction(carFuel = "disel", carSize ="XL") {
    let text = "заправка для " + carSize + " авто, тип палива " + carFuel;
    console.log(text);
}
petrolFunction();

let fuels = ["diesel", "gas"];
let sizes = ["S", "M", "L", "XL"];

for (let i = 0; i < fuels.length; i++) {
    for (let j = 0; j < sizes.length; j++) {
        petrolFunction(fuels[i],sizes[j]);
    }
}


