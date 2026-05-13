import styles from './Container.module.css';

export default function Container({ as: Tag = 'div', size = 'default', className = '', children, ...rest }) {
  const sizeClass = size === 'narrow' ? styles.narrow : styles.default;
  return (
    <Tag className={`${styles.container} ${sizeClass} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
