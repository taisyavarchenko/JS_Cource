

const ArrayLib = {
    getMin: function getMin(array) {
        return Math.min(...array);
    },
    getMax: function getMax(array) {
        return Math.max(...array);
    },
    getAvg: function getAvg(array) {
        const sum = array.reduce((a, b) => a + b, 0);
        const avg = (sum / array.length) || 0;
        return avg;
    },
    getCopy: function getCopy(array) {
        return [...array];
    },
}

export {ArrayLib};