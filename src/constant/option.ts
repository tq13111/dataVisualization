import {baseChartOptions} from './baseChartOptions';
import {createEchartsOptions} from '../shared/create-echarts-options';
import px from '../shared/px';
import * as  echarts from 'echarts';

const colors1 = {'青海省': '#BB31F7', '甘肃省': '#ddf66a', '四川省': '#06E1EE'};
const colors2 = ['#F46064', '#F38E1C', '#1CDB7C', '#8D70F8', '#33A4FA'];

export const option1 = createEchartsOptions({
  ...baseChartOptions,
  xAxis: {
    data: ['城关区', '七里河区', '西固区', '安宁区', '红谷区', '永登区', '嘷岚区', '渝中区', '兰州新区'],
    axisTick: {show: false},
    axisLabel: {
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
  yAxis: {
    splitLine: {show: false},
    splitNumber: 10
  },
  series: [{
    name: '销量',
    type: 'bar',
    data: [40, 30, 25, 15, 20, 10, 15, 30, 35]
  }]
});
export const option2 = createEchartsOptions({
  ...baseChartOptions,
  grid: {
    x: px(70),
    y: px(40),
    x2: px(50),
    y2: px(60),
  },
  legend: {
    right: px(15),
    bottom: px(15),
    textStyle: {color: '#79839E'},
    itemWidth: px(40),
    itemHeight: px(20),
  },
  xAxis: {
    show: false
  },
  yAxis: {
    type: 'category',
    axisTick: {show: false},
    data: ['城关区公安局', '七里河区公安局', '西固区公安局', '安宁区公安局', '红谷区公安局', '永登区公安局', '嘷岚区公安局', '渝中区公安局', '兰州新区公安局'],
    axisLabel: {
      formatter(val) {
        return val.replace('公安局', '\n公安局');
      }
    },
  },
  series: [
    {
      name: '一队',
      type: 'bar',
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            offset: 0,
            color: '#2034f9'
          }, {
            offset: 1,
            color: '#04a1ff'
          }
          ]),
          showColor: 'rgba(0,0,0,0.4)',
          shadowBlur: 20
        }
      },
      data: [664, 784, 642, 439, 328, 942, 489, 656, 486]
    },
    {
      name: '二队',
      type: 'bar',
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            offset: 0,
            color: '#b92ae8'
          }, {
            offset: 1,
            color: '#6773e7'
          }
          ])
        }
      },
      data: [600, 700, 500, 300, 555, 775, 516, 994, 446]
    }
  ]
});
export const option3 = createEchartsOptions({
    legend: {
      bottom: px(10),
      textStyle: {color: '#79839E'},
      itemWidth: px(30),
      itemHeight: px(16)
    },
    grid: {
      x: px(20),
      x2: px(20),
      y: px(20),
      y2: px(70),
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
      splitLine: {show: true, lineStyle: {color: '#073E78'}},
      axisTick: {show: false},
      axisLine: {show: false},
    },
    yAxis: {
      type: 'value',
      splitLine: {lineStyle: {color: '#073E78'}},
      axisLabel: {
        formatter(val) {
          return val / 100 + '%';
        }
      }
    },
    series: [
      {
        name: '抢劫',
        type: 'line',
        data: [1, 5, 7, 5, 3, 5, 2, 6, 3]
      },
      {
        name: '醉驾',
        type: 'line',
        data: [4, 5, 7, 3, 2, 1, 4, 5, 2]
      },
      {
        name: '盗窃',
        type: 'line',
        data: [10, 7, 9, 6, 5, 7, 3, 6, 1]
      },
      {
        name: '故意杀人',
        type: 'line',
        data: [11, 8, 1, 3, 10, 9, 8, 3, 2]
      },
      {
        name: '故意伤人',
        type: 'line',
        data: [8, 6, 7, 8, 9, 10, 11, 5, 1]
      }
    ].map(obj => ({
      ...obj,
      symbol: 'circle',
      symbolSize: px(12),
      lineStyle: {width: px(2)}
    }))
  }
);
export const option4 = createEchartsOptions({
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
      splitLine: {show: true, lineStyle: {color: '#073E78'}},
      axisTick: {show: false},
      axisLine: {show: false},
    },
    yAxis: {
      type: 'value',
      splitLine: {lineStyle: {color: '#073E78'}},
      axisLabel: {
        formatter(val) {
          return val * 100 + '%';
        }
      }
    },
    series: [{
      name: '故意伤人',
      type: 'line',
      data: [
        0.15, 0.13, 0.11,
        0.13, 0.14, 0.15,
        0.16, 0.18, 0.21,
        0.19, 0.17, 0.16,
        0.15
      ],
      symbol: 'circle',
      symbolSize: px(12),
      lineStyle: {width: px(2)},
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: '#414a9f'
        }, {
          offset: 1,
          color: '#1b1d52'
        }]),
      }
    }]
  }
);
export const option5 = createEchartsOptions({
    xAxis: {show: false},
    yAxis: {show: false},
    legend: {
      data: ['甘肃省', '四川省', '青海省'],
      top: px(15),
      textStyle: {color: '#79839E'},
      itemWidth: px(40),
      itemHeight: px(20),
    },
    series: [
      {
        name: '甘肃省',
        type: 'map',
        mapType: 'CN', // 自定义扩展图表类型
        data: [
          {name: '甘肃省', value: 1},
        ],
        label: {show: false, color: 'white'},
        itemStyle: {
          areaColor: '#010D3D',
          color: colors1['甘肃省'],
          borderColor: '#01A7F7',
          emphasis: {
            label: {color: 'white'},
            areaColor: '#5470C6',
          },
        }
      },
      {
        name: '四川省',
        type: 'map',
        mapType: 'CN', // 自定义扩展图表类型
        data: [
          {name: '四川省', value: 100},
        ],
        itemStyle: {
          areaColor: '#010D3D',
          color: colors1['四川省'],
          borderColor: '#01A7F7',
          emphasis: {
            label: {color: 'white'},
            areaColor: '#5470C6',
          },
        }
      },
      {
        name: '青海省',
        type: 'map',
        mapType: 'CN', // 自定义扩展图表类型
        data: [
          {name: '青海省', value: 100},
        ],
        itemStyle: {
          areaColor: '#010D3D',
          color: colors1['青海省'],
          borderColor: '#01A7F7',
          emphasis: {
            label: {color: 'white'},
            areaColor: '#5470C6',
          },
        }
      },
    ]
  }
);
export const option6 = createEchartsOptions({
    color: ['#8D70F8', '#33A4FA'],
    xAxis: {show: false},
    yAxis: {show: false},
    legend: {
      data: ['男', '女'],
      bottom: px(10),
      textStyle: {color: '#79839E'},
      itemWidth: px(18),
      itemHeight: px(10),

    },
    title: {
      text: '性别',
      left: 'center',
      top: 'center',
      textStyle: {
        fontSize:px(32),
        color: '#2cb4fc',
        textBorderColor: '#294773',
        textBorderWidth: px(5)
      }
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['60%', '75%'],
        avoidLabelOverlap: false,
        label: {
          show: true, position: 'inside', textStyle: {color: 'white', fontSize: px(20)},
          formatter(options) {
            return options.value * 100 + '%';
          }
        },
        labelLine: {show: false},
        itemStyle: {
          borderColor: '#0F113A',
          borderWidth: px(4)
        },
        data: [
          {value: 0.2, name: '女'},
          {value: 0.8, name: '男'},
        ]
      }
    ]
  }
);
export const option7 = createEchartsOptions({
    color: ['#8D70F8', '#33A4FA', '#ff7261', '#fd9011', '#0cc17a', '#206691'],
    xAxis: {show: false},
    yAxis: {show: false},
    legend: {
      bottom: 'bottom',
      textStyle: {color: '#79839E'},
      itemWidth: px(18),
      itemHeight: px(10),
      itemGap:px(10)
    },
    title: {
      text: '年龄段',
      left: 'center',
      top: 'center',
      textStyle: {
        fontSize:px(32),
        color: '#2cb4fc',
        textBorderColor: '#294773',
        textBorderWidth: px(5)
      }
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['60%', '75%'],
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: 'inside',
          textStyle: {
            color: 'white',
            fontSize: px(20)
          },
          formatter(options) {
            return (options.value * 100).toFixed() + '%';
          }
        },
        labelLine: {show: false},
        itemStyle: {
          borderColor: '#0F113A',
          borderWidth: px(4)
        },
        data: [
          {value: 0.1, name: '20-25岁'},
          {value: 0.2, name: '25-30岁'},
          {value: 0.25, name: '30-35岁'},
          {value: 0.15, name: '35-40岁'},
          {value: 0.13, name: '40-45岁'},
          {value: 0.17, name: '45-50岁'},
        ]
      }
    ]
  }
);
export const option8 = createEchartsOptions({
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [20, 25, 30, 35, 40, 45, 50],
      splitLine: {show: true, lineStyle: {color: '#073E78'}},
      axisTick: {show: false},
      axisLine: {show: false},
    },
    yAxis: {
      type: 'value',
      splitLine: {lineStyle: {color: '#073E78'}},
      axisLabel: {
        formatter(val) {
          return val * 100 + '%';
        }
      }
    },
    title: {
      text: '犯罪年龄趋势图',
      left: 'center',
      top: px(-5),
      textStyle: {
        fontSize: px(20),
        color: '#68a0c9'
      }
    },
    series: [{
      name: '犯罪年龄趋势图',
      type: 'line',
      data: [
        0.1, 0.2, 0.25,
        0.15, 0.13, 0.17,
        0.2
      ],
      itemStyle: {
        color: '#F7A110',
      },
      symbol: 'circle',
      symbolSize: px(12),
      lineStyle: {width: px(2)},
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: '#F7A110'
        }, {
          offset: 1,
          color: '#1B1D52'
        }]),
      }
    }]
  }
);
export const option9 = createEchartsOptions({
    xAxis: {
      data: ['入室抢劫', '当街偷盗', '团伙诈骗', '刑事案件', '民事案件'],
      axisTick: {show: false},
      axisLine: {
        lineStyle: {color: '#083B70'}
      },
      axisLabel: {
        formatter(val) {
          if (val.length > 2) {
            const array = val.split('');
            array.splice(2, 0, '\n');
            return array.join('');
          } else {
            return val;
          }
        }
      },
    },
    yAxis: {
      splitLine: {show: false},
      splitNumber: 10,
      axisLine: {
        show: true,
        lineStyle: {color: '#083B70'}
      }
    },
    series: [{
      type: 'bar',
      data: [40, 22, 20, 18, 32],
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#0A97FB'
      }, {
        offset: 1,
        color: '#1E34FA'
      }]),
    }]
  }
);
export const option10 = createEchartsOptions({
    color: colors2,
    xAxis: {show: false},
    yAxis: {show: false},
    legend: {
      bottom: px(0),
      textStyle: {color: '#79839E'},
      itemWidth: px(18),
      itemHeight: px(10),
      itemGap:px(10)
    },
    series: [
      {
        startAngle: -20,
        type: 'pie',
        radius: ['15%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: true, position: 'outside', textStyle: {color: 'white', fontSize: px(20)},
          distanceToLabelLine: 0,
          formatter(options) {
            return options.value * 100 + '%';
          }
        },
        labelLine: {show: true, length: 0, smooth: true},

        roseType: 'area',
        itemStyle: {
          shadowBlur: px(200),
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        },
        data: [
          {value: 0.36, name: '刑事案件'},
          {value: 0.20, name: '民事案件'},
          {value: 0.18, name: '经济案件'},
          {value: 0.24, name: '其他案件'},
        ]
      }
    ]
  }
);
const data = [
  {value: 0.08, name: '东岗路'},
  {value: 0.12, name: '段家滩'},
  {value: 0.11, name: '雁北'},
  {value: 0.09, name: '五泉山'},
  {value: 0.12, name: '中山路'},
  {value: 0.14, name: '庆阳路'},
  {value: 0.08, name: '武都路'},
  {value: 0.18, name: '酒泉路'},
  {value: 0.08, name: '天水路'},
];
export const option11 = createEchartsOptions({
    xAxis: {show: false},
    yAxis: {show: false},
    grid: {x: 0, x2: 0, y: 0, y2: 0, containLabel: true},
    legend: {
      orient: 'vertical',
      left: 'left',
      top: 'bottom',
      textStyle: {color: '#79839E',fontSize:px(14)},
      itemWidth: px(10),
      itemHeight: px(10),
      itemGap:px(16),
      formatter(name) {
        const value = (data.find(i => i.name === name)?.value * 100).toFixed() + '%';
        return name + ' ' + value;
      }
    },
    series: [
      {
        center: ['60%', '50%'],
        type: 'pie',
        radius: '70%',
        label: {show: false},
        labelLine: {show: false},
        data:  [
          {value: 0.08, name: '东岗路'},
          {value: 0.06, name: '段家滩'},
          {value: 0.11, name: '雁北'},
          {value: 0.09, name: '五泉山'},
          {value: 0.12, name: '中山路'},
          {value: 0.06, name: '庆阳路'},
          {value: 0.08, name: '武都路'},
          {value: 0.08, name: '酒泉路'},
          {value: 0.08, name: '天水路'},
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
);
export const option12 = createEchartsOptions({
    xAxis: {
      data: data.map(i => i.name),
      axisTick: {show: false},
      axisLine: {
        lineStyle: {color: '#083B70'}
      },
      axisLabel: {
        formatter(val) {
          if (val.length > 2) {
            const array = val.split('');
            array.splice(2, 0, '\n');
            return array.join('');
          } else {
            return val;
          }
        }
      },
    },
    yAxis: {
      splitLine: {show: false},
      axisLine: {
        show: true,
        lineStyle: {color: '#083B70'}
      },
      axisLabel: {
        formatter(value) {
          return (value * 100).toFixed(0) ;
        }
      }
    },
    series: [{
      type: 'bar',
      data: data.map(i => i.value),
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#0A97FB'
      }, {
        offset: 1,
        color: '#1E34FA'
      }]),
    }]
  }
);

