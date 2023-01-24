import { useEffect, useState } from "react";
import apiBitCars from "../service";

const useUsers = ({ token }) => {
  const [users, setUsers] = useState([]);

  const getOwner = () => {
    apiBitCars
      .get(`/users/`, {
        headers: {
          Authorization: `token ${token}`,
        },
      })
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getOwner();
  }, []);

  return users;
};
export default useUsers;
