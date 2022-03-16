import { __prod__ } from "./constants";
import { Post } from "./entities/post";
import { Options } from '@mikro-orm/core';
import path from "path";

const config: Options = {
    migrations: {
        path: path.join(__dirname, './migrations'), 
        glob: '!(*.d).{js,ts}',
    },
    entities: [Post],
    dbName: 'news_aggregation',
    type: 'postgresql',
    debug:  !__prod__,
    user: 'postgres',
    password: 'postgres',
    allowGlobalContext: true,
};

export default config;