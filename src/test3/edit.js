import React from 'react';
import { Link, Route } from 'react-router-dom';
import Me from './me';

export default function Edit(props) {
  return (
    <div>
      <div>Edit {props.match.params.id}!!</div>
      <div>
        <div>
          <Link to={`${props.match.url}/me`}>Edit of edit :)</Link>
        </div>
        <div>
          {props.match.url}
          <Route exact path={props.match.url} render={() => <div>ok</div>} />
          <Route path={`${props.match.url}/me`} component={Me} />
        </div>
      </div>
    </div>
  );
}
