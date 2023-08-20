// npm start
import { ClientResponse, Project } from '@commercetools/platform-sdk';
import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import  { apiRoot }  './components/apiClient';

//   interface 
//     [className: string]: string
//   }
//   const classNames: IClassNames;
//   export = classNames;


// getProject().then(console.log).catch(console.error);
const fff = (): Promise<ClientResponse<Project>> => {
  return apiRoot.execute();
  // return 
};
fff()
  .then(function (value) {
    console.log('Результат:', .body);
    console.log('Результат операции:', value.body.languages);
  })
  .catch(console.error);
//==================================

const rootElement = document.getElementById('root');
if (rootElement !== null) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}

// root.render(
//     React.createElement('button', {
//       onClick: () => {console.log('ffff')}
//     }, 'hghghg hghghg')
// );
