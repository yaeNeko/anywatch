const { Client } = require('pg');
const client = new Client({
  connectionString: process.env.DATABASE_URL, // Assure-toi que cette variable d'environnement est mise à jour avec l'URL de Railway
});
client.connect();
