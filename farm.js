const corn = {
  name: "corn",
  yield: 30,
  factors: {
    sun: {
      low: -50,
      medium: 0,
      high: 50
    }
  }
};

const environmentFactors = {
  sun: "low"
};

const getCostsForCrop = () => {};

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
