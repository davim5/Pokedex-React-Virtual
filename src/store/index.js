import { createStore } from 'redux';

import display from './modules/display/reducer';

const store = createStore(display);

export default store;
