import React from 'react';
import Info from './info';
import Qualification from './qual';


class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {"name":"sachin",
                  "address":"Bengaluru",
                  "qualification":[
                    {"degree":"BCA","percentage":"88"}
                  ]
    }
  }

  render() {
    return (
      <React.Fragment>
        <Info
          name={this.state.name}
          address={this.state.address}
          />
          <Qualification
            qualification={this.state.qualification}
            
          />
        
        
      </React.Fragment>
    );
  }

}

export default App;