import Header from 'common/layouts/Header/Header';
import NotFound from 'common/layouts/NotFound/NotFound';
import React, { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Header></Header>
        <div className="App">
          <Switch>
            <Redirect exact from="/" to="/post"></Redirect>
            <Route
              path="/post"
              component={React.lazy(() => import('./features/Post/Post'))}
            ></Route>
            <Route path="*" component={NotFound}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
