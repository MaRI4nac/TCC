import BuyFirstBand from "./1st-band";
import BuySecondBand from "./2nd-band";
import BuyThirdBand from "./3rd-band";
import BuyFourthBand from "./4th-band";
import { Everything } from "./styled";


export default function AllBuy () {
    return (
        <Everything>
            <BuyFirstBand />
            <BuySecondBand />
            <BuyThirdBand />
            <BuyFourthBand />
        </Everything>
    )
    
}