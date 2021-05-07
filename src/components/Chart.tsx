import * as  echarts from 'echarts';
import React, {useEffect, useRef} from 'react';
import {EChartsOption} from 'echarts';
import china from '../geo/china.json'

type Props = {
  option: EChartsOption,
  type?: string
}
export default ({option, type}: Props) => {
  const divRef = useRef(null);
  useEffect(() => {
    const myCharts = echarts.init(divRef.current);
    if(type ==='map'){
      // @ts-ignore
      echarts.registerMap('CN', china);
    }
    myCharts.setOption(option as EChartsOption);
  }, []);

  return (
    <div ref={divRef} className="chart"/>
  );
}
