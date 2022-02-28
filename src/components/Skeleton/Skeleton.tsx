import classNames from 'classnames';
import { HTMLAttributes } from 'react';

import styles from './Skeleton.module.css';

const Square = ({ className = 'h-10 w-10', ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={classNames(className, styles['skeleton-square'])} {...props} />
);

const Circle = ({ className = 'h-10 w-10', ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={classNames(className, styles['skeleton-circle'])} {...props} />
);

const Triagle = ({ className = 'h-10 w-10', ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={classNames(className, styles['skeleton-triagle'])} {...props} />
);

const Skeleton = () => <Square />;

Skeleton.Square = Square;
Skeleton.Circle = Circle;
Skeleton.Triagle = Triagle;

export default Skeleton;
