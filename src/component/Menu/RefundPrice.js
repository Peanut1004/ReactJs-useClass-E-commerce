// import React from 'react';

// class RefundPrice extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       itemPrices: [],
//     }
//   }

//   componentDidMount() {
//     let items = [];
//     let prices = ['', 1, 80, 160, 240, 1820, 3400, 4980, ''];
//     for(let i = 0; i < prices.length - 1; i++) {
//       let item = {
//         id: i + 1,
//         start: prices[i],
//         end: prices[i + 1]
//       }
//       items.push(item)
//     }
//     this.setState({itemPrices: items})
//   }

//   render() {
//     return (
//       <div>{this.state.itemPrices.map((el, index) => {
//         if(el.start === '') {
//           return (
//             <li 
//               key={index}
//               onClick={() => this.props.handlePrice(el.start, el.end)}
//             >
//             ≤{el.end}
//             </li>
//           )
//         }
//         else if(el.end === '') {
//           return (
//             <li 
//               key={index}
//               onClick={() => this.props.handlePrice(el.start, el.end)}
//             >
//             ≥{el.start}
//             </li>
//           )
//         }
//         else {
//           return (
//             <li 
//               key={index}
//               onClick={() => this.props.handlePrice(el.start, el.end)}
//             >
//             ${el.start} - {el.end}
//             </li>
//           )
//         }
//       })}</div>
//     )
//   }
// }

// export default RefundPrice