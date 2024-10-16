import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PaymentPage from "pages/payment";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to={"/payments"} replace />,
    },
    {
      path: "/payments",
      element: <PaymentPage />,
    },
    { path: "*", element: <div>Not found</div> },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
