/**
 * Make K properties in T optional
 */
type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

/**
 * Map action for redux reducers
 */
type ActionMap<M extends { [index: number | string | symbol]: unknown }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? { type: Key }
    : {
        type: Key;
        payload: M[Key];
      };
};

/**
 * Construct a type with the properties of T except for those in type K.
 */
type OmitBy<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

/**
 * Dynamic type get props from another react component
 */
type ComponentProps<T> = T extends React.ComponentType<infer P> | React.Component<infer P>
  ? JSX.LibraryManagedAttributes<T, P>
  : never;

/**
 * Dynamic html tag type with props
 */

type TagAttribute<T> = T & React.HTMLAttributes<HTMLOrSVGElement>;
