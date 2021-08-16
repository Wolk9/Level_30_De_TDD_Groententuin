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

const getYieldForPlant = (crop, envFact) => {
  if (envFact != undefined) {
    // test wether this should be calculated at all
    let sunFactor = envFact.sun; // extract the sun factor out of envFact
    let windFactor = envFact.wind; // extract the wind factor out of envFact
    let rainFactor = envFact.rain; // extract the rain factor out of envFact

    const calcEnvFact = // calculate the environmental factors
      ((100 + crop.factors.sun[sunFactor]) / 100).toFixed(2) *
      ((100 + crop.factors.wind[windFactor]) / 100).toFixed(2) *
      ((100 + crop.factors.rain[rainFactor]) / 100).toFixed(2);
    calculatedEnvironmentFactor = calcEnvFact.toFixed(2); // round up due to floatingpoint errors

    result = (crop.yield * (calculatedEnvironmentFactor * 10)) / 10;

    return Number(parseFloat(result).toFixed(2)); //round(calculatedEnvrionmentFactor, 2);
  } else return crop.yield; // just return the crop yield when no environmental factors play a role.
};

const getYieldForCrop = (crop, envFact) => {
  numCrops = crop.numCrops; // extract numCrops of crop for the calculation
  crop = crop.crop; // dismantel the crop input to just crop info as getYeildForPlant expects
  if (envFact != undefined) {
    let cropYield = getYieldForPlant(crop, envFact); // use yield for crop function for a result as cropYield

    let yieldForCrop = cropYield * numCrops; // calculation of yield of Crop
    return yieldForCrop; // the calculated result
  } else return crop.yield * numCrops;
};

const getTotalYield = (list, envFact) => {
  listOfCrops = list.crops;
  let totalYield = 0;
  if (envFact != undefined) {
    for (i = 0; i < listOfCrops.length; i++) {
      totalYield += getYieldForCrop(listOfCrops[i], envFact);
    }
  } else {
    for (i = 0; i < listOfCrops.length; i++) {
      totalYield += getYieldForCrop(listOfCrops[i]);
    }
  }
  return Number(totalYield);
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
