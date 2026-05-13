import { motion } from 'framer-motion';
import { pageTransition } from '@lib/motionVariants';

export default function PageTransition({ children, className = '' }) {
  return (
    <motion.main
      className={className}
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
    >
      {children}
    </motion.main>
  );
}
