import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config()

const {Client} = pkg;

const con = new Client ({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

con.connect().then(() => console.log('connected to database')).catch((error) => {
  console.error('failed to connect to database', error)
  process.exit(1)
}) 

export default con