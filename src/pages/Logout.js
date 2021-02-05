import { useEffect } from 'react';
import { Redirect } from "react-router";

const Logout = () => {
  useEffect(() => {
    localStorage.removeItem('token')
  }, []);
  return <Redirect to="/" />;
}

export default Logout;
