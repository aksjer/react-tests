import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import PlanList from '../test1/plan-list';
import ChildCpt from '../test2/child';
import Edit from './edit';

export default function Navbar() {
  // const links = [1, 2, 3].map(e => <Link key={e} to="hello" />);

  return (
    <div>
      <BrowserRouter>
        <div>
          <div>
            <Link to="/hello">hello</Link>
          </div>
          <div>
            <Link to="/nothing">nothing</Link>
          </div>
          <div>
            <Link to="/edit/1">edit 1</Link>
          </div>
          <div>
            <Link to="/edit/2">edit 2</Link>
          </div>
          <div>
            <Route path="/hello" component={PlanList} />
            <Route path="/nothing" component={ChildCpt} />
            <Route path="/edit/:id" component={Edit} />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
