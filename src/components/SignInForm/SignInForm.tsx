import { AuthError, AuthErrorCodes } from 'firebase/auth';
import React, { ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { emailSignInStart, googleSignInStart } from '../../store/user/user.action';
import Button, {BUTTON_TYPES} from '../Button/Button';
import FormInput from '../FormInput/FormInput';
import { ButtonsContainer, SignInContainer } from './sign-in-form.styles';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = React.useState(defaultFormFields);
  const { email, password } = formFields;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle =  () => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await dispatch(emailSignInStart(email, password))
      setFormFields(defaultFormFields);
      navigate('/');
      alert('Sign in successful');
    } catch (error) {
      if ((error as AuthError).code === 'auth/user-not-found') {
        alert('Email not found');
      }
      console.log(error);
    }
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />
        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <ButtonsContainer>
          <Button type='submit'>SIGN IN</Button>
          <Button buttonType={BUTTON_TYPES.google} type='button' onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
