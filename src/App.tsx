import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Pages
import Root from "./routes/Root";
import Index from "./routes/index";
import Menu from "./routes/menu";
import Outlets from "./routes/outlets";
import OutletDetail from "./routes/outlet.$outletId";
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
