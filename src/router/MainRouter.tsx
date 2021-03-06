import React, { ReactNode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Paths } from '@router';
import { GamePage } from '@game';


export const routes = new Map<Paths, {
  element: ReactNode
}>([
	['/home', { element: null }],
	['/game', { element: <GamePage /> }],
]);

export const MainRouter = () => (
	<BrowserRouter>
		<Routes>
			{Array.from(routes).map(([path, { element }]) => (
				<Route key={path} path={path} element={element} />
			))}
		</Routes>
	</BrowserRouter>
);
