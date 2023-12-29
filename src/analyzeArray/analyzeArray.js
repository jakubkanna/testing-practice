const createObjectToAnalyze = (array) => {
  const calculateAverage = () => {
    const sum = array.reduce((acc, num) => acc + num, 0);
    return sum / array.length;
  };

  return {
    array,
    get average() {
      return calculateAverage();
    },
    get min() {
      return Math.min(...array);
    },
    get max() {
      return Math.max(...array);
    },
    get data() {
      return {
        average: this.average,
        min: this.min,
        max: this.max,
        length: array.length,
      };
    },
  };
};

export default analyzeArray = (array) => {
  const object = createObjectToAnalyze(array);
  return object.data;
};
