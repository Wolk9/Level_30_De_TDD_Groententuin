const {
  corn,
  pumpkin,
  getCostsForCrop,
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit
} = require("./farm");

describe("todo's", () => {
  test.todo("getTotalYield");

  test.todo("getProfitForCrop");
  test.todo("getTotalProfit");
});

describe("getCostForCrops, calculate costs per crop", () => {
  test("cost for corn should be 30 ", () => {
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
    expect(getCostsForCrop(corn)).toBe(30);
  });

  test("cost for pumpkin should be 8 ", () => {
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
    expect(getCostsForCrop(pumpkin)).toBe(8);
  });
});

describe("getRevenueForCrop", () => {
  test("revenue for corn should be 60", () => {
    const corn = {
      name: "corn",
      yield: 30,
      salesPrice: 2
    };
    expect(getRevenueForCrop(corn)).toBe(60);
  });
  test("revenue for pumpkin should be 20", () => {
    const pumpkin = {
      name: "pumpkin",
      yield: 4,
      salesPrice: 5
    };
    expect(getRevenueForCrop(pumpkin)).toBe(20);
  });
});

describe("getProfitforCrop", () => {
  test("Profit for corn should be 30", () => {
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
    const result = getProfitForCrop(corn);
    expect(result).toBe(30);
  });
  test("Profit for pumpkin should be 12", () => {
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
    const result = getProfitForCrop(pumpkin);
    expect(result).toBe(12);
  });
});

describe("getYieldForPlant", () => {
  const corn = {
    name: "corn",
    yield: 30
  };

  test("Get yield for plant with no environment factors", () => {
    expect(getYieldForPlant(corn)).toBe(30);
  });
});

describe("getYieldForCrop", () => {
  test("Get yield for crop, simple", () => {
    const corn = {
      name: "corn",
      yield: 3
    };
    const input = {
      crop: corn,
      numCrops: 10
    };
    expect(getYieldForCrop(input)).toBe(30);
  });
});

describe("getTotalYield", () => {
  test("Calculate total yield with multiple crops", () => {
    const corn = {
      name: "corn",
      yield: 3
    };
    const pumpkin = {
      name: "pumpkin",
      yield: 4
    };
    const crops = [
      { crop: corn, numCrops: 5 },
      { crop: pumpkin, numCrops: 2 }
    ];
    expect(getTotalYield({ crops })).toBe(23);
  });

  test("Calculate total yield with 0 amount", () => {
    const corn = {
      name: "corn",
      yield: 3
    };
    const crops = [{ crop: corn, numCrops: 0 }];
    expect(getTotalYield({ crops })).toBe(0);
  });
});
