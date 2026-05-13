import { motion } from 'framer-motion';
import { fadeUp } from '@lib/motionVariants';

export default function FadeIn({
  as: Tag = 'div',
  delay = 0,
  y = 24,
  once = true,
  amount = 0.2,
  className = '',
  children,
  ...rest
}) {
  const MotionTag = motion[Tag] ?? motion.div;

  const variants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
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

export { fadeUp };
