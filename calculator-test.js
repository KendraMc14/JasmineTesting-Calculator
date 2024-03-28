it("should return a result that has 2 decimal places", function () {
  const values = {
    amount: 15487,
    years: 7,
    rate: 3.6
  };
  expect(calculateMonthlyPayment(values)).toEqual('208.85');
});

it("should handle very high interest rates", function () {
  const values = {
    amount: 1200,
    years: 38,
    rate: 97
  };
  expect(calculateMonthlyPayment(values)).toEqual('97.00');
});

it("should calculate the monthly rate correctly", function () {
  const values = {
    amount: 11000,
    years: 6,
    rate: 4.9
  };
  expect(calculateMonthlyPayment(values)).toEqual('176.64');
});