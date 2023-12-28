const check = (operationFn) => {
  return function (a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
      throw new Error("Both parameters must be integers");
    }
    return operationFn(a, b);
  };
};

const calculator = {
  sum: check((a, b) => a + b),
  multiply: check((a, b) => a * b),
  divide: check((a, b) => a / b),
  subtract: check((a, b) => a - b),
};

export default calculator;
