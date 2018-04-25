import React from 'react';
class Cell extends React.Component{
    render(){
        return (
            <td id={this.props._id} onClick={this.props.setLive}>{this.props.live}</td>
        )
    }
}
export default Cell;