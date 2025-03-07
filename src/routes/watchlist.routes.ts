import { Router } from "express";
import {
  getTopSeries,
  getWatchlist,
} from "../controllers/watchlist.controller";
import { getAllWatchlists } from "../controllers/watchlist.controller";
import { getSeriesInWatchlist } from "../controllers/watchlist.controller";

const router = Router();

// Route pour récupérer les séries et animés dans une watchlist spécifique
router.get("/:id", getWatchlist);

// Route pour récupérer toutes les watchlists d'un utilisateur
router.get("/user/:userId", getAllWatchlists);

// Route pour récupérer les séries dans une watchlist
router.get("/:watchlistId/series", getSeriesInWatchlist);

// Route pour Récupérer le TOP 5 des plus ajoutés en watchlist
router.get("/series/top", getTopSeries);

export default router;
