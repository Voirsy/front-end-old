import { Redirect, Route, Switch } from 'react-router-dom';
import DeleteAccount from '../views/DeleteAccount';

const ProfileRoutes = () => (
  <Switch>
    <Route path="/profile/account">
      <div>Account view</div>
    </Route>
    <Route path="/profile/deleteaccount">
      <DeleteAccount />
    </Route>
    <Route path="/profile/changepassword">
      <div>Change password view</div>
    </Route>
    <Route path="*">
      <Redirect to="/profile/account" />
    </Route>
  </Switch>
);

export default ProfileRoutes;
