import React from 'react';
class Head extends React.Component{
    render(){
        return (
            <header >
                <div className="card">
                    <div className="card-header">
                        Live in React
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Size table</label>
                                <input type="number" className="form-control" id="sizetable" defaultValue="10"/>
                            </div>
                            <div className="form-group">
                                <button
                                    className="btn btn-primary"
                                    onClick= {this.props.setSize}
                                >Установить</button>
                                <button
                                    className="btn btn-primary ml-2"
                                    onClick= {this.props.start}
                                >Запуск</button>
                            </div>

                        </form>
                    </div>
                </div>
            </header>
        )
    }
}
export default Head;