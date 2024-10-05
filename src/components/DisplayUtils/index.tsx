import { FC } from "react";
import SortBy from "./SortBy";
import DisplayMode from "./DisplayMode";


const DisplayUtils: FC = () => {
    return (
        <>
            <div className="display-utils-container px-5 flex justify-between items-center mt-4">
                <SortBy />
                <DisplayMode />
            </div>
        </>
    )
}

export default DisplayUtils;