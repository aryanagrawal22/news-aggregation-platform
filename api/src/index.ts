import {MikroORM} from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/post";
import microConfig from "./mikro-orm.config";

const main = async() => {
    const orm = await MikroORM.init(microConfig);
    await orm.getMigrator().up();

    const post = orm.em.fork({}).create(Post, {title: "my second post"});
    await orm.em.persistAndFlush(post);
}

main();