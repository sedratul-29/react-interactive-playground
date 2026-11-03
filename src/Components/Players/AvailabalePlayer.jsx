import Card from "../UI/Card";

const AvailabalePlayer = ({ players , handleSelectedPlayers}) => {
    // console.log(players)
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {
                players.map((player, index) =>
                    <Card key={index} player={player} handleSelectedPlayers={handleSelectedPlayers}></Card>
                )
            }
        </div>
    );
};

export default AvailabalePlayer;