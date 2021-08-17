const {
  getCostsForCrop,
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit
} = require("./farm");

describe("todo's", () => {
  // test.todo("getRevueForCrop with enviroment");
  test.todo("getProfitForCrop with enviroment");
  test.todo("getTotalProfit with enviroment");
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
  test("revenue for corn should be 960, with environment Sun:high, Wind: Low, Rain: Medium", () => {
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
    const input = {
      crop: corn,
      numCrops: 10
    };
    const environmentFactors = {
      sun: "high",
      wind: "low",
      rain: "medium"
    };
    result =
      (1.6 * 1 * 1).toFixed(2) * corn.yield * corn.salesPrice * input.numCrops; // 960
    expect(getRevenueForCrop(input, environmentFactors)).toBe(result);
  });
  test("revenue for corn should be 192, with environment Sun:medium, Wind: High, Rain: low", () => {
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
    const input = {
      crop: corn,
      numCrops: 10
    };
    const environmentFactors = {
      sun: "high",
      wind: "low",
      rain: "medium"
    };
    result =
      (1 * 0.4 * 0.8).toFixed(2) *
      corn.yield *
      corn.salesPrice *
      input.numCrops; // 192
    expect(getRevenueForCrop(input, environmentFactors)).toBe(result);
  });
  test("revenue for pumpkin should be 1350, with environment Sun:high, Wind: Low, Rain: Medium", () => {
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
    const input = {
      crop: pumpkin,
      numCrops: 50
    };
    const environmentFactors = {
      sun: "low",
      wind: "medium",
      rain: "medium"
    };
    result =
      (1.5 * 0.9 * 1).toFixed(2) *
      pumpkin.yield *
      pumpkin.salesPrice *
      input.numCrops; //1350
    expect(getRevenueForCrop(input, environmentFactors)).toBe(result);
  });
  test("revenue for pumpkin should be 420, with environment Sun:medium, Wind: High, Rain: low", () => {
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
    const input = {
      crop: pumpkin,
      numCrops: 50
    };
    const environmentFactors = {
      sun: "low",
      wind: "medium",
      rain: "medium"
    };
    result =
      (1 * 0.7 * 0.6).toFixed(2) *
      pumpkin.yield *
      pumpkin.salesPrice *
      input.numCrops; // 420
    expect(getRevenueForCrop(input, environmentFactors)).toBe(result);
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

describe("getTotalProfit", () => {
  test("total profit for all crops (corn + pumpkin) should be 42", () => {
    let result = getTotalProfit();
    expect(result).toBe(42);
  });
});

describe("getYieldForPlant", () => {
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

  test("Get yield for plant with no environment factors", () => {
    const environmentFactors = "";
    expect(getYieldForPlant(corn)).toBe(30);
  });

  test("Get yield for corn with low sun, medium wind, low rain factors", () => {
    const environmentFactors = {
      sun: "low",
      wind: "medium",
      rain: "low"
    };
    //const result = 15.120000000000001; //round(resultRaw, 2);
    expect(getYieldForPlant(corn, environmentFactors)).toBeCloseTo(
      30 * 0.9 * 0.7 * 0.8,
      0
    );
  });

  test("Get yield for pumpkin with high sun, low wind, low rain factors", () => {
    const environmentFactors = {
      sun: "high",
      wind: "low",
      rain: "low"
    };
    //const result = 3.5999999999999996; //round(resultRaw, 2);
    expect(getYieldForPlant(pumpkin, environmentFactors)).toBeCloseTo(
      4 * 1.5 * 0.6,
      1
    );
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
  test("Get yield for corn, with environment factors low sun, medium wind, low rain", () => {
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
    const input = {
      crop: corn,
      numCrops: 10
    };
    const environmentFactors = {
      sun: "low",
      wind: "medium",
      rain: "low"
    };
    expect(getYieldForCrop(input, environmentFactors)).toBe(150);
  });
  test("Get yield for pumpkin, with environment factors low sun, medium wind, medium rain", () => {
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
    const input = {
      crop: pumpkin,
      numCrops: 50
    };
    const environmentFactors = {
      sun: "low",
      wind: "medium",
      rain: "medium"
    };
    expect(getYieldForCrop(input, environmentFactors)).toBe(90);
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

  test("Calculate total yield with multiple crops with environment factors, low sun, medium wind, medium rain", () => {
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
    const environmentFactors = {
      sun: "low",
      wind: "medium",
      rain: "medium"
    };
    const crops = [
      { crop: corn, numCrops: 5 },
      { crop: pumpkin, numCrops: 2 }
    ];
    expect(getTotalYield({ crops }, environmentFactors)).toBe(98.1);
  });

  test("Calculate total yield with multiple crops with environment factors sun high, wind medium, rain low", () => {
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
    const environmentFactors = {
      sun: "high",
      wind: "medium",
      rain: "low"
    };
    const crops = [
      { crop: corn, numCrops: 5 },
      { crop: pumpkin, numCrops: 2 }
    ];
    const envFactCorn = (1.6 * 0.7 * 0.8).toFixed(2);
    const envFactPumpkin = (1.5 * 0.9 * 0.6).toFixed(2);
    const result = envFactPumpkin * 4 * 2 + envFactCorn * 30 * 5;
    // ((1.5 * 0.9 * 0.6) * 4 * 2) + ((1.6 * 0.7 * 0.8) * 30 * 5) = 140.88;
    expect(getTotalYield({ crops }, environmentFactors)).toBe(result);
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
