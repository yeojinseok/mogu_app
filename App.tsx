import * as React from 'react';
import Navigation from './src/navigation/Navigation';
import {useAuthStorage} from './src/store/zustore/AuthStorage';

function App() {
  return <Navigation />;
}

export default App;
