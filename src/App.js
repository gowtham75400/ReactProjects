import AdviseFetch from "./Components/AdviseFetch";
import { AlertParent } from "./Components/AlertParent";
import  CardComp  from "./Components/CardComp";
import Cart from "./Components/Cart";
import { PropandProptype } from "./Components/PropandProptype";
import Qrcode from "./Components/Qrcode/Qrcode";
import User from "./Components/User";
import UserDetails from "./Components/UserDetails";


function App() {

  // let msg =() => {
  //   alert('Gowtham')
  // }
  return (
    <div className="App">
      {/* <PropandProptype color='yellow'/>
      <AlertParent message={msg}/> */}
      {/* <CardComp/> */}
      {/* <Qrcode/> */}
      {/* <Cart/> */}
      {/* <UserDetails/> */}
      {/* <User/> */}
      <AdviseFetch/>
    </div>
  );
}

export default App;
