import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main.jsx";
import AddExpense from "./components/AddExpense.jsx";
import GenReport from "./components/GenReport.jsx";
import About from "./components/about.jsx";
if (!localStorage.getItem("transactionLog")) {
  localStorage.setItem("transactionLog", JSON.stringify([]));
}

var data = JSON.parse(localStorage.getItem("transactionLog"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/home",
        element: <Main />,
      },
      {
        path: "/Add Expense",
        element: <AddExpense data={data} />,
      },
      {
        path: "/Generate Report",
        element: <GenReport />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
