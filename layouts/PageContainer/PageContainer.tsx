import { FC } from "react";

import BackPage from "@/components/BackPage";

interface PageContainerTypeProp {
    title?:string,
    children: React.ReactNode
}

const PageContainer:FC<PageContainerTypeProp> = ({title,children}) => {
    return (
        <div className="w-full max-w-7xl mx-auto py-4 md:py-12">
            <BackPage href={"/"}/>
            <h1 className="text-4xl font-bold mb-12 text-primaryColor">{title}</h1>
            {children}
        </div>
    )
}

export default PageContainer;
