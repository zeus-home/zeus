import Client from './Client'

export default class MonitorClient extends Client {
    
    constructor(id: string) {
        super(id);
        this.isMonitor = true;
    }

}
