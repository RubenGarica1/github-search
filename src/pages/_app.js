import React from 'react'
import '../styles/index.css'
import NavBar from '../components/NavBar'
import NProgress from 'nprogress';
import Router from 'next/router';
import "nprogress/nprogress.css";
import {createStore, applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers from '../reducers'
NProgress.configure({
  minimum: 0.5,
  easing: 'ease',
  speed: 800,
  showSpinner: false,
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const persistConfig = {
  key: 'authType',
  storage: storage,
  whitelist: ['clienteReducers',
  'repositionReducers']
};
const pReducer = persistReducer(persistConfig, reducers);


const middleware = applyMiddleware(reduxThunk);

const store = createStore(pReducer, middleware);
const persistor = persistStore(store);
export const MyApp = ({ Component, pageProps, data }) => {
  return (
  <>
    <Provider store={store}>
      <NavBar/>
      <Component {...pageProps} />
    </Provider>
  </>
  )
}

MyApp.getStaticProps = async (props) => {

  return {data: ''}
}


export default MyApp
