import React, { useState }from 'react';

function HomePage() {
  const [button, setButton] = useState();
  return(
    <button 
      type="button"
      onClick={e => {setButton(e.target.value)}}
      className="btn btn-primary"><h4>Je sors</h4>
    </button>
    
  )
}
export default HomePage;