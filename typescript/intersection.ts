type Combined = { a: number } & { b: string };
type Conflicting = { a: number } & { a: string };