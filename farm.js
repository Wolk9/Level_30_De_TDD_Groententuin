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
  console.log(costPerCrop);
  return costPerCrop;
};

const getYieldForPlant = () => {};

const getYieldForCrop = () => {};

const getTotalYield = () => {};

const getRevenueForCrop = () => {};

const getProfitForCrop = () => {};

const getTotalProfit = () => {};

module.exports = {
  getCostsForCrop,
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit
};
