// root reducer
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { ModalReducer } from './components/modal/index';
import RssImporter from './modules/rss/reducer';

export default combineReducers({
    routing: routerReducer,
    ...ModalReducer,
    ...RssImporter
});
