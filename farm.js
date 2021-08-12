const corn = {
  name: "corn",
  yield: 30,
  factors: {
    sun: { low: -10, medium: 0, high: 60 },
    wind: { low: 0, medium: -30, high: -60 },
    rain: { low: -20, medium: 0, high: -70 }
  },
  costPerPlant: 1,
  salesPrice: 2
};

const pumpkin = {
  name: "pumpkin",
  yield: 4,
  factors: {
    sun: { low: -50, medium: 0, high: 50 },
    wind: { low: 0, medium: -10, high: -30 },
    rain: { low: -40, medium: 0, high: -20 }
  },
  costPerPlant: 2,
  salesPrice: 5
};

const round = (num, decimalPlaces = 0) => {
  num = Math.round(num + "e" + decimalPlaces);
  return Number(num + "e" + -decimalPlaces);
};

const environmentFactors = {
  sun: "low",
  wind: "medium",
  rain: "low"
};

const getCostsForCrop = (crop) => {
  const costPerCrop = crop.yield * crop.costPerPlant;
  return costPerCrop;
};

const getYieldForPlant = (crop, environmentFactors) => {
  if (environmentFactors != "") {
    console.log(
      "38",
      environmentFactors.sun,
      environmentFactors.wind,
      environmentFactors.rain
    );
    let sunFactor = environmentFactors.sun;
    let windFactor = environmentFactors.wind;
    let rainFactor = environmentFactors.rain;
    const chosenCrop = crop;

    console.log(
      "49",
      round(
        ((100 + crop.factors.sun[sunFactor]) / 100) *
          ((100 + crop.factors.wind[windFactor]) / 100) *
          ((100 + crop.factors.rain[rainFactor]) / 100),
        2
      )
    );
    const calculatedEnvironmentFactor =
      ((100 + crop.factors.sun[sunFactor]) / 100) *
      ((100 + crop.factors.wind[windFactor]) / 100) *
      ((100 + crop.factors.rain[rainFactor]) / 100);
    console.log("69", calculatedEnvironmentFactor);
    // calculatedEnvironmentFactor = [crop].windFactor;
    return crop.yield * calculatedEnvironmentFactor; //round(calculatedEnvrionmentFactor, 2);
  } else return crop.yield;
};

const getYieldForCrop = (crop) => {
  let yieldForCrop = crop.crop.yield * crop.numCrops;
  return yieldForCrop;
};

const getTotalYield = (list) => {
  listOfCrops = list.crops;
  let totalYield = 0;
  for (i = 0; i < listOfCrops.length; i++) {
    totalYield += listOfCrops[i].numCrops * listOfCrops[i].crop.yield;
  }
  return totalYield;
};

const getRevenueForCrop = (crop) => {
  const revPerCrop = crop.yield * crop.salesPrice;
  return revPerCrop;
};

const getProfitForCrop = (crop) => {
  const costCrop = getCostsForCrop(crop);
  const revCrop = getRevenueForCrop(crop);
  profitCrop = revCrop - costCrop;
  return profitCrop;
};

const getTotalProfit = () => {
  const totalProfit = getProfitForCrop(corn) + getProfitForCrop(pumpkin);
  return totalProfit;
};
module.exports = {
  getCostsForCrop,
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit
};
