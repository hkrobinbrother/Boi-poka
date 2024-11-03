import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Dashbord from './Components/Dashbord/Dashbord';
import BookDetail from './Components/BookDetail/BookDetail';
import ListedBooks from './Components/LIstedBooks/ListedBooks';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path: 'books/:bookId',
        element:<BookDetail></BookDetail>,
        loader: () => fetch('/booksData.json')
        // do not load all the books for one book
      },
      {
        path:'listedBooks',
        element: <ListedBooks></ListedBooks>,
        // worst way to load some data
        loader: ()=> fetch('booksData.json')
        // do not load all data for some
      },
      {
        path:'dashbord',
        element: <Dashbord></Dashbord>
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)


