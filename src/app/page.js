import Uploader from '@/components/Uploader.js';
import Footer from '@/components/Footer.js';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Uploader />
      <Footer />
    </main>
  )
};
