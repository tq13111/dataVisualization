import React from 'react';
import './home.scss';
import headerBg from '../images/header.png';
import Chart from '../components/Chart';
import {
  option1,
  option10, option11, option12,
  option2,
  option3,
  option4,
  option5,
  option6,
  option7,
  option8,
  option9
} from '../constant/option';

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
            <h2>往年战果数对比</h2>
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
              <Chart option={option6}/>
              <Chart option={option7}/>
              <Chart option={option8}/>
            </div>
          </div>
        </section>
        <section className="section5">
          <div className="border 类型统计">
            <h2>兰州市案发类型统计</h2>
            <div className='chartWrapper'>
              <Chart option={option9}/>
              <Chart option={option10}/>
            </div>
          </div>
          <div className="border 街道统计">
            <h2>兰州市犯案发街道统计</h2>
            <div className='chartWrapper'>
              <Chart option={option11}/>
              <Chart option={option12}/>

            </div>
          </div>
          <div className="border 手段分析">
            <h2>作案手段分析</h2>
            <table>
              <thead>
              <tr>
                <th colSpan={2}>类型</th>
                <th>单数</th>
                <th>总计</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td rowSpan={4}>入室盗窃</td>
                <td>翻窗入室</td>
                <td>10</td>
                <td rowSpan={4}>80</td>
              </tr>
              <tr>
                <td>撬锁入室</td>
                <td>20</td>
              </tr>
              <tr>
                <td>技术开锁</td>
                <td>20</td>
              </tr>
              <tr>
                <td>撬防护栏</td>
                <td>30</td>
              </tr>
              <tr>
                <td rowSpan={2}>抢夺</td>
                <td>摩托车飞车抢夺</td>
                <td>22</td>
                <td rowSpan={2}>44</td>
              </tr>
              <tr>
                <td>徒手抢夺</td>
                <td>22</td>
              </tr>
              <tr>
                <td rowSpan={3}>扒窃</td>
                <td>公交车扒窃</td>
                <td>40</td>
                <td rowSpan={3}>68</td>
              </tr>
              <tr>
                <td>车站扒窃</td>
                <td>22</td>
              </tr>
              <tr>
                <td>街面扒窃</td>
                <td>45</td>
              </tr>
              <tr>
                <td rowSpan={2}>诈骗</td>
                <td>甩票子诈骗</td>
                <td>22</td>
                <td rowSpan={2}>102</td>
              </tr>
              <tr>
                <td>买手机诈骗</td>
                <td>80</td>
              </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <footer>大屏数据平台利用大数据技术采集犯罪作案信息是一套实时监控的数据系统 Copyright.2017兰州市公安局</footer>
    </div>
  );
};
