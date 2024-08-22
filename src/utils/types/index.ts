export type ParamsType<F extends Function> = F extends (...args: infer P) => any
  ? P
  : never;
