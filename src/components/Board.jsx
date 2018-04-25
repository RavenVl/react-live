import React from 'react';
import CellContainer from '../container/CellContainer';
class Board extends React.Component {

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    This is some text within a card body.
                    <table>
                        <tbody>

                            {this.props.table.map((elem, key) => {
                                return (
                                    <tr key={key}>
                                        {elem.map((cell, key1)=>{
                                            return (
                                                <CellContainer key={key1} live={cell} _id={`${key}${key1}`}/>
                                            )
                                        })}
                                    </tr>
                                )
                            })}

                        </tbody>


                    </table>

                </div>
            </div>
        )
    }
}

export default Board;