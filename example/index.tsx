import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Modal } from '@kevtucker/tailwind-components';
import '@kevtucker/tailwind-components/dist/tailwind.css';

const App = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal
        bgColor="bg-gray-100"
        title="Modal Title"
        isOpen={open}
        onClose={() => setOpen(false)}
      >
        <p>Modal Content</p>
      </Modal>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
