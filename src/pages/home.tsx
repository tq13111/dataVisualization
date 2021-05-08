import React from 'react';
import './home.scss';
import headerBg from '../images/header.png';
import Chart from '../components/Chart';
import {option1, option2, option3, option4, option5, option6} from '../constant/option';

export const Home = () => {
  return (
    <div className="home">
      <header style={{backgroundImage: `url(${headerBg})`}}/>
      <main>
        <section className="section1">
          <div className="border 管辖统计">
            <h2>案发派出所管辖统计</h2>
            <Chart option={option1}/>
          </div>
          <div className="border 破获排名">
            <h2>案件破获排名</h2>
            <Chart option={option2}/>
          </div>
        </section>
        <section className="section2">
          <div className="border 趋势分析">
            <h2>案发趋势分析</h2>
            <Chart option={option3}/>
          </div>
          <div className="border 时段分析">
            <h2>案发时段分析</h2>
            <Chart option={option4}/>
          </div>
        </section>
        <section className="border section3">
          <div className="战果数对比">
            <h2>往年战果树对比</h2>
            <table>
              <thead>
              <tr>
                <th>年份</th>
                <th>破案数</th>
                <th>抓获嫌疑人</th>
                <th>并串案件</th>
                <th>现勘录入</th>
                <th>视侦录入</th>
                <th>合成案件数</th>
                <th>合计</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>2018</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td>8</td>
              </tr>
              <tr>
                <td>2019</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td>8</td>
              </tr>
              <tr>
                <td>2020</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td>8</td>
              </tr>
              </tbody>

            </table>
          </div>
        </section>
        <section className="section4">
          <div className="border 籍贯分布地">
            <h2>兰州市犯罪人员籍贯分布地</h2>
            <Chart option={option5} type='map'/>
            <span>此地图仅显示了中国的部分区域</span>
          </div>
          <div className="border 年龄段分布">
            <h2>兰州市犯罪人员年龄段分布</h2>
            <div className='chartWrapper'>
              <Chart option={option6} />

            </div>
          </div>
        </section>
        <section className="border section5"></section>
      </main>
      <footer>大屏数据平台利用大数据技术采集犯罪作案信息是一套实时监控的数据系统 Copyright.2017兰州市公安局</footer>
    </div>
  );
};
