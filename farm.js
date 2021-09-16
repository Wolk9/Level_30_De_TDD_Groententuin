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

const getCostsForCrop = (crop, envFact) => {
  // console.log("32  getCostForCrop ", crop, envFact);
  if (envFact != undefined) {
    let yieldForCropWithEnv = getYieldForCrop(crop, envFact);
    let revPerCrop = yieldForCropWithEnv; //* corn.salesPrice * numCrops;
    // // console.log("36 CostForCrop ", revPerCrop * crop.crop.costPerPlant);
    if (typeof crop === "object" || crop.isArray) {
      const costPerCrop = revPerCrop * crop.crop.costPerPlant;
      return costPerCrop;
    } else {
      const costPerCrop = revPerCrop * crop.costPerPlant;
      console.log("40 ", costPerCrop, crop.yield, crop.costPerPlant);
      return costPerCrop;
    }
  }
  const costPerCrop = crop.yield * crop.costPerPlant;
  // // console.log("40 ", costPerCrop, crop.yield, crop.costPerPlant);
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
    console.log("65  ", Number(parseFloat(result).toFixed(2)));
    return Number(parseFloat(result).toFixed(2)); //round(calculatedEnvrionmentFactor, 2);
  } else return crop.yield; // just return the crop yield when no environmental factors play a role.
};

const getYieldForCrop = (crop, envFact) => {
  numCrops = crop.numCrops; // extract numCrops of crop for the calculation
  crop = crop.crop; // dismantel the crop input to just crop info as getYeildForPlant expects
  if (envFact != undefined) {
    let cropYield = getYieldForPlant(crop, envFact); // use yield for crop function for a result as cropYield
    let yieldForCrop = cropYield * numCrops; // calculation of yield of Crop
    // // console.log("69 YieldForCrop ", yieldForCrop);
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

const getRevenueForCrop = (crop, envFact) => {
  // console.log("97 getRevenueForCrop ", crop);
  // // console.log("91 ", envFact);
  if (envFact != undefined) {
    let yieldForCropWithEnv = getYieldForCrop(crop, envFact);
    let revPerCrop = yieldForCropWithEnv; //* corn.salesPrice * numCrops;
    // console.log("102 revenueForCrop ", revPerCrop * crop.crop.salesPrice);
    if (typeof crop === "object" || crop.isArray) {
      const totRevPerCrop = revPerCrop * crop.crop.salesPrice;
      console.log("105 ", totRevPerCrop);
      return totRevPerCrop;
    } else {
      const totRevPerCrop = revPerCrop * crop.salesPrice;
      return totRevPerCrop;
    }
  }
  const revPerCrop = crop.yield * crop.salesPrice;
  // console.log("113 ", revPerCrop);
  return revPerCrop;
};

const getProfitForCrop = (crop, envFact) => {
  // console.log("118 getProfitForCrop ", crop);
  // // console.log("106", envFact);
  const costCrop = getCostsForCrop(crop, envFact);
  const revCrop = getRevenueForCrop(crop, envFact);
  profitCrop = revCrop - costCrop;
  console.log("123 profitCrop ", revCrop, costCrop, profitCrop);
  return profitCrop;
};

const getTotalProfit = (list, envFact) => {
  // console.log("128 ", list, envFact);
  let totalProfit = 0;
  if (list != undefined) {
    listOfCrops = list.crops;
    if (envFact != undefined) {
      for (i = 0; i < listOfCrops.length; i++) {
        console.log("134_", totalProfit);
        totalProfit += getProfitForCrop(listOfCrops[i], envFact);
        console.log("136_ ", listOfCrops[i], totalProfit);
      }
    } else {
      listOfCrops = list;
      // console.log("138 ", list, list.length, envFact);
      for (i = 0; i < list.length; i++) {
        totalProfit += getProfitForCrop(list[i]);
        // console.log("141 ", totalProfit);
      }
    }
    console.log("146 TotalProfit ", Number(totalProfit));
    return Number(totalProfit);
  } else {
    const totalProfit = getProfitForCrop(list, envFact);
    return Number(totalProfit);
  }
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
