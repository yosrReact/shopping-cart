import { createStore, applyMiddleware } from "redux";
//import promise from 'redux-promise';
import thunk from "redux-thunk";
import createLogger from "redux-logger";
//import { loadState, saveState } from "./localStorage";
//import throttle from "lodash/throttle";
import shoppingApp from "./reducers";

const configureStore = () => {
  const middlewares = [thunk];
  if (process.env.NODE_ENV !== "production") {
    middlewares.push(createLogger);
  }

  const store = createStore(
    shoppingApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middlewares)
  );

  return store;
};
export default configureStore;
// const configureStore = () => {
//   const persistedState = loadState();
//   const store = createStore(shoppingApp, persistedState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
//
//   if(process.env.NODE_ENV!=='production'){
//     store.dispatch=addLoggingToDisptach(store)
//   }
//
//   store.subscribe(throttle(() => {
//         saveState({
//           todos: store.getState().todos
//         });
//       },10000,{ leading: false }
//     )
//   );
//   return store;
// };
