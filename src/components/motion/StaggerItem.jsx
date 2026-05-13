import { motion } from 'framer-motion';
import { fadeUp } from '@lib/motionVariants';

export default function StaggerItem({ as: Tag = 'div', className = '', children, ...rest }) {
  const MotionTag = motion[Tag] ?? motion.div;
  return (
    <MotionTag className={className} variants={fadeUp} {...rest}>
      {children}
    </MotionTag>
  );
}
