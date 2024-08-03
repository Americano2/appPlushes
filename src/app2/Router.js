import React from "react"

import { createHashRouter, RouterProvider} from "react-router-dom"

import { Parkour, parkourChildren } from "./Parkour"

import { Navigate } from "react-router-dom"

const router = createHashRouter([
    {
        path: "/",
        element: <Navigate to="/parkour" replace="true"/>
    },
    {
        path: "/parkour",
        element: <Parkour />,
        children: parkourChildren,
    }
])

export const Router = ({children}) => <RouterProvider router={router}>{children}</RouterProvider>