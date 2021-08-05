import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import PostDetail from './components/PostDetail/PostDetail';
import PostForm from './components/PostForm/PostForm';
import PostList from './components/PostList/PostList';

function Post() {
  const match = useRouteMatch();
  
  return (
    <div>
      <Switch>
        <Route exact path={`${match.url}`} component={PostList}></Route>
        <Route path={`${match.url}/detail/:postId`} component={PostDetail}></Route>
        <Route path={`${match.url}/create`} component={PostForm}></Route>
        <Route path={`${match.url}/update/:postId`} component={PostForm}></Route>
      </Switch>
    </div>
  );
}

export default Post;