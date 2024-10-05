import { FC } from "react";
import ChevronDown from '../../../assets/images/chevron-down.png'

const SortBy: FC = () => {
    return (
        <>
            <div className="sortby-container w-[186px] h-8 bg-chronicle rounded-lg flex justify-between items-center pl-2 pr-[10px] cursor-pointer">
                <p className="sortby-text text-xs text-velvet-robe font-normal leading-5">Sort by</p>
                <div className="chevron">
                    <img src={ChevronDown} alt="chevron-down" />
                </div>
            </div>
        </>
    )
}

export default SortBy;