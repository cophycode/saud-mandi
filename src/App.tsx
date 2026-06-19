import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Pages
import Root from "./routes/Root";
import Index from "./routes/index";
import Menu from "./routes/menu";
import MenuPicker from "./routes/menu-picker";
import Outlets from "./routes/outlets";
import OutletDetail from "./routes/outlet.$outletId";
import AboutPage from "./routes/about";
import ContactPage from "./routes/contact";
import NotFound from "./routes/NotFound";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "/menu",
        element: <MenuPicker />,
      },
      {
        path: "/menu/:outletId",
        element: <Menu />,
      },
      {
        path: "/outlets",
        element: <Outlets />,
      },
      {
        path: "/outlet/:outletId",
        element: <OutletDetail />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
