// Code generated by Prisma (prisma@1.30.0). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  topic: (where?: TopicWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  topic: (where: TopicWhereUniqueInput) => TopicPromise;
  topics: (
    args?: {
      where?: TopicWhereInput;
      orderBy?: TopicOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Topic>;
  topicsConnection: (
    args?: {
      where?: TopicWhereInput;
      orderBy?: TopicOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => TopicConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createTopic: (data: TopicCreateInput) => TopicPromise;
  updateTopic: (
    args: { data: TopicUpdateInput; where: TopicWhereUniqueInput }
  ) => TopicPromise;
  updateManyTopics: (
    args: { data: TopicUpdateManyMutationInput; where?: TopicWhereInput }
  ) => BatchPayloadPromise;
  upsertTopic: (
    args: {
      where: TopicWhereUniqueInput;
      create: TopicCreateInput;
      update: TopicUpdateInput;
    }
  ) => TopicPromise;
  deleteTopic: (where: TopicWhereUniqueInput) => TopicPromise;
  deleteManyTopics: (where?: TopicWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  topic: (
    where?: TopicSubscriptionWhereInput
  ) => TopicSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type TopicOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "author_ASC"
  | "author_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "content_ASC"
  | "content_DESC"
  | "votes_ASC"
  | "votes_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface TopicCreateInput {
  id?: ID_Input;
  author?: String;
  content: String;
  votes?: Int;
}

export interface TopicWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  author?: String;
  author_not?: String;
  author_in?: String[] | String;
  author_not_in?: String[] | String;
  author_lt?: String;
  author_lte?: String;
  author_gt?: String;
  author_gte?: String;
  author_contains?: String;
  author_not_contains?: String;
  author_starts_with?: String;
  author_not_starts_with?: String;
  author_ends_with?: String;
  author_not_ends_with?: String;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  updatedAt?: DateTimeInput;
  updatedAt_not?: DateTimeInput;
  updatedAt_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_lt?: DateTimeInput;
  updatedAt_lte?: DateTimeInput;
  updatedAt_gt?: DateTimeInput;
  updatedAt_gte?: DateTimeInput;
  content?: String;
  content_not?: String;
  content_in?: String[] | String;
  content_not_in?: String[] | String;
  content_lt?: String;
  content_lte?: String;
  content_gt?: String;
  content_gte?: String;
  content_contains?: String;
  content_not_contains?: String;
  content_starts_with?: String;
  content_not_starts_with?: String;
  content_ends_with?: String;
  content_not_ends_with?: String;
  votes?: Int;
  votes_not?: Int;
  votes_in?: Int[] | Int;
  votes_not_in?: Int[] | Int;
  votes_lt?: Int;
  votes_lte?: Int;
  votes_gt?: Int;
  votes_gte?: Int;
  AND?: TopicWhereInput[] | TopicWhereInput;
  OR?: TopicWhereInput[] | TopicWhereInput;
  NOT?: TopicWhereInput[] | TopicWhereInput;
}

export interface TopicUpdateInput {
  author?: String;
  content?: String;
  votes?: Int;
}

export interface TopicUpdateManyMutationInput {
  author?: String;
  content?: String;
  votes?: Int;
}

export interface TopicSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: TopicWhereInput;
  AND?: TopicSubscriptionWhereInput[] | TopicSubscriptionWhereInput;
  OR?: TopicSubscriptionWhereInput[] | TopicSubscriptionWhereInput;
  NOT?: TopicSubscriptionWhereInput[] | TopicSubscriptionWhereInput;
}

export type TopicWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface NodeNode {
  id: ID_Output;
}

export interface TopicEdge {
  node: Topic;
  cursor: String;
}

export interface TopicEdgePromise extends Promise<TopicEdge>, Fragmentable {
  node: <T = TopicPromise>() => T;
  cursor: () => Promise<String>;
}

export interface TopicEdgeSubscription
  extends Promise<AsyncIterator<TopicEdge>>,
    Fragmentable {
  node: <T = TopicSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface Topic {
  id: ID_Output;
  author: String;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
  content: String;
  votes: Int;
}

export interface TopicPromise extends Promise<Topic>, Fragmentable {
  id: () => Promise<ID_Output>;
  author: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  content: () => Promise<String>;
  votes: () => Promise<Int>;
}

export interface TopicSubscription
  extends Promise<AsyncIterator<Topic>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  author: () => Promise<AsyncIterator<String>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  content: () => Promise<AsyncIterator<String>>;
  votes: () => Promise<AsyncIterator<Int>>;
}

export interface TopicSubscriptionPayload {
  mutation: MutationType;
  node: Topic;
  updatedFields: String[];
  previousValues: TopicPreviousValues;
}

export interface TopicSubscriptionPayloadPromise
  extends Promise<TopicSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = TopicPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = TopicPreviousValuesPromise>() => T;
}

export interface TopicSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<TopicSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = TopicSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = TopicPreviousValuesSubscription>() => T;
}

export interface TopicConnection {
  pageInfo: PageInfo;
  edges: TopicEdge[];
}

export interface TopicConnectionPromise
  extends Promise<TopicConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<TopicEdge>>() => T;
  aggregate: <T = AggregateTopicPromise>() => T;
}

export interface TopicConnectionSubscription
  extends Promise<AsyncIterator<TopicConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<TopicEdgeSubscription>>>() => T;
  aggregate: <T = AggregateTopicSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateTopic {
  count: Int;
}

export interface AggregateTopicPromise
  extends Promise<AggregateTopic>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateTopicSubscription
  extends Promise<AsyncIterator<AggregateTopic>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface TopicPreviousValues {
  id: ID_Output;
  author: String;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
  content: String;
  votes: Int;
}

export interface TopicPreviousValuesPromise
  extends Promise<TopicPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  author: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  content: () => Promise<String>;
  votes: () => Promise<Int>;
}

export interface TopicPreviousValuesSubscription
  extends Promise<AsyncIterator<TopicPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  author: () => Promise<AsyncIterator<String>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  content: () => Promise<AsyncIterator<String>>;
  votes: () => Promise<AsyncIterator<Int>>;
}

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Topic",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
