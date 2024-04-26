// component
import NgoProfilePage from './ngo/NgoProfilePage';
import UserProfile from './UserProfile';
import useAuth from '../../hooks/useAuth';

export default function GeneralApp() {
  const { user } = useAuth();
  return (
    <>
      {user?.userType?.ngo && <NgoProfilePage />}
      {!user?.userType?.ngo && <UserProfile />}
    </>
  );
}
