export enum StrapiFilterOperator {
  //** Equal **
  eq = '$eq',

  //** Equal (case-insensitive) **
  eqi = '$eqi',

  //** Not equal **
  ne = '$ne',

  //** Not equal (case-insensitive) **
  nei = '$nei',

  //** Less than **
  lt = '$lt',

  //** Less than or equal to **
  lte = '$lte',

  //** Greater than **
  gt = '$gt',

  //** Greater than or equal to **
  gte = '$gte',

  //** Included in an array **
  in = '$in',

  //** Not included in an array **
  notIn = '$notIn',

  //** Contains **
  contains = '$contains',

  //** Does not contain **
  notContains = '$notContains',

  //** Contains (case-insensitive) **
  containsi = '$containsi',

  //** Does not contain (case-insensitive) **
  notContainsi = '$notContainsi',

  //** Is null **
  null = '$null',

  //** Is not null **
  notNull = '$notNull',

  //** Is between **
  between = '$between',

  //** Starts with **
  startsWith = '$startsWith',

  //** Starts with (case-insensitive) **
  startsWithi = '$startsWithi',

  //** Ends with **
  endsWith = '$endsWith',

  //** Ends with (case-insensitive) **
  endsWithi = '$endsWithi',

  //** Joins the filters in an "or" expression **
  or = '$or',

  //** Joins the filters in an "and" expression **
  and = '$and',

  //** Joins the filters in an "not" expression **
  not = '$not',
}
