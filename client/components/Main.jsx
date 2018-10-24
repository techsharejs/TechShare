import Home from './Home';
import Login from './Login';
import Register from './Register';

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/login' component={Login}></Route>
    <Route exact path='/register' component={Register}></Route>
  </Switch>
);

export default Main;