import { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import registerImg from 'assets/register.png';
import { register } from 'actions/register';
import CustomInput from 'common/CustomInput';
import CustomButton from 'common/CustomButton';
import AuthWindow from 'components/auth/AuthWindow';
import { RedirectToPage } from 'common/Styled/index'
import { browserHistory } from 'index';

const Register = ({register}) => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: ""
  });

  const signUp = (e) => {
    e.preventDefault();
    register(state);
  };

  const inputHandler = (name, val) => setState({...state, [name]: val});

  return (
    <AuthWindow name="showWindowRight" image={registerImg} text="Sign Up">
      <form action="" onSubmit={signUp}>
        <CustomInput
          value={state.name}
          placeholder="Name"
          type="text"
          setValue={val => inputHandler('name', val)}
        />
        <CustomInput
          value={state.email}
          placeholder="Email"
          type="email"
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
            text="Sign up"
            style={{borderColor: '#f27059', color: '#f27059'}} 
            type='submit' 
          />
          <RedirectToPage onClick={() => browserHistory.push("/signIn")}>
            Sing in
        </RedirectToPage>
        </Buttons>
      </form>
    </AuthWindow>
  )
}


Register.propTypes = {
  register: PropTypes.func.isRequired
};

export default connect(null, {register})(Register);


const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;
