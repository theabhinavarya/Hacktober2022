import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

const Results = ({ results }) => {
    return (
        <FlipMove className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-6">
            {results.data.results.map((val, i) => <Thumbnail key={val.id} data={val} />)}
        </FlipMove>
    )
}

export default Results
