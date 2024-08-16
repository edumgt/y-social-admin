import { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from "apexcharts";
import face4 from "../../../assets/images/faces/4.jpg";
import face15 from "../../../assets/images/faces/15.jpg";
import face11 from "../../../assets/images/faces/11.jpg";
import face5 from "../../../assets/images/faces/5.jpg";
import face12 from "../../../assets/images/faces/12.jpg";
import bitcoin from "../../../assets/images/crypto-currencies/regular/Bitcoin.svg";
import litecoin from "../../../assets/images/crypto-currencies/regular/litecoin.svg";
import dash from "../../../assets/images/crypto-currencies/regular/Dash.svg";
import euro from "../../../assets/images/crypto-currencies/regular/Euro.svg";
import etherium from "../../../assets/images/crypto-currencies/regular/Ethereum.svg";

interface spark3 {
  options?: ApexOptions,
  width?: string | number,
  height?: string | number,
  series?: ApexOptions['series'],
  [key: string]: any
  label?: XAxisAnnotations
  endingShape?: string
}
export class CryptoBTC extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {

      series: [{
        name: 'Value',
        data: [0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
      }],
      options: {
        chart: {
          type: 'line',
          height: 40,
          width: 120,
          sparkline: {
            enabled: true
          },
          events: {
            mounted: (chart: any) => {
              chart.windowResizeHandler();
            }
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: '#000',
            opacity: 0.1
          }
        },
        stroke: {
          show: true,
          curve: 'smooth',
          lineCap: 'butt',
          colors: undefined,
          width: 1.5,
          dashArray: 0,
        },
        fill: {
        },
        yaxis: {
          min: 0,
          show: false,
          axisBorder: {
            show: false
          },
        },
        xaxis: {
          axisBorder: {
            show: false
          },
        },
        colors: ['#26bf94'],
      }

    };
  }

  render() {
    return (

      <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={40} width={120} />

    );
  }
}
//
export class CryptoETH extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {

      series: [{
        name: 'Value',
        data: [0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
      }],
      options: {
        chart: {
          events: {
            mounted: (chart: any) => {
              chart.windowResizeHandler();
            }
          },
          type: 'line',
          height: 40,
          width: 120,
          sparkline: {
            enabled: true
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: '#000',
            opacity: 0.1
          }
        },
        stroke: {
          show: true,
          curve: 'smooth',
          lineCap: 'butt',
          colors: undefined,
          width: 1.5,
          dashArray: 0,
        },
        fill: {
        },

        yaxis: {
          min: 0,
          show: false,
          axisBorder: {
            show: false
          },
        },
        xaxis: {
          axisBorder: {
            show: false
          },
        },
        colors: ['#26bf94'],
      }

    };
  }

  render() {
    return (

      <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={40} width={120} />

    );
  }
}
//
export class CryptoDASH extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {

      series: [{
        name: 'Value',
        data: [0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
      }],
      options: {
        chart: {
          events: {
            mounted: (chart: any) => {
              chart.windowResizeHandler();
            }
          },
          type: 'line',
          height: 40,
          width: 120,
          sparkline: {
            enabled: true
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: '#000',
            opacity: 0.1
          }
        },
        stroke: {
          show: true,
          curve: 'smooth',
          lineCap: 'butt',
          colors: undefined,
          width: 1.5,
          dashArray: 0,
        },
        fill: {

        },
        yaxis: {
          min: 0,
          show: false,
          axisBorder: {
            show: false
          },
        },
        xaxis: {
          axisBorder: {
            show: false
          },
        },
        colors: ['#e6533c'],
      }

    };
  }

  render() {
    return (

      <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={40} width={120} />

    );
  }
}
//
export class CryptoStatistics extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {

      series: [{
        data: [{
          x: new Date(1538778600000),
          y: [6629.81, 6650.5, 6623.04, 6633.33]
        },
        {
          x: new Date(1538780400000),
          y: [6632.01, 6643.59, 6620, 6630.11]
        },
        {
          x: new Date(1538782200000),
          y: [6630.71, 6648.95, 6623.34, 6635.65]
        },
        {
          x: new Date(1538784000000),
          y: [6635.65, 6651, 6629.67, 6638.24]
        },
        {
          x: new Date(1538785800000),
          y: [6638.24, 6640, 6620, 6624.47]
        },
        {
          x: new Date(1538787600000),
          y: [6624.53, 6636.03, 6621.68, 6624.31]
        },
        {
          x: new Date(1538789400000),
          y: [6624.61, 6632.2, 6617, 6626.02]
        },
        {
          x: new Date(1538791200000),
          y: [6627, 6627.62, 6584.22, 6603.02]
        },
        {
          x: new Date(1538793000000),
          y: [6605, 6608.03, 6598.95, 6604.01]
        },
        {
          x: new Date(1538794800000),
          y: [6604.5, 6614.4, 6602.26, 6608.02]
        },
        {
          x: new Date(1538796600000),
          y: [6608.02, 6610.68, 6601.99, 6608.91]
        },
        {
          x: new Date(1538798400000),
          y: [6608.91, 6618.99, 6608.01, 6612]
        },
        {
          x: new Date(1538800200000),
          y: [6612, 6615.13, 6605.09, 6612]
        },
        {
          x: new Date(1538802000000),
          y: [6612, 6624.12, 6608.43, 6622.95]
        },
        {
          x: new Date(1538803800000),
          y: [6623.91, 6623.91, 6615, 6615.67]
        },
        {
          x: new Date(1538805600000),
          y: [6618.69, 6618.74, 6610, 6610.4]
        },
        {
          x: new Date(1538807400000),
          y: [6611, 6622.78, 6610.4, 6614.9]
        },
        {
          x: new Date(1538809200000),
          y: [6614.9, 6626.2, 6613.33, 6623.45]
        },
        {
          x: new Date(1538811000000),
          y: [6623.48, 6627, 6618.38, 6620.35]
        },
        {
          x: new Date(1538812800000),
          y: [6619.43, 6620.35, 6610.05, 6615.53]
        },
        {
          x: new Date(1538814600000),
          y: [6615.53, 6617.93, 6610, 6615.19]
        },
        {
          x: new Date(1538816400000),
          y: [6615.19, 6621.6, 6608.2, 6620]
        },
        {
          x: new Date(1538818200000),
          y: [6619.54, 6625.17, 6614.15, 6620]
        },
        {
          x: new Date(1538820000000),
          y: [6620.33, 6634.15, 6617.24, 6624.61]
        },
        {
          x: new Date(1538821800000),
          y: [6625.95, 6626, 6611.66, 6617.58]
        },
        {
          x: new Date(1538823600000),
          y: [6619, 6625.97, 6595.27, 6598.86]
        },
        {
          x: new Date(1538825400000),
          y: [6598.86, 6598.88, 6570, 6587.16]
        },
        {
          x: new Date(1538827200000),
          y: [6588.86, 6600, 6580, 6593.4]
        },
        {
          x: new Date(1538829000000),
          y: [6593.99, 6598.89, 6585, 6587.81]
        },
        {
          x: new Date(1538830800000),
          y: [6587.81, 6592.73, 6567.14, 6578]
        },
        {
          x: new Date(1538832600000),
          y: [6578.35, 6581.72, 6567.39, 6579]
        },
        {
          x: new Date(1538834400000),
          y: [6579.38, 6580.92, 6566.77, 6575.96]
        },
        {
          x: new Date(1538836200000),
          y: [6575.96, 6589, 6571.77, 6588.92]
        },
        {
          x: new Date(1538838000000),
          y: [6588.92, 6594, 6577.55, 6589.22]
        },
        {
          x: new Date(1538839800000),
          y: [6589.3, 6598.89, 6589.1, 6596.08]
        },
        {
          x: new Date(1538841600000),
          y: [6597.5, 6600, 6588.39, 6596.25]
        },
        {
          x: new Date(1538843400000),
          y: [6598.03, 6600, 6588.73, 6595.97]
        },
        {
          x: new Date(1538845200000),
          y: [6595.97, 6602.01, 6588.17, 6602]
        },
        {
          x: new Date(1538847000000),
          y: [6602, 6607, 6596.51, 6599.95]
        },
        {
          x: new Date(1538848800000),
          y: [6600.63, 6601.21, 6590.39, 6591.02]
        },
        {
          x: new Date(1538850600000),
          y: [6591.02, 6603.08, 6591, 6591]
        },
        {
          x: new Date(1538852400000),
          y: [6591, 6601.32, 6585, 6592]
        },
        {
          x: new Date(1538854200000),
          y: [6593.13, 6596.01, 6590, 6593.34]
        },
        {
          x: new Date(1538856000000),
          y: [6593.34, 6604.76, 6582.63, 6593.86]
        },
        {
          x: new Date(1538857800000),
          y: [6593.86, 6604.28, 6586.57, 6600.01]
        },
        {
          x: new Date(1538859600000),
          y: [6601.81, 6603.21, 6592.78, 6596.25]
        },
        {
          x: new Date(1538861400000),
          y: [6596.25, 6604.2, 6590, 6602.99]
        },
        {
          x: new Date(1538863200000),
          y: [6602.99, 6606, 6584.99, 6587.81]
        },
        {
          x: new Date(1538865000000),
          y: [6587.81, 6595, 6583.27, 6591.96]
        },
        {
          x: new Date(1538866800000),
          y: [6591.97, 6596.07, 6585, 6588.39]
        },
        {
          x: new Date(1538868600000),
          y: [6587.6, 6598.21, 6587.6, 6594.27]
        },
        {
          x: new Date(1538870400000),
          y: [6596.44, 6601, 6590, 6596.55]
        },
        {
          x: new Date(1538872200000),
          y: [6598.91, 6605, 6596.61, 6600.02]
        },
        {
          x: new Date(1538874000000),
          y: [6600.55, 6605, 6589.14, 6593.01]
        },
        {
          x: new Date(1538875800000),
          y: [6593.15, 6605, 6592, 6603.06]
        },
        {
          x: new Date(1538877600000),
          y: [6603.07, 6604.5, 6599.09, 6603.89]
        },
        {
          x: new Date(1538879400000),
          y: [6604.44, 6604.44, 6600, 6603.5]
        },
        {
          x: new Date(1538881200000),
          y: [6603.5, 6603.99, 6597.5, 6603.86]
        },
        {
          x: new Date(1538883000000),
          y: [6603.85, 6605, 6600, 6604.07]
        },
        {
          x: new Date(1538884800000),
          y: [6604.98, 6606, 6604.07, 6606]
        },
        ]
      }],
      options: {
        chart: {
          events: {
            mounted: (chart: any) => {
              chart.windowResizeHandler();
            }
          },
          type: 'candlestick',
          // borderRadius: 20,
          height: 266,
          toolbar: {
            show: false,
          }
        },
        plotOptions: {
          candlestick: {
            colors: {
              upward: "rgb(132, 90, 223)",
              downward: "rgba(132, 90, 223, 0.2)"
            }
          }
        },
        title: {
          align: 'left'
        },
        grid: {
          borderColor: '#f2f6f7',
        },
        xaxis: {
          type: 'datetime',
          axisBorder: {
            show: false,
            color: 'rgba(119, 119, 142, 0.05)',
            offsetX: 0,
            offsetY: 0,
          },
          axisTicks: {
            show: false,
            borderType: 'solid',
            color: 'rgba(119, 119, 142, 0.05)',
            offsetX: 0,
            offsetY: 0
          },
        },
        yaxis: {
          tooltip: {
            enabled: true
          }
        }
      }

    };
  }

  render() {
    return (

      <ReactApexChart options={this.state.options} series={this.state.series} type="candlestick" height={266} />

    );
  }
}
//
export class Cryptobitcoin extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {

      series: [{
        name: 'Value',
        data: [0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
      }],
      options: {
        chart: {
          events: {
            mounted: (chart: any) => {
              chart.windowResizeHandler();
            }
          },
          type: 'line',
          height: 20,
          width: 120,
          sparkline: {
            enabled: true
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: '#000',
            opacity: 0.1
          }
        },
        stroke: {
          show: true,
          curve: 'smooth',
          lineCap: 'butt',
          colors: undefined,
          width: 1.5,
          dashArray: 0,
        },
        fill: {

        },
        tooltip: {
          enabled: false,
        },

        yaxis: {
          min: 0,
          show: false,
          axisBorder: {
            show: false
          },
        },
        xaxis: {
          axisBorder: {
            show: false
          },
        },
        colors: ['#26bf94'],
      }

    };
  }

  render() {
    return (

      <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={20} width={120} />

    );
  }
}
//
export class Cryptoetherium extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {

      series: [{
        name: 'Value',
        data: [0, 45, 54, 38, 56, 24, 65, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46, 31, 37, 39, 62, 51, 35, 41]
      }],
      options: {
        chart: {
          events: {
            mounted: (chart: any) => {
              chart.windowResizeHandler();
            }
          },
          type: 'line',
          height: 20,
          width: 120,
          sparkline: {
            enabled: true
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: '#000',
            opacity: 0.1
          }
        },
        stroke: {
          show: true,
          curve: 'smooth',
          lineCap: 'butt',
          colors: undefined,
          width: 1.5,
          dashArray: 0,
        },
        fill: {
        },
        tooltip: {
          enabled: false,
        },

        yaxis: {
          min: 0,
          show: false,
          axisBorder: {
            show: false
          },
        },
        xaxis: {
          axisBorder: {
            show: false
          },
        },
        colors: ['#e6533c'],
      }

    };
  }

  render() {
    return (

      <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={20} width={120} />

    );
  }
}
//
export class Cryptodash extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {

      series: [{
        name: 'Value',
        data: [61, 27, 54, 43, 19, 46, 31, 37, 39, 0, 45, 54, 38, 56, 24, 65, 35, 27, 93, 53, 62, 51, 35, 41]
      }],
      options: {
        chart: {
          events: {
            mounted: (chart: any) => {
              chart.windowResizeHandler();
            }
          },
          type: 'line',
          height: 20,
          width: 120,
          sparkline: {
            enabled: true
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: '#000',
            opacity: 0.1
          }
        },
        stroke: {
          show: true,
          curve: 'smooth',
          lineCap: 'butt',
          colors: undefined,
          width: 1.5,
          dashArray: 0,
        },
        fill: {

        },
        tooltip: {
          enabled: false,
        },

        yaxis: {
          min: 0,
          show: false,
          axisBorder: {
            show: false
          },
        },
        xaxis: {
          axisBorder: {
            show: false
          },
        },
        colors: ['#26bf94'],
      }

    };
  }

  render() {
    return (

      <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={20} width={120} />

    );
  }
}
//
export class Cryptoripple extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [{
        name: 'Value',
        data: [61, 27, 54, 43, 19, 56, 24, 65, 35, 27, 93, 53, 46, 31, 37, 39, 0, 45, 54, 38, 62, 51, 35, 41]
      }],
      options: {
        chart: {
          events: {
            mounted: (chart: any) => {
              chart.windowResizeHandler();
            }
          },
          type: 'line',
          height: 20,
          width: 120,
          sparkline: {
            enabled: true
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: '#000',
            opacity: 0.1
          }
        },
        stroke: {
          show: true,
          curve: 'smooth',
          lineCap: 'butt',
          colors: undefined,
          width: 1.5,
          dashArray: 0,
        },
        fill: {

        },
        tooltip: {
          enabled: false,
        },
        yaxis: {
          min: 0,
          show: false,
          axisBorder: {
            show: false
          },
        },
        xaxis: {
          axisBorder: {
            show: false
          },
        },
        colors: ['#26bf94'],
      }

    };
  }

  render() {
    return (

      <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={20} width={120} />

    );
  }
}
//
export class Cryptoiota extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [{
        name: 'Value',
        data: [61, 27, 54, 37, 39, 0, 45, 54, 38, 62, 51, 35, 41, 43, 19, 56, 24, 65, 35, 27, 93, 53, 46, 31]
      }],
      options: {
        chart: {
          events: {
            mounted: (chart: any) => {
              chart.windowResizeHandler();
            }
          },
          type: 'line',
          height: 20,
          width: 120,
          sparkline: {
            enabled: true
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: '#000',
            opacity: 0.1
          }
        },
        stroke: {
          show: true,
          curve: 'smooth',
          lineCap: 'butt',
          colors: undefined,
          width: 1.5,
          dashArray: 0,
        },
        fill: {
        },
        tooltip: {
          enabled: false,
        },
        yaxis: {
          min: 0,
          show: false,
          axisBorder: {
            show: false
          },
        },
        xaxis: {
          axisBorder: {
            show: false
          },
        },
        colors: ['#e6533c'],
      }

    };
  }

  render() {
    return (

      <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={20} width={120} />

    );
  }
}
//
export class Cryptoneo extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [{
        name: 'Value',
        data: [62, 51, 35, 41, 43, 19, 56, 24, 65, 35, 27, 93, 53, 46, 31, 61, 27, 54, 37, 39, 0, 45, 54, 38]
      }],
      options: {
        chart: {
          events: {
            mounted: (chart: any) => {
              chart.windowResizeHandler();
            }
          },
          type: 'line',
          height: 20,
          width: 120,
          sparkline: {
            enabled: true
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: '#000',
            opacity: 0.1
          }
        },
        stroke: {
          show: true,
          curve: 'smooth',
          lineCap: 'butt',
          colors: undefined,
          width: 1.5,
          dashArray: 0,
        },
        fill: {

        },
        tooltip: {
          enabled: false,
        },
        yaxis: {
          min: 0,
          show: false,
          axisBorder: {
            show: false
          },
        },
        xaxis: {
          axisBorder: {
            show: false
          },
        },
        colors: ['#e6533c'],
      }

    };
  }

  render() {
    return (

      <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={20} width={120} />

    );
  }
}

interface Recent {
  id: number
  month: string
  day: string
  src1: string
  src2: string
  name: string
  time: string
  status: string
  color: string
  class: string
  text1: string
  text2: string
}
export const Recentactivity: Recent[] = [
  { id: 1, month: 'Dec', day: '15', src1: bitcoin, src2: face4, name: 'Emiley Jackson', time: '04:24PM ', status: 'Delivered Time', color: 'danger', class: 'Sent', text1: 'Bitcoin', text2: '0.0092312' },
  { id: 2, month: 'Dec', day: '24', src1: etherium, src2: face15, name: 'Jackie Shraff', time: '11:57PM', status: 'Received Time', color: 'success', class: 'Received', text1: 'Etherium', text2: '0.9207702' },
  { id: 3, month: 'Dec', day: '15', src1: dash, src2: face11, name: 'Json Taylor', time: '02:28AM', status: 'Received Time', color: 'success', class: 'Received', text1: 'Dash ', text2: '0.83092333' },
  { id: 4, month: 'Nov', day: '30', src1: euro, src2: face5, name: 'Jessica May', time: '10:08AM ', status: 'Sent Time', color: 'info', class: 'Processing', text1: 'Euro', text2: '0.0092363' },
  { id: 5, month: 'Nov', day: '29', src1: litecoin, src2: face12, name: 'Lieonel Marsi', time: '06:05PM', status: 'Received Time', color: 'success', class: 'Received', text1: 'Litecoin', text2: '1.00009023' }
];

export const Selectdata1 = [
  { value: 'BTC', label: 'BTC' },
  { value: 'ETH', label: 'ETH' },
  { value: 'XRP', label: 'XRP' },
  { value: 'DASH', label: 'DASH' },
  { value: 'NEO', label: 'NEO' },
  { value: 'LTC', label: 'LTC' },
  { value: 'BSD', label: 'BSD' }
];
export const Selectdata2 = [
  { value: 'USD', label: 'USD' },
  { value: 'AED', label: 'AED' },
  { value: 'AUD', label: 'AUD' },
  { value: 'ARS', label: 'ARS' },
  { value: 'AZN', label: 'AZN' },
  { value: 'BGN', label: 'BGN' },
  { value: 'BRL', label: 'BRL' }
];
