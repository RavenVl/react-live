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
                                <input type="number" className="form-control" id="sizetable"/>
                                <label >{this.props.size}</label>
                            </div>
                            <button type="submit"
                                    className="btn btn-primary"
                                    onClick= {this.props.setSize}
                            >Установить</button>
                        </form>
                    </div>
                </div>
            </header>
        )
    }
}
export default Head;