import { BrowserRouter, Switch, Route } from 'react-router-dom';

import User from '../pages/User';
import Detalhe from '../pages/Detalhe';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
              
                <Route path="/" exact component={User}/>
                <Route path="/detalhe" exact component={Detalhe}/>

            </Switch>
        </BrowserRouter>
    ); 
}