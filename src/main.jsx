import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";

// create the client side router
const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById("root"));
// pass the router into react's render function
root.render(<RouterProvider router={router} />);
