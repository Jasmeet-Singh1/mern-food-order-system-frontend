import { useCreateMyRestaurant, useGetMyRestaurant, useUpdateMyRestaurant } from '@/api/MyRestaurantApi';
import ManageRestaurantForm from '@/forms/manage-restaurant-form/ManageRestaurantForm';

const ManageRestaurantPage = () => {
  const { restaurant } = useGetMyRestaurant();
  const { createRestaurant, isLoading: isCreateLaoding } = useCreateMyRestaurant();

  const { updateRestaurant, isLoading: isUpdateLoading } = useUpdateMyRestaurant();
  return (
    <ManageRestaurantForm
      restaurant={restaurant}
      onSave={createRestaurant}
      isLoading={isCreateLaoding || isUpdateLoading}
    />
  );
};

export default ManageRestaurantPage;
