// root reducer
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { modalReducer } from './components/modal/index';
import { RssReducer } from './pages/dachboard/index';

export default combineReducers({
    routing: routerReducer,
    ...modalReducer,
    ...RssReducer
});
