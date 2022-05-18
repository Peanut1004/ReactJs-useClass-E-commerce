import React from 'react';

class RefundTitle extends React.Component {
  constructor(props) {
    super(props)
    this.handleToggle = this.handleToggle.bind(this);
    this.handleToggleSub = this.handleToggleSub.bind(this);
  }

  handleToggle(id, title, subs) {
    this.props.handleIdTitle(id);
    this.props.handleTitle(title);
    this.props.handleType((subs = ''));

  }

  handleToggleSub(id, type) {
    this.props.handleType(type);
    this.props.handleIdType(id);
  }

  render() {
    return (
      <div className='refund-title'>
        <ul>
          {this.props.types.map((type, index) => (
            <li 
            key={index}
            className={type.id === this.props.valueIdTitle ? 'active' : ''}
            onClick={() => this.handleToggle(type.id, type.title, type.subs)}
            >
              <a><i className="fa fa-angle-right"></i> {type.title}</a>
              <ul style={{display: this.props.valueTitle.includes(type.title) ? 'block' : 'none'}}>
                {type.subs.map(sub => (
                  <li key={sub.id}>
                    <div>{sub.title}</div>
                    <div onClick={() => this.handleToggleSub(sub.id, sub.type, type)}>{sub.type}</div>
                </li>
                ))}
              </ul>
            </li>
            
          ))}
          
        </ul>
      </div>
    )
  }
}

export default RefundTitle