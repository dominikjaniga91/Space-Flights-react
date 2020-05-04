import React, { Component } from 'react';
import MyButton from 'components/Atoms/Button/MyButton';
import Cookie from 'js-cookie';
import Input from 'components/Atoms/Input/Input';
import loginIcon from 'Assets/Icons/user-3.svg';
import passwordIcon from 'Assets/Icons/locked-4.svg';
import styled from 'styled-components';
import  ButtonIcon  from 'components/Atoms/ButtonIcon/ButtonIcon';
import { endpoints } from 'endpoints';
import ErrorMessage from 'components/Atoms/ErrorMessage/ErrorMessage';
import { Redirect } from "react-router-dom";
import { routes } from 'routes';

const StyledWrapper = styled.div`

    background-color: hsl(0, 0%, 15%, 80%);
    margin-left: auto;
    margin-right: auto;
    margin-top: 14vw;
    width: 400px;
    height: 300px;
    border-radius: 10px;
    position: relative;
`;

const StyledInnerWrapper = styled.div`

    padding-top: 80px;
    width: 350px;
    height: 180px;
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
    transform: translate(-55%, -50%);
    width: 100px;
    bottom: 40px;
`;

class Login extends Component {

    state = {
        username: '',
        password: '',
        error:'',
        isVisible: false,
        status: false
    }

    handleChange = event => {

        const newValue = event.target.value;
        const fieldName = event.target.name;
        this.setState({ [fieldName]:newValue  });
    };

    handleSubmit = event => {
        event.preventDefault();
        const user = {username: this.state.username, password: this.state.password };
        fetch(endpoints.login,{
            method: "POST",
            body: JSON.stringify(user)
        })
        .then(response => {
            if(response.status === 200){
                
                const token = response.headers.get('Authorization');
                if(token !== null){
                    Cookie.set("jwt", token);

                    Cookie.set("username", this.state.username, { expires: 1 });
                    this.setState({ status: true });
                }
            }else {
                 response.json().then(data => { 
                     this.setState(
                         {error: data.detail, isVisible: true })
                    
                    });
            };  
        })
        .catch(error => console.log(error));

    }
                  
    render(){

        if(this.state.status){
            return <Redirect to={{ pathname: routes.flights }} />
        }else {

            return(
            <StyledWrapper>
                <ErrorMessage isVisible={this.state.isVisible} >{this.state.error}</ErrorMessage>
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
}

export default Login;


