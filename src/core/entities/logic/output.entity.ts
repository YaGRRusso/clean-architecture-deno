// deno-lint-ignore-file no-empty-interface
// import Error from "@core/entities/logic/error.entity.ts";

// export default interface Output<T> extends
//   Promise<{
//     data: T | null;
//     error: Error | null;
//   }> {}

export default interface Output<T> extends Promise<T> {}
