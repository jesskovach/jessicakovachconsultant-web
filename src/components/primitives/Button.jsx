import { Link } from 'react-router-dom';
import styles from './Button.module.css';

export default function Button({
  variant = 'primary',
  size = 'md',
  to,
  href,
  type = 'button',
  className = '',
  children,
  ...rest
}) {
  const classes = `${styles.button} ${styles[`variant_${variant}`]} ${styles[`size_${size}`]} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        <span>{children}</span>
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...rest}>
      <span>{children}</span>
    </button>
  );
}
