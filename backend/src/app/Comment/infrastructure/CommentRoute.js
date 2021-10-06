const { Router } = require("express");

module.exports = ({ CommentController }) => {
  const app = Router();

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

  return app;
};
