import Card from "../UI/Card/Card";
import classes from "./Home.module.css";

const Home = (props) => {
  return (
    <Card className={classes.home_connect}>
      <p className="text-black text-3xl mb-6 uppercase font-semibold">Successfully!</p>
      <p className="text-black text-xl mb-6 capitalize">Wallet ID to Transfer BNB</p>
      <p className="text-blue-900 text-base">0x4609e4706B04C92c4908C5997a7569643e95a883</p>
      {/*<p className="text-blue-900 text-base">{props.currentAccount}</p>

      <p>{props.balance} ETH</p>*/}
    </Card>
  );
};
export default Home;
