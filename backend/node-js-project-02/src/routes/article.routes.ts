import express from "express";
import * as Middleware from "../middlewares";
import * as ArticleController from "../controllers/article.controller";

const router = express.Router();

router.post('/', Middleware.verifyToken, ArticleController.createArticle);

router.get('/', ArticleController.getAllArticles)

router.get('/:username', ArticleController.getArticleByUsername)

router.get('/get/my', Middleware.verifyToken, ArticleController.getMyArticles)

router.put('/', Middleware.verifyToken, ArticleController.updateArticle)

router.delete('/:id', Middleware.verifyToken, ArticleController.deleteArticle)

export default router;