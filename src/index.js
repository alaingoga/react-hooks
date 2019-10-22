import React from 'react';
import ReactDOM from 'react-dom';
import Emitter from './emitter';

import App from './app';

ReactDOM.render(
    <App />,
    document.getElementById('container')
  );

  const emitter = new Emitter();

  const callback = function() {
    console.log(arguments);
  }

  // 1. Support subscribing to events.
  const sub = emitter.subscribe('event_name', callback);
  const sub1 = emitter.subscribe('event_name1', callback);
  const sub2 = emitter.subscribe('event_name', callback);
  const sub3 = emitter.subscribe('event_name', callback);
  // 2. Support emitting events.
  // This particular example should lead to the `callback` above being invoked with `foo` and `bar` as parameters.
  emitter.emit('event_name', 'foo', 'bar');

  // 3. Support unsubscribing existing subscriptions by releasing them.
  sub2.release(); // `sub` is the reference returned by `subscribe` above
  console.log('released...');

  emitter.emit('event_name', 'foo', 'bar', 'test');