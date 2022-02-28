import { classChecker } from '@utils/checker';
import classNames from 'classnames';
import React from 'react';

import type { DefaultTextProps, TextPropsType, TextVariant } from './Text.type';

/**
 * Core Of text and anchor tag in hrml react
 * @access allow tag `p`, `pre`, `a`, `head`
 * @todo supported props ref
 * @param param0
 * @returns
 */
const Text: React.FC<TextPropsType> = ({ tag: AppText = 'p', ...props }) => {
  const { label, variant, weight, children, className, a, title, ...propsTag } = props;

  const tagClasses = classNames(
    {
      'text-x-x-large': classChecker<TextPropsType['variant'], TextVariant>(variant, 'x-x-large'),
      'text-x-large': classChecker<TextPropsType['variant'], TextVariant>(variant, 'x-large'),
      'text-large': classChecker<TextPropsType['variant'], TextVariant>(variant, 'large'),
      'text-regular': classChecker<TextPropsType['variant'], TextVariant>(variant, 'regular'),
      'text-small': classChecker<TextPropsType['variant'], TextVariant>(variant, 'small'),
      'text-super-small': classChecker<TextPropsType['variant'], TextVariant>(
        variant,
        'super-small',
      ),
      'text-micro': classChecker<TextPropsType['variant'], TextVariant>(variant, 'micro'),
      title1: classChecker<TextPropsType['variant'], TextVariant>(variant, 'title1'),
      title2: classChecker<TextPropsType['variant'], TextVariant>(variant, 'title2'),
      title3: classChecker<TextPropsType['variant'], TextVariant>(variant, 'title3'),
      subtitle: classChecker<TextPropsType['variant'], TextVariant>(variant, 'subtitle'),
      'font-thin': weight === 'thin',
      'font-extralight': weight === 'extralight',
      'font-light': weight === 'light',
      'font-normal': weight === 'normal',
      'font-medium': weight === 'medium',
      'font-semibold': weight === 'semibold',
      'font-bold': weight === 'bold',
      'font-extrabold': weight === 'extrabold',
      'font-black': weight === 'black',
    },
    className,
  );

  if (AppText === 'a')
    return (
      <a {...Object.assign(a || {}, { title: String(label || title) })} className={tagClasses}>
        {children ?? label}
      </a>
    );

  return (
    <AppText {...Object.assign(propsTag, { title: String(label || title) })} className={tagClasses}>
      {children ?? label}
    </AppText>
  );
};

const defaultProps: DefaultTextProps = {
  tag: 'p',
  variant: 'regular',
  weight: 'normal',
};

Text.defaultProps = defaultProps;

export default Text;
