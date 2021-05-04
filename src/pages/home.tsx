import React from 'react';
import './home.scss';
import headerBg from '../images/header.png';
import Chart from '../components/Chart';
import {option1} from '../constant/option';

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
        </section>
        <section className="border section2"></section>
        <section className="border section3"></section>
        <section className="border section4"></section>
        <section className="border section5"></section>
      </main>
    </div>
  );
};
