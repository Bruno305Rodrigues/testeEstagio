import { combineReducers} from 'redux';

import cart from './cart/reducer';
import filme from './filme/reducer';

export default combineReducers({
    cart,filme
});