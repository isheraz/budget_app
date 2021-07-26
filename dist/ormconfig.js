"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'budget_app',
    entities: ['dist/**/*.entity.js'],
    synchronize: true,
};
exports.default = config;
//# sourceMappingURL=ormconfig.js.map