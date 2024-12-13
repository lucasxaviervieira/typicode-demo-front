import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../redux/profileSlice";
import { RootState, AppDispatch } from "../redux/store";

const Profile: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { profile } = useSelector((state: RootState) => state.profile);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  return (
    <>
      <div>
        <h1>Profile</h1>
        <span>{profile && <p>Name: {profile.name}</p>}</span>
      </div>
    </>
  );
};

export default Profile;
