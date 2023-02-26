let carList = [
  "Lexus LX Series LX 600 UL 2022",
  "KIA Sportage",
  "Toyota Land Cruiser 2023",
  "Range Rover Vogue Supercharged 5.0 V8",
  "BMW iX3 2022 M Sport",
  "Mercedes Benz GLB Class",
  "Lexus CT200h F Sport",
  "Hyundai Staria 2023 Minivan",
];

let carCosts = [
  35_000, 25_000, 30_000, 31_0000, 27_000, 29_000, 22_000, 24_000,
];

const changeCosts = () => {
  let selectEl = document.getElementById("car-select");
  let carValue = selectEl.value;

  let daysEl = document.getElementById("numDays");
  let numOfDays = daysEl.value;

  if (carValue != -1) {
    console.log("value: " + numOfDays + " type: " + typeof numOfDays);
    numOfDays = numOfDays == undefined ? 0 : Number(numOfDays);

    // TODO: set values
    let costPD = document.getElementById("pricepd");
    let totalCost = document.getElementById("totalCost");

    costPD.value = carCosts[carList.indexOf(carValue)];
    totalCost.value = costPD.value * numOfDays;
    console.log(selectEl);
    console.log(carValue);
    console.log(numOfDays);
  }
};

const generateAlert = () => {
  alert("Booking successful!");
  location.reload();
};
