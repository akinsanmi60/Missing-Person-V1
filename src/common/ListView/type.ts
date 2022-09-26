import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export type ListProp = {
  isLoading: boolean;
  isError: boolean;
  isRefetching: boolean;
  displayPeople: JSX.Element[];
  changePage: ({ selected }: { selected: number }) => void;
  pageCount: number;
  refetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined,
  ) => Promise<QueryObserverResult<AxiosResponse<any, any>, unknown>>;
};
