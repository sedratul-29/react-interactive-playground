import { use, useState } from "react";
import AvailabalePlayer from "./AvailabalePlayer";
import SelectedPlayers from "./SelectedPlayers";
import { useContext } from "react";
import { CoinContext } from "../../App";

const Players = ({ playersPromise }) => {

    const [coin, setCoin] = useContext(CoinContext)

    const [selected, setSelected] = useState('Available')
    const players = use(playersPromise);
    // console.log(players);

    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const handleSelectedPlayers = (player) => {
        const isExist = selectedPlayers.some(p =>
            p.playerName === player.playerName
        )
        if(isExist){
            alert('Already Selected!');
            return
        }
        const newSelectedPlayers = [...selectedPlayers, player];
        setSelectedPlayers(newSelectedPlayers);
    }

    return (
        <div className="container mx-auto mt-22 mb-50 ">
            <div className="flex justify-between items-center mb-8">
                <h3 className="font-bold text-[28px] text-black opacity-100">{
                    selected === "Available" ? "Available Players" : `Selected Player (${selectedPlayers.length}/${players.length})`
                }</h3>
                <div>
                    <button onClick={() => setSelected("Available")}
                        className={`btn text-base rounded-r-none rounded-l-[10px] ${selected === "Available" ? "bg-[#E7FE29] font-bold opacity-100 py-4 px-7.5 " : "py-4 px-5 font-normal opacity-70"}`}>Available</button>
                    <button onClick={() => setSelected("Selected")}
                        className={`btn text-base rounded-l-none rounded-r-[10px] ${selected === "Selected" ? "bg-[#E7FE29] font-bold py-4 px-7.5 opacity-100" : "py-4 px-5 font-normal opacity-70"}`}>Selected({selectedPlayers.length})</button>
                </div>
            </div>
            {
                selected === "Available" ?
                    <AvailabalePlayer players={players}
                        handleSelectedPlayers={handleSelectedPlayers} /> :
                    <SelectedPlayers
                        selectedPlayers={selectedPlayers}
                        setSelectedPlayers={setSelectedPlayers}
                        coin={coin}
                        setCoin={setCoin}
                    ></SelectedPlayers>
            }
        </div>
    );
};

export default Players;