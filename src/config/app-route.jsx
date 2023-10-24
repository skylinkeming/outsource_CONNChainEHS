import React from 'react';
import App from './../app.jsx';

import Home from './../pages/home/home.js';
import RoleEdit from '../CONNChainEHS/manage/RoleEdit/RoleEdit.tsx';
import RoleClass from '../CONNChainEHS/manage/RoleClass.tsx';

const AppRoute = [
  {
    path: '*', 
    element: <App />,
    children: [
    	{
				path: '', 
				element: <Home />
			},
      {
				path: 'system/roleEdit', 
				element: <RoleEdit />
			},
      {
				path: 'system/roleClass', 
				element: <RoleClass />
			}
		]
  }
];


export default AppRoute;