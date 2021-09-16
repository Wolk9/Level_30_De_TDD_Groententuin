const getCostsForCrop = (crop, envFact) => {
  if (envFact != undefined) {
    // if environment factors are not applicable, they should not be processed.
    let yieldForCropWithEnv = getYieldForCrop(crop, envFact);
    let revPerCrop = yieldForCropWithEnv; //* corn.salesPrice * numCrops;
    if (typeof crop.crop === "object") {
      // the input can be 1 crop or more. If it are more crops, the input is a cascaded object and therefor it should be tested if the cascaded or the non-cascaded object should be read
      const costPerCrop = revPerCrop * crop.crop.costPerPlant;
      return costPerCrop;
    } else {
      const costPerCrop = revPerCrop * crop.costPerPlant;
      return costPerCrop;
    }
  }
  if (typeof crop.crop === "object") {
    // the input can be 1 crop or more. If it are more crops, the input is a cascaded object and therefor it should be tested if the cascaded or the non-cascaded object should be read
    const costPerCrop = crop.crop.yield * crop.crop.costPerPlant;
    return costPerCrop;
  } else {
    const costPerCrop = crop.yield * crop.costPerPlant;
    return costPerCrop;
  }
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
    // if environment factors are not applicable, they should not be processed.
    let cropYield = getYieldForPlant(crop, envFact); // use yield for crop function for a result as cropYield
    let yieldForCrop = cropYield * numCrops; // calculation of yield of Crop
    return yieldForCrop; // the calculated result
  } else return crop.yield * numCrops;
};

const getTotalYield = (list, envFact) => {
  listOfCrops = list.crops; // as a Total Yield is a list, it needs to be enumerated to process
  let totalYield = 0;
  if (envFact != undefined) {
    // if environment factors are not appilcable, they should not be processed.
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
  if (envFact != undefined) {
    // if environment factors are not applicable, they should not be processed.
    let yieldForCropWithEnv = getYieldForCrop(crop, envFact);
    let revPerCrop = yieldForCropWithEnv; //* corn.salesPrice * numCrops;
    if (typeof crop.crop === "object") {
      // the input can be 1 crop or more. If it are more crops, the input is a cascaded object and therefor it should be tested if the cascaded or the non-cascaded object should be read
      const totRevPerCrop = revPerCrop * crop.crop.salesPrice;
      return totRevPerCrop;
    } else {
      const totRevPerCrop = revPerCrop * crop.salesPrice;
      return totRevPerCrop;
    }
  }
  if (typeof crop.crop === "object") {
    // the input can be 1 crop or more. If it are more crops, the input is a cascaded object and therefor it should be tested if the cascaded or the non-cascaded object should be read
    const totRevPerCrop = crop.crop.yield * crop.crop.salesPrice;
    return totRevPerCrop;
  } else {
    const totRevPerCrop = crop.yield * crop.salesPrice;
    return totRevPerCrop;
  }
};

const getProfitForCrop = (crop, envFact) => {
  const costCrop = getCostsForCrop(crop, envFact); // calculate the costs
  const revCrop = getRevenueForCrop(crop, envFact); // calculate the revenue
  profitCrop = revCrop - costCrop;
  return profitCrop;
};

const getTotalProfit = (list, envFact) => {
  let totalProfit = 0;
  if (list != undefined) {
    // process it as a list or not. if so enumeration is nescessary
    listOfCrops = list.crops;
    if (envFact != undefined) {
      // if environment factors are not applicable, they should not be processed.
      for (i = 0; i < listOfCrops.length; i++) {
        totalProfit += getProfitForCrop(listOfCrops[i], envFact);
      }
    } else {
      listOfCrops = list;
      for (i = 0; i < list.length; i++) {
        totalProfit += getProfitForCrop(list[i]);
      }
    }
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
