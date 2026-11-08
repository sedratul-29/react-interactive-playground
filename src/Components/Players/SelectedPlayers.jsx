import deleteButton from "../../assets/DeleteButton.png"
const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, coin, setCoin }) => {
    const handleDeleteSelectedPlayer = (DeleteSelectedPlayer) => {
        const filteredSelectedPlayer = selectedPlayers.filter(
            selectedPlayer => selectedPlayer.playerName !== DeleteSelectedPlayer.playerName
        );
        // console.log(filteredSelectedPlayer);
        setSelectedPlayers(filteredSelectedPlayer);
        setCoin(coin+DeleteSelectedPlayer.price);
    }
    return (
        <div className="space-y-6">
            {
                selectedPlayers.map((selectedPlayer, index) =>
                    <div key={index} className="flex justify-between items-center p-6 rounded-2xl
                    border-1 border-[#D9D9D9]">
                        <div className="flex items-center gap-6">
                            <img src={selectedPlayer.playerImage} alt={selectedPlayer.playerName}
                                className="w-auto h-20 rounded-2xl" />
                            <div>
                                <h2 className="font-semibold text-2xl text-black mb-3">{selectedPlayer.playerName}</h2>
                                <p className="font-normal text-base opacity-70">{selectedPlayer.battingStyle}</p>
                            </div>
                        </div>
                        <div>
                            <button onClick={() => handleDeleteSelectedPlayer(selectedPlayer)}><img src={deleteButton} alt="deleteButton" /></button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default SelectedPlayers;``