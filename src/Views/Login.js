import React, { Component } from 'react';
import MyButton from '../components/Button/MyButton';
import Cookie from 'js-cookie';
import Input from '../components/Atoms/Input/Input';
import loginIcon from '../Assets/Icons/user-3.svg';
import passwordIcon from '../Assets/Icons/locked-4.svg';
import styled from 'styled-components';
import  ButtonIcon  from '../components/Atoms/ButtonIcon/ButtonIcon';
import { endpoints } from '../endpoints';

const StyledWrapper = styled.div`

    background-color: hsl(0, 0%, 15%, 80%);
    margin-left: auto;
    margin-right: auto;
    margin-top: 14vw;
    width: 400px;
    height: 250px;
    border-radius: 10px;
    position: relative;
`;

const StyledInnerWrapper = styled.div`

    padding-top: 50px;
    width: 400px;
    height: 150px;
    display: grid;
    grid-template-columns: 20% auto;
    grid-template-rows: 50% 50%;
   

`;

const StyledButtonIcon = styled(ButtonIcon)`

    filter: invert(57%) sepia(21%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(7%);
    align-self: center;
`;

const StyledButton = styled(MyButton)`

    position: absolute;
    left: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    bottom: 30px;
  
`;

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    handleChange = event => {

        const newValue = event.target.value;
        const fieldName = event.target.name;

        this.setState({ [fieldName]:newValue  })

    };

    handleSubmit = event => {
        event.preventDefault();
        const user = {username: this.state.username, password: this.state.password };
        console.log(this.state.username);
        console.log(this.state.password);
        fetch(endpoints.login,{
            method: "POST",
            body: JSON.stringify(user)
        })
        .then(response => {
            const token = response.headers.get('Authorization');
            console.log(token);
            if(token !== null){
                Cookie.set("jwt", token);
            }
        })
        .catch(error => console.log(error));

    }
                  
    render(){

        return(

           <StyledWrapper>
               <form onSubmit={this.handleSubmit}>
                    <StyledInnerWrapper>
                        <StyledButtonIcon icon={loginIcon}/>
                        <Input 
                            placeholder="username"
                            type="text"
                            name="username"
                            onChange={this.handleChange}
                            required
                        />
                        <StyledButtonIcon icon={passwordIcon}/>
                        <Input 
                            placeholder="password"
                            type="password"
                            name="password"
                            onChange={this.handleChange}
                            required
                        />
                        <StyledButton>  Sign in </StyledButton>
                    </StyledInnerWrapper>
                </form>    
            </StyledWrapper>

        );
    }
}

export default Login;


