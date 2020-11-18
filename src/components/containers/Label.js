import React from 'react';

class Button extends React.Component{
    render(){
        return(
                <label>
                    {this.props.label}
                </label>
        )
    }
}

export default Button;