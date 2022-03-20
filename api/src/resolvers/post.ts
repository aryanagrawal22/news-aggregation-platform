import { Post } from "../entities/post";
import { MyContext } from "src/types";
import { Arg, Ctx, Int, Mutation, Query, Resolver } from "type-graphql";

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

    @Mutation(()=> Post)
    async createPost(
        @Arg('title', ()=> String) title: string,
        @Ctx() {em}: MyContext
    ) {
        const post = em.create(Post, {title})
        await em.persistAndFlush(post);
        return post;
    }

    @Mutation(()=> Post, {nullable: true})
    async updatePost(
        @Arg('id', ()=> Int) id: number ,
        @Arg('title', ()=> String) title: string,
        @Ctx() {em}: MyContext
    ): Promise<Post | null> {
        const post = await em.findOne(Post, {id})
        if(!post){
            return null;
        }
        post.title = title;
        await em.persistAndFlush(post);
        return post;
    }
}