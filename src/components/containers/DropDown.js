import React from 'react';
import Label from './Label'

class Button extends React.Component{
    render(){
        return(
                <React.Fragment>
                    <Label label={"Choose the options"} />
                        <select value={this.props.value} id={this.props.id} onChange={this.props.onChange}>
                            <option value="table">Table</option>
                            <option value="bar">Bar</option>
                            <option value="pie">Pie</option>
                            <option value="area">Area</option>
                        </select>
                </React.Fragment>
        )
    }
}

export default Button;