import React from 'react';
import App from './../app.jsx';

import Home from './../pages/home/home.js';
import RoleEdit from '../CONNChainEHS/system/RoleEdit/RoleEdit.tsx';
import RoleClass from '../CONNChainEHS/system/RoleClass.tsx';
import EmployeeList from '../CONNChainEHS/manage/employeeList/EmployeeList.tsx';
import EmployeeEdit from '../CONNChainEHS/manage/employeeEdit/EmployeeEdit.tsx';

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
			},
			{
				path: 'manage/employeeList',
				element: <EmployeeList />
			},
			{
				path: 'manage/employeeEdit',
				element: <EmployeeEdit />
			},
			// {
			// 	path: 'system/roleClass', 
			// 	element: <RoleClass />
			// }
		]
	}
];


export default AppRoute;