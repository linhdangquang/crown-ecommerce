import React from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopUp,
} from '../../utils/firebase/firebase';
import Button from '../Button/Button';
import FormInput from '../FormInput/FormInput';
import './SignInForm.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = React.useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopUp();
    await createUserDocFromAuth(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signInAuthUserWithEmailAndPassword(email, password);
      console.log(res);
      setFormFields(defaultFormFields);
      alert('Sign in successful');
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Wrong password');
          break;

        case 'auth/user-not-found':
          alert('User not found');
          break;
        default:
          break;
      }
      console.log(error);
    }
  };

  return (
    <div className='sign-up-container'>
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
        <div className='buttons-container'>
          <Button type='submit'>SIGN IN</Button>
          <Button buttonType='google' type='button' onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
