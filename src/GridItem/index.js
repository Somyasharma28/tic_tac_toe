import React from "react";
import './style.css'

export default class GridItem extends React.Component {
  
  constructor(props)
  {
    super(props);
    //this.clickFn = this.clickFn.bind(this); Instead of bind you can use arrow function
    
  }

   clickFn = () =>
    {
    this.props.playerClickCb(this.props.rowId, this.props.colId);
    };

  render()
  {
  return  (<div className="grid-item" onClick={this.clickFn} >{this.props.value}</div>);
  }
}