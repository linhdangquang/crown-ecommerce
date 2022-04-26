import { async } from '@firebase/util';
import React from 'react';
import { createUserDocFromAuth, signInWithGooglePopUp } from '../../utils/firebase/firebase';

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopUp();
    const userDocRef = await createUserDocFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <>
      <div>SignIn</div>
      <button>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png'
          alt='google'
          onClick={logGoogleUser}
          style={{ width: '50px' }}
        />
        Sign In With Google
      </button>
    </>
  );
};

export default SignIn;
