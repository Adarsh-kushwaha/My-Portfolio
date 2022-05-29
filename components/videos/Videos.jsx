import React from 'react'
import ReactPlayer from 'react-player/youtube';

const data = [
    {
        "id": 1,
        "url": "https://youtu.be/419qO43FiFY"
    },
    {
        "id": 2,
        "url": "https://youtu.be/6dSdn46gdbY"
    },
    {
        "id": 3,
        "url": "https://youtu.be/NZY8T1sApEI"
    },
    {
        "id": 4,
        "url": "https://www.youtube.com/watch?v=YuIogu47Tmk"
    }
]
//width={352} height={198}
const Videos = () => {
    return (
        <div className='xl:grid xl:grid-cols-2 xl:gap-14 flex flex-col items-center gap-8 sm:grid sm:grid-cols-1'>
            {
                data.map((video) => {
                    return <div key={video.id} className="xl:border-4 rounded-sm border-green-400 shadow-md dark:border-teal-500 ">
                        <ReactPlayer url={video.url} width={336} height={189} />
                    </div>
                })
            }

        </div>
    )
}

export default Videos