import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { useAuth0 } from '@auth0/auth0-react';

const MobileNavLinks = () => {
  const { logout } = useAuth0();
  return (
    <>
     <Link to='/order-status' className='flex font-bold hover:text-orange-500 bg-white items-center'>
        Order Status
      </Link>
      <Link to='/manage-restaurant' className='flex font-bold hover:text-orange-500 bg-white items-center'>
        My Restaurant
      </Link>
      <Link to='/user-profile' className='flex font-bold hover:text-orange-500 bg-white items-center'>
        User Profile
      </Link>
      <Button onClick={() => logout()} className='flex items-center font-bold hover:bg-gray-500 px-3'>
        Log Out
      </Button>
    </>
  );
};

export default MobileNavLinks;
