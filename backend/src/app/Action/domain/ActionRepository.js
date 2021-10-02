const BaseRepository = require("../../../shared/app/domain/BaseRepository");
const Action = require("./ActionModel");
class ActionRepository extends BaseRepository {
  constructor({
    db
  }) {
    super(db, "Action", Action);
  }

}

module.exports = ActionRepository;