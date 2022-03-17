import { Post } from "../entities/post";
import { MyContext } from "src/types";
import { Arg, Ctx, Int, Query, Resolver } from "type-graphql";

@Resolver()
export class PostResolver {
    @Query(()=> [Post])
    posts(
        @Ctx() {em}: MyContext
    ) {
        return em.find(Post, {});
    }

    @Query(()=> Post, {nullable: true})
    post(
        @Arg('id', ()=> Int) id: number,
        @Ctx() {em}: MyContext
    ) {
        return em.findOne(Post, {id});
    }
}