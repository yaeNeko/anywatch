import dotenv from 'dotenv';

dotenv.config();

// Fonction pour récupérer une variable d'environnement et s'assurer qu'elle est définie
function getEnvVariable(key: string): string {
  const value = process.env[key];
  if (!value) {
    console.error(`❌ ERREUR: La variable d'environnement ${key} n'est pas définie.`);
    process.exit(1);
  }
  return value;
}

export const config = {
  jwtSecret: getEnvVariable("JWT_SECRET"),
  port: process.env.PORT || 3000,
  db_host: getEnvVariable("DB_HOST"),
  db_port: parseInt(getEnvVariable("DB_PORT")),  // Convertir le port en nombre
  db_user: getEnvVariable("DB_USER"),
  db_password: getEnvVariable("DB_PASSWORD"),
  db_name: getEnvVariable("DB_NAME"),
  // Nous n'utilisons plus DATABASE_URL car nous avons les variables séparées
};
