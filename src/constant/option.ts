const px = (number: number) => number / 2420 * (window as any).pageWidth;

export const option1 = {
  xAxis: {
    data: ['城关区', '七里河区', '西固区', '安宁区', '红谷区', '永登区', '嘷岚区', '渝中区', '兰州新区'],
    axisTick: {show: false},
    axisLabel: {
      fontSize: px(12),
      formatter(value) {
        if (value.length > 2) {
          const array = value.split('');
          array.splice(2, 0, '\n');
          value = array.join('');
        }
        return value;
      }
    },
  },
  textStyle: {
    fontSize: px(16),
    color: '#79839E'
  },
  grid: {
    x: px(40),
    y: px(40),
    x2: px(40),
    y2: px(50),
  },
  yAxis: {
    splitLine: {show: false},
    axisLabel: {
      fontSize: px(12),
    },
    splitNumber: 10
  },
  series: [{
    name: '销量',
    type: 'bar',
    data: [40, 30, 25, 15, 20, 10, 15, 30, 35]
  }]
};
