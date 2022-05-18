// import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers';
// import React from 'react';

// class RefundTitle extends React.Component {
//   constructor(props) {
//     super(props)
//     this.handleToggle = this.handleToggle.bind(this);
//     this.handleToggleSub = this.handleToggleSub.bind(this);
//   }

//   handleToggle(title, id) {
//     let index = this.props.types.findIndex(x => x.id === id);
//     if(index !== -1) {
      
//       this.props.handleTitle(title);
//       this.props.handleIdTitle(id);
      
//     }
//   }

//   handleToggleSub(title, id, typeMain) {
//     let index = typeMain.subs.findIndex(x => x.id === id);
//     if(index !== -1) {
//       this.props.handleType(title);
//       this.props.handleIdType(id);
//     }
    
//   }

//   render() {
//     return (
//       <div className='refund-title'>
//         <ul>
//           {this.props.types.map((type, index) => (
//             <li 
//             key={index}
//             className={type.id === this.props.valueIdTitle ? 'active' : ''}
//             onClick={() => this.handleToggle(type.title, type.id)}
//             >
//               <a>{type.title}</a>
//               <ul style={{display: this.props.valueTitle.includes(type.title) ? 'block' : 'none'}}>
//                 {type.subs.map(sub => (
//                   <li key={sub.id}>
//                     <div>{sub.title}</div>
//                     <div onClick={() => this.handleToggleSub(sub.type, sub.id, type)}>{sub.type}</div>
//                   </li>
//                 ))}
//               </ul>
//             </li>
            
//           ))}
          
//         </ul>
//       </div>
//     )
//   }
// }

// export default RefundTitle