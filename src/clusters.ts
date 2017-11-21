import * as cluster from 'cluster';
import { CpuInfo, cpus } from 'os';

class Clusters {

    private cpus: CpuInfo[];

    constructor() {
        this.cpus = cpus();
        this.init();
    }

    init(): void {
        if (cluster.isMaster) {

            this.cpus.forEach(() => cluster.fork());

            cluster.on('listening', (worker: cluster.Worker) => {
                console.log('Cluster %d connected', worker.process.pid);                
            });

            cluster.on('disconnect', (worker: cluster.Worker) => {
                console.log('Cluster %d disconnected', worker.process.pid);                
            });

            cluster.on('exit', (worker: cluster.Worker) => {
                console.log('Cluster %d exited', worker.process.pid);
                cluster.fork();
            });

        } else {
            require('./index');
        }
    }

}

export default new Clusters();