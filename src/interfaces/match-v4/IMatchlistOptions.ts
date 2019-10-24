interface IMatchlistOptions {
  /** Champion ID for filtering the matchlist. */
  champion?: number;

  /** Queue ID for filtering the matchlist. */
  queue?: number;

  /** Season ID for filtering the matchlist. */
  season?: number;

  /**
   * The end time to use for filtering matchlist specified as epoch milliseconds.
   * If beginTime is specified, but not endTime, then endTime defaults to the the current unix timestamp in milliseconds.
   * If endTime is specified, but not beginTime, then beginTime defaults to the start of the account's match history.
   * If both are specified, then endTime should be greater than beginTime.
   */
  endTime?: number;

  /**
   * The begin time to use for filtering matchlist specified as epoch milliseconds.
   * If beginTime is specified, but not endTime, then endTime defaults to the the current unix timestamp in milliseconds.
   * If endTime is specified, but not beginTime, then beginTime defaults to the start of the account's match history.
   * If both are specified, then endTime should be greater than beginTime.
   */
  beginTime?: number;

  /**
   * The end index to use for filtering matchlist.
   * If beginIndex is specified, but not endIndex, then endIndex defaults to beginIndex+100.
   * If endIndex is specified, but not beginIndex, then beginIndex defaults to 0.
   * If both are specified, then endIndex must be greater than beginIndex.
   * The maximum range allowed is 100, otherwise a 400 error code is returned.
   */
  endIndex?: number;

  /**
   * The begin index to use for filtering matchlist.
   * If beginIndex is specified, but not endIndex, then endIndex defaults to beginIndex+100.
   * If endIndex is specified, but not beginIndex, then beginIndex defaults to 0.
   * If both are specified, then endIndex must be greater than beginIndex.
   * The maximum range allowed is 100, otherwise a 400 error code is returned.
   */
  beginIndex?: number;
}
