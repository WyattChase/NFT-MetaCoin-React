import { EthProvider } from "./contexts/EthContext";
import React, { useContext } from "react";
//import { Context } from "./contexts/Context";
import Web3 from "web3";


function App() {
  // const { store, actions } = useContext(Context);

  const onConnect = async()=>{
    let provider = window.ethereum;
    if (typeof provider !== "undefined") {
      provider.request({ method: "eth_requestAccounts"});
      const web3 = new Web3(provider);
      const accounts = await web3.eth.getAccounts();
      const account = accounts[0]
      console.log(account);
    } else {
      console.log("Mon-etheruem browser detected. Please Install Metamask")
    } }
  return (
    <EthProvider>
      <div id="App">
        <div className="container">
          <button onClick={onConnect}>Connect to Meta Mask</button>
        </div>
      </div>
      <section>
        <h2>Characters</h2>
        <div>
          {/* {store.people.map((character, index) => {
            return <People key={index} index={index} char={character} />;
          })} */}
        </div>
      </section>
    </EthProvider>
  );
}

export default App;
