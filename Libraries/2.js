/*
2. Подключить стороннюю библиотеку для построения графиков. Построить график функции y = f(x): y = 5/x, при x>=1; y = 
x*x – 4*x, при x<1. Шаг варьирования x равен 0.01 и интервал варьирования -5 < x < 5. Расчёт функции y = f(x) реализовать 
в виде отдельной функции.
*/

const drawGraph = (points) => {
    new Chartist.Line('.ct-chart', {
        series: [
            points
        ]
      }, {
        fullWidth: true,
        chartPadding: {
          right: 40
        }
      });
}

const culculatePoints = () => {
    let array = [];
    for (let x = -5.0; x < 5.0; x += 0.01) {
        x<1 ? array.push(x*x-4*x) : 5/x;
        console.log("Расчитал: ", x);
    }
    drawGraph(array);
}

culculatePoints()