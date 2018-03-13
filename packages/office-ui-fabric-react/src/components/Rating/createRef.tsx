export interface IRefFunction<TInterface> {
  (ref: TInterface): void;
  value?: TInterface;
}

export function createRef<TInterface>(): IRefFunction<TInterface> {
  return (ref: TInterface): void => {
    this.value = ref;
  };
}
