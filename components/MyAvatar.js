// hooks
import useAuth from "@/hooks/useAuth";
//
import Avatar from "./Avatar";

// ----------------------------------------------------------------------

export default function MyAvatar({ ...other }) {
  const { user, ngoProfile, userProfile } = useAuth();

  return (
    <Avatar
      src={user?.userType?.ngo ? ngoProfile?.image : userProfile?.photo_url}
      alt={user?.displayName}
      // color={user?.photoURL ? 'default' : createAvatar(user?.displayName).color}
      {...other}
    >
      {user?.displayName?.charAt(0).toUpperCase()}
    </Avatar>
  );
}
