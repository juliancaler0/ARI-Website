declare namespace __WebpackModuleApi {
  interface RequireContext {
    keys(): string[];
    <T>(id: string): T;
  }
}

declare const require: {
  context(
    directory: string,
    useSubdirectories: boolean,
    regExp: RegExp
  ): __WebpackModuleApi.RequireContext;
};
