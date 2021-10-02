module.exports = ({ server, CommentController }) => {
  const app = server.router();

  /**
   * @openapi
   * /Comment/:
   *   get:
   *     tags:
   *      - Comment
   *     description: Get all Comments
   *     responses:
   *       200:
   *         description: Returns a mysterious string.
   */
  app.get("/", CommentController.index.bind(CommentController));

  /**
   * @openapi
   * /Comment/{id}:
   *   get:
   *     tags:
   *      - Comment
   *     description: Get Comment by id
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
  app.get("/:id", CommentController.show.bind(CommentController));

  /**
   * @openapi
   * /Comment/:
   *   post:
   *     tags:
   *      - Comment
   *     summary: Crate new Comment
   *     operationId: addComment
   *     requestBody:
   *        required: true
   *        description: Comment object that needs to be added to the store
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              required:
   *                - PostId
   *                - name
   *                - content
   *                - userEmail
   *              properties:
   *                PostId:
   *                  type: integer
   *                name:
   *                  type: string
   *                content:
   *                  type: string
   *                userEmail:
   *                  type: string
   *     responses:
   *       200:
   *         description: Returns a mysterious string.
   */
  app.post("/", CommentController.store.bind(CommentController));

  /**
   * @openapi
   * /Comment/{id}:
   *   put:
   *     tags:
   *      - Comment
   *     description: Update Comment by id
   *     parameters:
   *        - name: id
   *          description: Id to get by
   *          in: path
   *          required: true
   *          schema:
   *           type: integer
   *     requestBody:
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                name:
   *                  type: string
   *                content:
   *                  type: string
   *     responses:
   *       200:
   *         description: Returns a mysterious string.
   */
  app.put("/:id", CommentController.edit.bind(CommentController));

/**
 * @openapi
 * "/Comment/{id}":
 *   delete:
 *     summary: Delete Comment by id
 *     operationId: DeleteComment
 *     tags: [ Comment ]
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
  app.delete("/:id", CommentController.delete.bind(CommentController));

  return app;
};
