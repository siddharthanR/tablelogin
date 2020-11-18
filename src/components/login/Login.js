import React from 'react';
import InputBox from '../containers/InputBox'
import Button from '../containers/Button'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as Action from '../../actions/Action'
import Label from '../containers/Label'
import Row from 'react-bootstrap/Row'

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:'',
        }
    }
    
    handleSubmit = () => {
        this.props.loginAction({username: this.state.username, password:this.state.password});
        this.setState({
            username:'',
            password:'',
        })
    }

    onChange = (e) => {
        this.setState({
                [e.target.name] : e.target.value
            })
        }

    render(){
        return(
            <div className="container">
                <Row>
                    <Label label={"UserName"}/>
                    <InputBox
                        type="text"
                        name="username"
                        value={this.state.username}
                        placeholder="Enter username"
                        onChange={this.onChange}
                    />
                </Row>
                <Row>
                    <Label label={"PassWord"}/>
                    <InputBox
                        type="password"
                        name="password"
                        value={this.state.password}
                        placeholder="Enter password"
                        onChange={this.onChange}
                    />
                </Row>
                <Row>
                    <Button
                        type="submit"
                        name="LOGIN"
                        value="LOGIN"
                        onClick={this.handleSubmit}
                    />
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
      state
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(Object.assign({}, Action), dispatch)
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Login)