import { Link } from 'react-router-dom';
import { siteConfig } from '@lib/siteConfig';
import Container from '@components/primitives/Container';
import logo from '@assets/KCG-logo.png';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <Link to="/" className={styles.brand} aria-label={siteConfig.brand.full}>
              <img src={logo} alt={siteConfig.brand.full} className={styles.brandLogo} />
            </Link>
            <p className={styles.description}>{siteConfig.brand.description}</p>
          </div>

          <div className={styles.linksCol}>
            <ul className={styles.socialRow} aria-label="Social media links">
              {siteConfig.social.icons.map(({ label, href, svg }) => (
                <li key={label}>
                  <a
                    href={href}
                    className={styles.socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label} — opens in new tab`}
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d={svg} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>

            <ul className={styles.legalRow} aria-label="Legal links">
              {siteConfig.social.legal.map(({ label, href, to }) => (
                <li key={label}>
                  {to ? (
                    <Link to={to} className={styles.legalLink}>
                      {label}
                    </Link>
                  ) : (
                    <a href={href} className={styles.legalLink}>
                      {label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.meta}>
          <span>© {new Date().getFullYear()} {siteConfig.brand.full}.</span>
          <span className={styles.tag}>{siteConfig.brand.tagline}</span>
        </div>
      </Container>
    </footer>
  );
}
