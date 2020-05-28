import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Main from '~/pages/Main';
import Info from '~/pages/Info';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/info" exact component={Info} />
    </Switch>
  );
}
