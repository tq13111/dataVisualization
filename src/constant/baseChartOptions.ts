const px = (number: number) => number / 2420 * (window as any).pageWidth;

export const baseChartOptions = {
  textStyle: {
    fontSize: px(12),
    color: '#79839E'
  },
  title: {show: false},
  legend: {show: false},
  grid: {
    x: px(50),
    y: px(40),
    x2: px(40),
    y2: px(50),
  },
};
