
import React,{ useState } from 'react';
import './loginpage.css'
import {ethers} from 'ethers'
import Web3 from 'web3';



function Loginpage() {

 const[toggleState,setToggle]=useState(1);

 const connectWalletHandler = async () => {
  window.web3 = new Web3(window.ethereum)
  if (window.ethereum && window.ethereum.isMetaMask) {
    console.log('MetaMask Here!');
    

   const accounts=await window.ethereum.request({ method: 'eth_requestAccounts'})
    // .then(results => {
    //   console.log(results[0]);
      
    //   // getAccountBalance(result[0]);
    // })
    // .catch(error => {
    //   console.log(error.message);
    
    // });
    try{
      console.log(accounts[0]);
    }catch(e){
      console.log(e);
    }

  } else {
    console.log('Need to install MetaMask');
    
  }
}

// update account, will cause component re-render
// const accountChangedHandler = (newAccount) => {
  
//   getAccountBalance(newAccount.toString());
// }

// const getAccountBalance = (account) => {
//   window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
//   .then(balance => {
//     console.log(ethers.utils.formatEther(balance));
//   })
//   .catch(error => {
//     console.log(error.message);
//   });
// };

// const chainChangedHandler = () => {
//   // reload the page to avoid any errors with chain change mid use of application
//   window.location.reload();
// }


// listen for account changes
// window.ethereum.on('accountsChanged', accountChangedHandler);

// window.ethereum.on('chainChanged', chainChangedHandler);



  return (

    <div className="LOGIN-PAGE">
        <div className='navbar'>
            <div className="logo">HOSPITALLL</div>
        </div>
    <div className="LOGIN">
    
       <div className="tabs">
         <div className={toggleState===1?"tab-focused":"tab"} onClick={()=>setToggle(1)}>PATIENT</div>
         <div className={toggleState===2?"tab-focused":"tab"} onClick={()=>setToggle(2)}>HOSPITAL</div>

       </div>
    <div className="container">
        <div className="header">
         Log In
        </div>

        <button type="button" className="metamask" id='connectWallet' value="Connect Wallet" onClick={connectWalletHandler}>  
         Continue with Metamask
       </button>

       

    </div>

   </div>
   </div>
    
  )
}

export default Loginpage