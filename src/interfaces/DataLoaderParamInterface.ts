import { GraphQLResolveInfo } from "graphql";

export interface DataLoaderParam<T> {

    key: T;
    info: GraphQLResolveInfo;

}