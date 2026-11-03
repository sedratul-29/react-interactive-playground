import { useContext, useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa6";
import { CoinContext } from "../../App";

const Card = ({ player, handleSelectedPlayers }) => {

    const [coin, setCoin] = useContext(CoinContext)

    const [choose, setChoose] = useState(false);
    const handleChoose = () => {
        setChoose(true);
        setCoin(coin - player.price);
        handleSelectedPlayers(player);
    }

    return (
        <div className="card bg-base-100 shadow-sm p-6  rounded-2xl">
            <figure>
                <img className="rounded-2xl"
                    src={player.playerImage}
                    alt="Player image" />
            </figure>
            <div className="card-body">
                <div className="flex items-center gap-4">
                    <FaUser className="opacity-100" />
                    <h2 className="font-semibold text-xl opacity-100 text-[#131313] ">{player.playerName}</h2>
                </div>
                <div className="flex justify-between">
                    <div className="flex items-center gap-3">
                        <FaFlag />
                        <p className="text-[1rem] opacity-80 font-normal">{player.playerCountry}</p>
                    </div>
                    <button className="py-2 px-4 text-[14px] font-normal opacity-100 text-[#131313] rounded-[8px] bg-[#F3F3F3] border-none">{player.playerType}</button>
                </div>
                <div className="divider"></div>
                <h4 className="opacity-100 font-bold text-base text-[#131313] mb-1.5">Rating ({player.rating})</h4>
                <div className="flex justify-between items-center mb-1">
                    <h4 className="font-semibold text-base text-[#131313] opacity-100">{player.battingStyle}</h4>
                    <h4 className="font-normal text-base opacity-75">{player.bowlingStyle}</h4>
                </div>
                <div className="card-actions justify-between items-center">
                    <h4 className="font-semibold text-base opacity-100"> Price: ${player.price}</h4>
                    <button onClick={handleChoose}
                        className="px-3.5 py-2 btn btn-ghost opacity-100 rounded-[8px] text-sm font-normal border-gray-200 border-1.5 text-[#131313]" >{
                            choose ? "Selected" : "Choose Player"
                        }</button>
                </div>
            </div>
        </div>
    );
};

export default Card;