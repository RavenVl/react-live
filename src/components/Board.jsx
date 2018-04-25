import React from 'react';

class Board extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    This is some text within a card body.
                    <table>
                        <tbody>
                        <tr>
                            {this.props.table.map((elem, key) => {
                                return <td key={key}>{elem}</td>
                            })}
                        </tr>
                        </tbody>


                    </table>

                </div>
            </div>
        )
    }
}

export default Board;