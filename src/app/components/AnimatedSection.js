import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({ children, variants }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={variants}
  >
    {children}
  </motion.div>
);

export default AnimatedSection;
