import { useGetMyUser, useUpadateMyUser } from '@/api/MyUserApi';
import UserProfileForm from '@/forms/UserProfileForm';

const UserProfilePage = () => {
  const { currentUser, isLoading: isGetLoading } = useGetMyUser();
  const { updateUser, isLoading: isUpdateLoading } = useUpadateMyUser();

  if (isGetLoading) {
    return <span>Loading...</span>;
  }
  if (!currentUser) {
    return <span>Unable to load user profile</span>;
  }
  return <UserProfileForm currentUser={currentUser} onSave={updateUser} isLoading={isUpdateLoading} />;
};

export default UserProfilePage;
