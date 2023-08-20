// npm start
import { ClientResponse, Project } from '@commercetools/platform-sdk';
import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import getProject, { apiRoot } from './components/apiClient';
// declare module '*.css' {
//   interface IClassNames {
//     [className: string]: string
//   }
//   const classNames: IClassNames;
//   export = classNames;
// }
// console.log(apiRoot.get().execute());
// getProject().then(console.log).catch(console.error);
const fff = (): Promise<ClientResponse<Project>> => {
  return apiRoot.execute();
  // return.payments();
};
fff()
  .then(function (value) {
    console.log('Результат операц:', value.body);
    console.log('Результат операции:', value.body.languages);
  })
  .catch(console.error);
// const data = {};
// apiRoot.get().execute().then(data);
// const getdata = async (): Promise<void> => {
//   const response = await fetch(
//     `https://api.europe-west1.gcp.commercetools.com/gp47/`,
//     {
//       method: 'GET',
//       headers: {
//         Authorization: 'Bearer BKW5tI23wkLVDXmhFSVTGs4-Il9ZftfZ',
//       },
//     },
//   );
//   console.log(response);
//   const data = await response.json();
//   if (response.ok) {
//     console.log(data);
//   } else {
//     console.log(`Ошибка №${response.status}===${data.error_description}`);
//   }
// };
// getdata();

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
