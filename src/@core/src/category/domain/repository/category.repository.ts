import {
  SearchParams as DefaultSearchParams,
  SearchResult as DefaultSearchResult,
  SerachableRepositoryInterface,
} from "../../../@seedwork/domain/repository/repository-contracts";
import Category from "../entities/category";

export namespace CategoryRepository {
  export type Filter = string;

  export class SearchParams extends DefaultSearchParams<Filter> {}
  export class SearchResult extends DefaultSearchResult<Category, Filter> {}

  export interface Repository
    extends SerachableRepositoryInterface<
      Category,
      Filter,
      SearchParams,
      SearchResult
    > {
    exists(name: string): Promise<boolean>;
  }
}

export default CategoryRepository;
