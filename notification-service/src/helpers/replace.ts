export type Replace<T, R extends Partial<T>> = Omit<T, keyof R> & R;
