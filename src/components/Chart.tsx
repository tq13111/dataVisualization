import * as  echarts from 'echarts';
import React, {useEffect, useImperativeHandle, useRef} from 'react';
import {EChartsOption} from 'echarts';
import china from '../geo/china.json';

type Props = {
  option: EChartsOption,
  type?: string,
  cRef?: any
}
export default ({cRef, option, type}: Props) => {
  const divRef = useRef(null);
  const myCharts = useRef(null);
  useImperativeHandle(cRef, () => ({
    // setOption 就是暴露给父组件的方法
    setOption: (newVal) => {
      myCharts.current.setOption(newVal);
    }
  }));

  useEffect(() => {
    myCharts.current = echarts.init(divRef.current);
    if (type === 'map') {
      // @ts-ignore
      echarts.registerMap('CN', china);
    }
    myCharts.current.setOption(option as EChartsOption);
  }, []);

  return (
    <div ref={divRef} className="chart"/>
  );
}
