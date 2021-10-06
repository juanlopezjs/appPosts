const { Router } = require("express");

module.exports = ({ ActionController }) => {
  const app = Router();

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
