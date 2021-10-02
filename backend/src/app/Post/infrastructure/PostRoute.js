module.exports = ({
  server,
  PostController
}) => {
  const app = server.router();

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
   * /Post/{id}:
   *   get:
   *     tags:
   *      - Post 
   *     description: Get Post by id
   *     parameters:
   *        - name: id
   *          description: Id to get by
   *          in: path
   *          required: true
   *          schema:
   *            type: integer
   *     responses:
   *       200:
   *         description: Returns a mysterious string.
   */
  app.get("/:id", PostController.show.bind(PostController));

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

  /**
   * @openapi
   * /Post/{id}:
   *   put:
   *     tags: 
   *      - Post
   *     description: Update Post by id
   *     parameters:
   *        - name: id
   *          description: Id to get by
   *          in: path
   *          required: true
   *          schema:
   *            type: integer
   *     requestBody:
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                likes:
   *                  type: integer
   *                dislikes:
   *                  type: integer
   *     responses:
   *       200:
   *         description: Returns a mysterious string.
   */
  app.put("/:id", PostController.edit.bind(PostController));

  /**
   * @openapi
   * "/Post/{id}":
   *   delete:
   *     summary: Delete Post by id
   *     operationId: DeletePost
   *     tags:  
   *       - Post 
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         schema:
   *           type: integer
   *     responses:
   *       "200":
   *         description: successful operation
   */
  app.delete("/:id", PostController.delete.bind(PostController));

  return app;
};