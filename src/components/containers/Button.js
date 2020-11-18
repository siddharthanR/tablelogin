import React from 'react';

class Button extends React.Component{
    render(){
        return(
                <input
                    type={this.props.type}
                    name={this.props.name}
                    value={this.props.value}
                    placeholder={this.props.placeholder}
                    onClick={this.props.onClick}
                />
        )
    }
}

export default Button;