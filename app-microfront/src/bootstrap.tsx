import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main.component';
import { bootstrap } from './auth.service';

bootstrap.subscribe({
  next: (user) => console.warn('user', user)
});
bootstrap.start();

ReactDOM.render(<Main />, document.getElementById('root'));
