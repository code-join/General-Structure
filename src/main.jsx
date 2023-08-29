// CSS
import './index.css';

// App
import App from './App.jsx';

// React e Router
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Routes (Pages)
import Home from './routes/Home.jsx';
import Gallery from './routes/Gallery.jsx';

// Paths
import { routes } from './assets/data/routes.js';

const router = createBrowserRouter([
	{
		path: `${routes[0].path}`,
		element: <App />,
		children: [
			{
				path: `${routes[0].path}`,
				element: <Home />,
			},
			{
				path: `${routes[1].path}`,
				element: <Gallery />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
