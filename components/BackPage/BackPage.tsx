import Link from "next/link";
import { FC } from "react";
import { HiChevronLeft } from "react-icons/hi2";

interface BackPagePropType {
    href: string
}

const BackPage:FC<BackPagePropType> = ({href}) => {
    return (
        <div className='flex items-center gap-1.5 mb-12'>
        <Link href={href}>
          <HiChevronLeft size={"1.5rem"} className='text-secondaryColor cursor-pointer'/>
        </Link>
        <span className='select-none'>Back to Movie List</span>
       </div>
    )
}

export default BackPage;