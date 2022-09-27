import React, {useEffect, useState} from 'react';

function App() {

  const [backEndData, setBackEndData] = useState([{}])

  useEffect(() => {
    fetch("/api")
      .then(
        response => response.json()
      )
      .then(
        data => {
          console.log(data);
          setBackEndData(data)
        }
      )
  }, [])

  return (<>
    <div>
      {(typeof backEndData === 'undefined') ? (<p>Loading...</p>) : 
      
        (backEndData["artistDisplayName"] ?  <div className = "items" >
        <div id = "name" >{backEndData["artistDisplayName"]}</div> 
        <div id = "title" >{backEndData["title"]}</div>
        <div id = "date" >{backEndData["objectDate"]}</div> 
        <div id = "image"><img src={backEndData["primaryImageSmall"]} alt="painting"/></div> 
        </div>
        
        
        : (<p>Loading...</p>) )}

      
        </div>
  </>)
}

export default App;