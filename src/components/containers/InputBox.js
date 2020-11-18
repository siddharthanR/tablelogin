import React from 'react';

class InputBox extends React.Component{
    render(){
        return(
                 <input
                    type={this.props.type}
                    name={this.props.name}
                    value={this.props.value}
                    placeholder={this.props.placeholder}
                    onChange={this.props.onChange}
                    required
                />
        )
    }
}

export default InputBox;