import { Device } from '../../src/models/models';

import * as React from 'react';
import './App.css';
import { subscribe } from './Subscriber';

class App extends React.Component<any, any> {
  
  public state = {
    payload: 'No Data received',
    devices: [] as Device[]
  }

  componentDidMount() {
    subscribe((err: any, state: any) => {
      this.setState({
        payload: "",
        devices: state.devices
      })
    })
  }

  public render() {
    const { devices, payload } = this.state
    return (
      <div>
        {payload}
        
        <ol>
          {
            devices.map((device) => {
              <li>{device.friendly_name}</li>
            })
          }
        </ol>
      </div>
    );
  }
}

export default App;
