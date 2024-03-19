export type CreatingResponseModel =
  | {
      isSuccess: boolean;
      index: number;
    }
  | {
      isFailed: boolean;
    };
