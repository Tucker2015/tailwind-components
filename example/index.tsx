import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FileInput } from '../';

const App = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <FileInput />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
