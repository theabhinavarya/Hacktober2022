import { ThumbUpIcon } from "@heroicons/react/outline";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ data }, ref) => {
    const BASE_URL = 'https://image.tmdb.org/t/p/original';
    console.log(data);
    return (
        <div ref={ref} className="group cursor-pointer">
            <div>
                <img src={`${BASE_URL}${data.backdrop_path}`} height={1080} width={1920} className="group-hover:scale-105 ease-out-in duration-300" />
            </div>
            <div className="mt-4">
                <p className="truncate">{data.overview}</p>
                <h2 className="text-xl font-bold">{data.title}</h2>
                <div className="flex justify-between items-center opacity-0 pt-2 group-hover:opacity-100">
                    <p><span className="font-bold">Release date:</span> {data.release_date}</p>
                    <div className="flex justify-center items-center">
                        <ThumbUpIcon className="w-6" />
                        <p>{data.vote_count}</p>
                    </div>
                </div>
            </div>
        </div>
    )
});

Thumbnail.displayName = 'Thumbnail';


export default Thumbnail
