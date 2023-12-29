import React, {useState} from 'react';

const ChocolateList = (props) => {

  // defining state
  //      ---- GETTER ----     ------ SETTER ------     - DEFAULT VALUE -
  const [chocolateVisibility, setChocolateVisibility] = useState(true);

  const chocolateData = [
    "Cadbury Chocolate Bar",
    "Lindt 90% Dark Chocolate",
    "Hershey's Special Dark",
    "Lily's Sugar Free Chocolate",
    "Crunch",
    "Toblerone"
  ]

  const chocolateClick = () => {
    // ---- Step 1 ----
    // secrete message 
    // console.log(`hear ye, hear ye, chocolate is the greatest!`)

    // ---- Step 2 ----
    // when user clicks h1
    // changes chocolateVisibility
    // to it's inverse 
    // !true => false
    // !false => true
    const newChocolateVisibility = !chocolateVisibility;
    setChocolateVisibility(newChocolateVisibility);
  }

  // ---- Step 3 ----
  // when chocolateVisibility is true 
  // map through the list to display later
  // setting chocolateListItems to null 
  // when chocolateVisibility is false
  let chocolateListItems = null; 
  if(chocolateVisibility){
    chocolateListItems = chocolateData.map((chocolate) => {
      return(
        <li className='chocolate-bar'>
          {chocolate}
        </li>
      )
    })
  }
  // ---- Step 2 ----
  // console logging chocolateVisibility 
  // to make sure value is changing 
  console.log(chocolateVisibility);
  return(
    <div id="chocolate-app">
      <h1 className='app-header' onClick={chocolateClick}>CHOCOLATE ONLY CABINET</h1>
      <ul className='bars'>
        {chocolateListItems}
      </ul>
    </div>
  )
}

export default ChocolateList;
