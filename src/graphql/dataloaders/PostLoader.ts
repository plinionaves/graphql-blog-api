import { PostModel, PostInstance } from "../../models/PostModel";
import { DataLoaderParam } from "../../interfaces/DataLoaderParamInterface";
import { RequestedFields } from "../ast/RequestedFields";

export class PostLoader {

    static batchPosts(Post: PostModel, params: DataLoaderParam<number>[], requestedFields: RequestedFields): Promise<PostInstance[]> {
        
        let ids: number[] = params.map(param => param.key);

        return Promise.resolve(
            Post.findAll({
                where: { id: { $in: ids } },
                attributes: requestedFields.getFields(params[0].info, {keep: ['id'], exclude: ['comments']})
            })
        );
    }

}