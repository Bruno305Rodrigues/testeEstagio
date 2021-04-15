import { BrowserRouter, Switch, Route } from 'react-router-dom';

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