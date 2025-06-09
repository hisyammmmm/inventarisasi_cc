import { pgDb } from './config/database.js';

pgDb.authenticate()
  .then(() => console.log('Connection successful!'))
  .catch(err => console.error('Connection failed:', err));