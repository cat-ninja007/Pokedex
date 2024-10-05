import { FC } from "react";
import PokemonLogo from '../../assets/images/Pokemon-Logo.png'
import SearchIcon from '../../assets/images/Search.png'


const Header: FC = () => {
    return (

        <>
            
            <div className="header-section w-full h-[48px] bg-maritime-blue flex justify-between items-center pt-[6px] pb-[7px] pl-[21px] pr-[25px] border-b border-chronicle">
                <div className="header-logo cursor-pointer">
                    <img className="w-[97px]" src={PokemonLogo} alt="pokemon-logo" />
                </div>
                <div className="header-search cursor-pointer">
                    <img className="w-5" src={SearchIcon} alt="search-icon" />
                </div>
            </div>
        </>


    )
}

export default Header;