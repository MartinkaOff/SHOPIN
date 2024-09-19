import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Catalog } from "./pages/Catalog/Catalog.tsx";
import "./index.css";
import { About } from "./pages/About/About.tsx";
import { MainPage } from "./pages/Main/MainPage.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainPage />,
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
		<div className="wrapper">
			<RouterProvider router={router} />
		</div>
	</StrictMode>
);
