import { Link } from 'react-router-dom';
import { siteConfig } from '@lib/siteConfig';
import Container from '@components/primitives/Container';
import logo from '@assets/KCG-logo.png';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <Link to="/" className={styles.brand} aria-label={siteConfig.brand.full}>
              <img src={logo} alt={siteConfig.brand.full} className={styles.brandLogo} />
            </Link>
            <p className={styles.description}>{siteConfig.brand.description}</p>
          </div>

          <FooterColumn title="Connect" items={siteConfig.social.connect} />
          <FooterColumn title="Community" items={siteConfig.social.community} />
          <FooterColumn title="Legal" items={siteConfig.social.legal} />
        </div>

        <div className={styles.meta}>
          <span>© {new Date().getFullYear()} {siteConfig.brand.full}.</span>
          <span className={styles.tag}>{siteConfig.brand.tagline}</span>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({ title, items }) {
  return (
    <div className={styles.column}>
      <h4 className={styles.colTitle}>{title}</h4>
      <ul className={styles.colList}>
        {items.map((item) => (
          <li key={item.label}>
            {item.to ? (
              <Link to={item.to} className={styles.colLink}>
                {item.label}
              </Link>
            ) : (
              <a href={item.href} className={styles.colLink}>
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
