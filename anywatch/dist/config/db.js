"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
// Charger les variables d'environnement à partir du fichier .env
dotenv_1.default.config();
// Configuration de la connexion à la base de données en utilisant les variables d'environnement individuelles
const client = new pg_1.Client({
    host: process.env.DB_HOST, // Le nom de l'hôte
    port: parseInt(process.env.DB_PORT || "5432"), // Le port de la base de données, avec une valeur par défaut (5432)
    user: process.env.DB_USER, // Le nom d'utilisateur de la base de données
    password: process.env.DB_PASSWORD, // Le mot de passe de la base de données
    database: process.env.DB_NAME, // Le nom de la base de données
});
// Connexion à la base de données
client
    .connect()
    .then(() => {
    console.log("Connected to the database");
})
    .catch((err) => {
    console.error("Connection error", err.stack);
});
// Exporter le client pour l'utiliser ailleurs dans le projet
exports.default = client;
