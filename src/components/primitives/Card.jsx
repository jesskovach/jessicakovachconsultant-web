import styles from './Card.module.css';

export default function Card({
  as: Tag = 'article',
  tone = 'default',
  hoverable = true,
  className = '',
  children,
  ...rest
}) {
  const toneClass = styles[`tone_${tone}`] ?? '';
  return (
    <Tag
      className={`${styles.card} ${toneClass} ${hoverable ? styles.hoverable : ''} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  );
}
