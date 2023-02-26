let TourList = [
  "Pakistan",
  "Turkiye",
  "UAE",
  "Trekking",
  "Camping",
  "Safari",
  "Indus Valley",
];

let TourCosts = [120_000, 155_000, 130_000, 115_000, 100_000, 160_000, 92_000];

const changeCosts = () => {
  let selectEl = document.getElementById("tour-type");
  let tourValue = selectEl.value;

  let numTicketsEl = document.getElementById("ticketNum");
  let numOfTickets = numTicketsEl.value;

  if (tourValue != -1) {
    console.log("value: " + numOfTickets + " type: " + typeof numOfTickets);
    numOfTickets = numOfTickets == undefined ? 0 : Number(numOfTickets);

    // TODO: set values
    let costPP = document.getElementById("pricepd");
    let totalCost = document.getElementById("cost-details");

    costPP.value = TourCosts[TourList.indexOf(tourValue)];
    totalCost.value = costPP.value * numOfTickets;
    console.log(selectEl);
    console.log(tourValue);
    console.log(numOfTickets);
  }
};

const generateAlert = () => {
  alert("Tour Booking successful!");
  location.reload();
};
