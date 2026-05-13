import { motion } from 'framer-motion';
import { staggerContainer } from '@lib/motionVariants';

export default function Stagger({
  as: Tag = 'div',
  once = true,
  amount = 0.15,
  delay = 0.05,
  stagger = 0.08,
  className = '',
  children,
  ...rest
}) {
  const MotionTag = motion[Tag] ?? motion.div;

  const variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

export { staggerContainer };
