import React from "react";
import GridItem from '../GridItem';
import './style.css';


export default class GridRow extends React.Component {

    constructor(props)
    {
        super(props);
    }

    render()
    {
        return ( <div className="grid-row">{
            this.props.row.map((boardCell, colIndex) => (
                <GridItem 
                key = {colIndex}
                value={boardCell} 
                colId={colIndex} 
                 rowId={this.props.rowId} 
                 playerClickCb={this.props.playerClickCb} 
                 />
            ))
        }
        </div>);
    }
}