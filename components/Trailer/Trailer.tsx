import { FC } from "react";
import Image from 'next/image';

import TrailerIcon from '../../public/assets/play_video.svg';

interface TrailerTypeProp {
    handleModal: () => void
}

const Trailer:FC<TrailerTypeProp> = ({handleModal}) => {
    return (
        <div className="flex items-center gap-2">
            <span>Trailer</span>
            <Image 
                src={TrailerIcon}
                width="0"
                height="0"
                sizes='100vw'
                className='w-6 rounded-lg cursor-pointer'
                alt={"trailer icon"}
                onClick={handleModal}
            />
    </div>
    )
}

export default Trailer;