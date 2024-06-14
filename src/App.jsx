import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Layout from "./routes/layout/Layout";
import HomePage from "./routes/homePage/HomePage";
import ListPage from "./routes/listPage/ListPage";
import SinglePage from "./routes/singlePage/SinglePage";
import Register from "./routes/register/Register";
import ProfilePage from "./routes/profilePage/ProfilePage";
import Login from "./routes/login/Login";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout/>,
      children:[
        {path:'/',
      element:<HomePage/>
    },
    {
      path:'/list',
      element:<ListPage/>
    },
    {
      path:'/:id',
      element:<SinglePage/>
    },
    {
      path:'/register',
      element:<Register/>
    
    },
    {
      path:'/profile',
      element:<ProfilePage/>
    
    },
    {
      path:'/login',
      element:<Login/>
    }
      ]
    }
  ])
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
}
export default App