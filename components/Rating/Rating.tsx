import { FC } from "react";
import { HiMiniStar } from "react-icons/hi2";

interface RatingTypeProp {
    rank: string
}

const Rating:FC<RatingTypeProp> = ({rank}) => {
    return (
        <div className="flex justify-center items-center gap-2">
            <HiMiniStar size={"1.5rem"} className="text-yellow-400"/>
            <span className="text-slate-600 select-none">Rating <span className="font-semibold">{rank}</span></span>
        </div>
    )
}

export default Rating;