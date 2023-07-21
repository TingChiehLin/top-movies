"use client"

import { MovieContextProvider } from "@/context/movieData.context";
import { FC } from "react";

interface HomeContainerTypeProp {
    children: React.ReactNode
}

const HomeContainer:FC<HomeContainerTypeProp> = ({children}) => {
    return (
        <MovieContextProvider>
          {children}
        </MovieContextProvider>
    )
}

export default HomeContainer;