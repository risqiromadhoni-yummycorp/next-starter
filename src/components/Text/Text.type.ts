export type TextVariant =
  | 'x-x-large'
  | 'x-large'
  | 'large'
  | 'micro'
  | 'regular'
  | 'small'
  | 'super-small'
  | 'title1'
  | 'title2'
  | 'title3'
  | 'subtitle';
interface TextProps {
  tag: keyof JSX.IntrinsicElements;
  label?: string;
  variant: TextVariant | Array<TextVariant>;
  weight:
    | 'thin'
    | 'extralight'
    | 'light'
    | 'normal'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'extrabold'
    | 'black';
  a: OmitBy<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'className'>;
}
export type DefaultTextProps = Pick<TextProps, 'variant' | 'tag' | 'weight'>;
export type TextPropsType = TagAttribute<PartialBy<TextProps, 'variant' | 'tag' | 'weight' | 'a'>>;
