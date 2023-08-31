import { FC } from "react";

interface VideoTypeProp {
    videoId: string
}

const VideoPlayer:FC<VideoTypeProp> = ({videoId}) => {
    return (
        <div className="aspect-w-16 aspect-h-9 z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <iframe src={`https://www.youtube.com/embed/${videoId}`}  
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen  
                    className="w-4/5 h-4/5 xl:w-2/3 xl:h-2/3 2xl:w-1/2 2xl:h-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
            </iframe>
        </div>
    )
}

export default VideoPlayer;