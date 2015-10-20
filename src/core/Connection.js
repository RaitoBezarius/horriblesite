import Autobahn from 'autobahn';

import ConnectionActions from 'actions/ConnectionActions';

class Connection {
  constructor() {
    this.connected = false;
    this.socket = null;
    this.promise = null;
  }

  open(cb) {
    console.log('Opening web socket...');
    this.socket = new Autobahn.Connection({
      url: 'ws://pythagore.xyz:8080/ws',
      realm: 'realm1'
    });

    this.socket.onopen = (session, details) => {
      ConnectionActions.ready();
      console.log('Connection ready');
      cb();
    }
    this.socket.onclose = () => {
      ConnectionActions.lostConnection();
    }

    this.socket.open();
  }

  session() {
    return this.promise;
  }

}

export default new Connection();
