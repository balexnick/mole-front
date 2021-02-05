import { useState } from "react";
import { connect } from "react-redux";
import { browserHistory } from "index";
import PropTypes from "prop-types";
import styled from "styled-components";
import loginImg from "assets/login.png";
import { login } from "actions/login";
import CustomInput from "common/CustomInput";
import CustomButton from "common/CustomButton";
import AuthWindow from "components/auth/AuthWindow";
import { RedirectToPage } from 'common/Styled'

const Login = ({login}) => {
  const [state, setState] = useState({
    email: "",
    password: ""
  })
  const inputHandler = (name, val) => setState({...state, [name]: val});

  const singIn = (e) => {
    e.preventDefault();
    login(state);
  };

  return (
    <AuthWindow name="showWindowLeft" image={loginImg} text="Sign in">
      <form action="" onSubmit={singIn}>
        <CustomInput
          value={state.email}
          placeholder="Email"
          typeInp="email"
          setValue={val => inputHandler('email', val)}
        />
        <CustomInput
          value={state.password}
          placeholder="Password"
          type="password"
          setValue={val => inputHandler('password', val)}
        />
        <Buttons>
          <CustomButton
            text="Sign in"
            style={{borderColor: '#f27059', color: '#f27059'}}
            type='submit' 
          />
          <RedirectToPage onClick={() => browserHistory.push("/signUp")}>
            Sign up
          </RedirectToPage>
        </Buttons>
      </form>
    </AuthWindow>
  )
}

Login.propTypes = {
  login: PropTypes.func.isRequired
};

export default connect(null, { login })(Login);


const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;
