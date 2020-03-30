import React from 'react'

import ColumnView from './ColumnView'
import HoardAssistant from './HoardAssistant'
import InfoContainer from './InfoContainer'
import './App.css'
import './Header.css'

function App() {
  return (
    <div className="App">
      <ColumnView>
          <InfoContainer />
          <HoardAssistant />
      </ColumnView>
    </div>
  );
}



export default App;
