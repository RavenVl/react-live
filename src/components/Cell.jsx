import React from 'react';
class Cell extends React.Component{
    render(){
        return (
            <td>{this.props.live}</td>
        )
    }
}
export default Cell;