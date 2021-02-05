import { Switch, Route, Redirect } from "react-router";
import Login from "pages/Login";
import HomePage from "pages/HomePage";
import Register from "pages/Register";
import AuthPage from "components/auth/AuthPage";
import Loader from 'common/Loader'

const App = () => {
  const isAuth = component => {
    const token = localStorage.getItem('token')
    if (!token) return <Redirect to="/signIn" />;
    return (
      <div>
        {component}
        <Loader/>
      </div>
    );
  };

  const notAuth = component => {
    const token = localStorage.getItem('token')
    if (token) return <Redirect to="/" />;
    return ( 
      <AuthPage>{component}
        <Loader/>
      </AuthPage>
    )
  };
  return (
    <Switch>
      <Route path='/signIn' render={() => notAuth(<Login />)} />
      <Route path='/signUp' render={() => notAuth(<Register />)} />
      <Route path='/all-tasks' render={() => isAuth(<HomePage />)} />
      <Route path='/' render={() => isAuth(<HomePage />)} />
    </Switch>
  );
}

export default App;