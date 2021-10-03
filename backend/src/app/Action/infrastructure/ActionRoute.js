module.exports = ({ server, ActionController }) => {
  const app = server.router();

  /**
   * @openapi
   * /Action/:
   *   get:
   *     tags:
   *      - Action
   *     description: Get all Actions
   *     responses:
   *       200:
   *         description: Returns a mysterious string.
   */
  app.get("/", ActionController.index.bind(ActionController));

  /**
   * @openapi
   * /Action/{id}:
   *   get:
   *     tags:
   *      - Action
   *     description: Get Action by id
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
  app.get("/:id", ActionController.show.bind(ActionController));

  /**
   * @openapi
   * /Action/:
   *   post:
   *     tags:
   *      - Action
   *     summary: Crate new Action
   *     operationId: addAction
   *     requestBody:
   *        required: true
   *        description: Action object that needs to be added to the store
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              required:
   *                - PostId
   *                - isLiked
   *                - userEmail
   *              properties:
   *                PostId:
   *                  type: integer
   *                isLiked:
   *                  type: boolean
   *                userEmail:
   *                  type: string
   *     responses:
   *       200:
   *         description: Returns a mysterious string.
   */
  app.post("/", ActionController.store.bind(ActionController));


  return app;
};
