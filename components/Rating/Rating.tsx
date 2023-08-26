import { FC } from "react";
import { HiMiniStar } from "react-icons/hi2";

interface RatingTypeProp {
    rank: string
}

const Rating:FC<RatingTypeProp> = ({rank}) => {
    return (
        <div className="flex items-center gap-2">
            <span>Rating:{rank}</span>
            <HiMiniStar size={"1.5rem"} className="text-yellow-400"/>
        </div>
    )
}

export default Rating;