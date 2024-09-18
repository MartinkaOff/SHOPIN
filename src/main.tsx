import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Catalog } from "./pages/Catalog/Catalog.tsx";
import App from "./App.tsx";
import "./index.css";
import { About } from "./pages/About/About.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/catalog",
		element: <Catalog />,
	},
	{
		path: "/about",
		element: <About />,
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
