import { StatsD } from 'node-statsd';
import dotenv from 'dotenv';

dotenv.config();

const environment = process.env.NODE_ENV || 'development';
const graphite = process.env.GRAPHITE_HOST;

if (graphite === null) {
    throw new Error('Graphite host not configured!');
}

const options = {
    host: graphite,
    port: 8125,
    prefix: `${environment}.slacker.`,
};

const metrics = new StatsD(options);

export default metrics;