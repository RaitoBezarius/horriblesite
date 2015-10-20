import React from 'react';
import Router from 'core/Router';
import Connection from 'core/Connection';

function runApplication() {
  Connection.open(() => {
    Router.run(Root => {
      React.render(<Root />, document.body);
    });
  })
}

runApplication();
