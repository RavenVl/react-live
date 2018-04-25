import React from 'react';
import Cell from './Cell';
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
                                                <Cell key={key1} live={cell}/>
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