import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import User from '../pages/User';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
              
                <Route path="/" exact component={User}/>
            </Switch>
        </BrowserRouter>
    ); 
}