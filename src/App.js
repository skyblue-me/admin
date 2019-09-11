import React from 'react';
import 'style/text.less'
import { Button } from 'antd';
function App(props) {
  return (
    <div className="App">
      {props.children}
    </div>
  );
}

export default App;
