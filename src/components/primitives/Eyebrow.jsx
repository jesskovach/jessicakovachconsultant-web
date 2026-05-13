import styles from './Eyebrow.module.css';

export default function Eyebrow({ children, className = '', ...rest }) {
  return (
    <span className={`${styles.eyebrow} ${className}`.trim()} {...rest}>
      {children}
    </span>
  );
}
