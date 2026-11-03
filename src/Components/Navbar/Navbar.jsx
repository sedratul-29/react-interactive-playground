import { useContext } from "react";
import dollarImg from "../../assets/Currency.png"
import { CoinContext } from "../../App";

const Navbar = () => {
    const [coin, setCoin]  = useContext(CoinContext);
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <button className="flex justify-between items-center gap-2 text-xl font-bold">
                    {coin} Coins
                    <img src={dollarImg} alt="" />
                </button>
            </div>
        </div>
    );
};

export default Navbar;