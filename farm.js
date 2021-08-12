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
      environmentFactors.sun,
      environmentFactors.wind,
      environmentFactors.rain
    );
    calculatedEnvironmentFactor = 0.504;
    return crop.yield * calculatedEnvironmentFactor;
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
