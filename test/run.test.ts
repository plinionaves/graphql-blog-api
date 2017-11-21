import { db } from './test-utils';

db.sequelize.sync({force: true})
    .then(() => run());