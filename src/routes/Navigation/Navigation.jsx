import { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/UserContext';
import { signOutUser } from '../../utils/firebase/firebase';
import './Navigation.scss';

const Navigator = () => {
  const { currentUser} = useContext(UserContext);


  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <Logo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link to='/shop' className='nav-link'>
            SHOP
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={signOutUser} >SIGN OUT</span>
          ) : (
            <Link to='/auth' className='nav-link'>
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </Fragment>
  );
};

export default Navigator;
