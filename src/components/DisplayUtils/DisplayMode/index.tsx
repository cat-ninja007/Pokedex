import { FC } from "react";
import SingleGrid from '../../../assets/images/SingleGrid.png'
import DoubleGrid from '../../../assets/images/DoubleGrid.png'

const DisplayMode: FC = () => {
    return (
        <>
            <div className="display-mode-container flex">
                <div className="single-grid w-9 h-8 bg-chronicle flex justify-center items-center rounded-l-lg border-r border-velvet-robe cursor-pointer">
                    <img src={SingleGrid} alt="single-grid" />
                </div>

                <div className="double-grid w-9 h-8 bg-misty-bluee flex justify-center items-center rounded-r-lg border-l border-velvet-robe cursor-pointer">
                    <img src={DoubleGrid} alt="double-grid" />
                </div>
            </div>
        </>
    )
}

export default DisplayMode;