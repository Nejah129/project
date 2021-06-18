import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfil } from "../redux/actions/actions";
import { Redirect } from "react-router";

const Profil = () => {
  const { loading, users, isAuth } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfil());
  }, []);
  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : !isAuth ? (
        <Redirect to="/login" />
      ) : 
        <div>
          <h1>{users.firstName}</h1>
          <h2>{users.lastName}</h2>
          <h3>{users.password}</h3>
          <button>Add phone number</button>
        </div>
      }
    </div>
  );
};
export default Profil;
