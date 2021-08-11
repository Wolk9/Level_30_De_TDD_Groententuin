const corn = {
  name: "corn",
  yield: 30,
  factors: {
    sun: {
      low: -50,
      medium: 0,
      high: 50
    }
  },
  costPerPlant: 1,
  salesPrice: 2
};

const pumpkin = {
  name: "pumpkin",
  yield: 4,
  factors: {
    sun: {
      low: -50,
      medium: 0,
      high: 50
    }
  },
  costPerPlant: 2,
  salesPrice: 5
};

const environmentFactors = {
  sun: "low"
};

const getCostsForCrop = (crop) => {
  const costPerCrop = crop.yield * crop.costPerPlant;
  console.log(crop.name, costPerCrop);
  return costPerCrop;
};

const getYieldForPlant = () => {};

const getYieldForCrop = () => {};

const getTotalYield = () => {};

const getRevenueForCrop = (crop) => {
  const revPerCrop = crop.yield * crop.salesPrice;
  console.log(crop.name, revPerCrop);
  return revPerCrop;
};

const getProfitForCrop = (crop) => {
  const costCrop = getCostsForCrop(crop);
  const revCrop = getRevenueForCrop(crop);
  profitCrop = revCrop - costCrop;
  console.log(crop.name, profitCrop);
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
