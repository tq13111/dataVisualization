import * as  echarts from 'echarts';
import React, {useEffect, useRef} from 'react';
import {EChartsOption} from 'echarts';

export default ({option})=>{
  const divRef = useRef(null);
  useEffect(() => {
    const myCharts = echarts.init(divRef.current);
    myCharts.setOption(option as EChartsOption);
  }, []);

  return(
    <div ref={divRef} className="chart"/>
  )
}
