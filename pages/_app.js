import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import ScrollProgress from '../components/motion/ScrollProgress';
import '../styles/globals.css';

const pageTransition = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[120] focus:bg-accent focus:px-4 focus:py-2 focus:font-bold focus:uppercase focus:text-accent-ink"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={router.pathname} {...pageTransition}>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </MotionConfig>
  );
}

export default MyApp;
