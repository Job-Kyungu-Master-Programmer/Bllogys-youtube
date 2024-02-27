import React from "react";
import ReactDOM  from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom"; 


import './styles/style.scss'

import Layout from './components/Layouts'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import PostDetails from './pages/ErrorPage'
import Register from './pages/Regsiter'
import Login from './pages/Login'
import UserProfil from './pages/UserProfil'
import Authors from './pages/Authors'
import CreatePost from './pages/CreatePost'
import CategoryPosts from './pages/CategoryPosts'
import AuthorPost from './pages/AuthorPost'
import Dashboard from './pages/Dashboard'
import EditPost from './pages/EditPost'
import Logout from './pages/Logout'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home />},
            { path: "posts/:id", element: <PostDetails />},
            { path: "register", element: <Register />},
            { path: "login", element: <Login />},
            { path: "profile/:id", element: <UserProfil />},
            { path: "authors", element: <Authors />},
            { path: "create", element: <CreatePost />},
            { path: "posts/categories/:category", element: <CategoryPosts />},
            { path: "posts/users/:id", element: <AuthorPost />},
            { path: "myposts/:id", element: <Dashboard />},
            { path: "posts/:id/edit", element: <EditPost />},
            { path: "logout", element: <Logout />},
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)