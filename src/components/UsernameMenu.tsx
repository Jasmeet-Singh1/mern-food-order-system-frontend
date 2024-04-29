import { CircleUserRound } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { Separator } from './ui/separator';
import { Button } from './ui/button';

const UsernameMenu = () => {
  const { user, logout } = useAuth0();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='flex items-center font-bold hover:text-orange-500 px-3 gap-2'>
        <CircleUserRound className='text-orange-500' />
        {user?.email}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <Link to='/user-profile' className='font-bold  cursor-pointer'>
          <DropdownMenuItem className='cursor-pointer hover:text-orange-500'>User-Profile</DropdownMenuItem>
        </Link>
        <Separator />
        <DropdownMenuItem>
          <Button onClick={() => logout()} className='flex flex-1 font-bold bg-orange-500'>
            Log Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UsernameMenu;
