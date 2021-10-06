const { Router } = require("express");

module.exports = ({ PostController }) => {
  const app = Router(); //server.router();

  /**
   * @openapi
   * /Post/:
   *   get:
   *     tags: [ Post ]
   *     description: Get all Posts
   *     parameters:
   *        - name: _page
   *          description: page number
   *          in: query
   *          schema:
   *            type: integer
   *        - name: _limit
   *          description: limit number
   *          in: query
   *          schema:
   *            type: integer
   *     responses:
   *       200:
   *         description: Returns a mysterious string.
   */
  app.get("/", PostController.index.bind(PostController));

  /**
   * @openapi
   * /Post/:
   *   post:
   *     tags: [ Post ]
   *     summary: Crate new Post
   *     operationId: addPost
   *     requestBody:
   *      description: Post object that needs to be added to the store
   *      content:
   *        application/json:
   *         schema:
   *           type: object
   *           properties:
   *             name:
   *               type: string
   *             content:
   *               type: string
   *             userEmail:
   *               type: string
   *           xml:
   *             name: Post
   *      required: true
   *     responses:
   *       200:
   *         description: Returns a mysterious string.
   */
  app.post("/", PostController.store.bind(PostController));

  return app;
};
