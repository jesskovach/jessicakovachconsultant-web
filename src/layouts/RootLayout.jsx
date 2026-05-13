import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import useScrollToTop from '@hooks/useScrollToTop';
import styles from './RootLayout.module.css';

export default function RootLayout({ children }) {
  useScrollToTop();
  return (
    <div className={styles.shell}>
      <Navbar />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
}
