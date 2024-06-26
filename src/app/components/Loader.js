import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const loaderContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, yoyo: Infinity } },
};

const Loader = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Change this duration as needed
    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <motion.div
      className="loader"
      initial="hidden"
      animate="visible"
      variants={loaderContainerVariants}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#000',
        color: '#fff',
        fontSize: '2.5rem',
        textAlign: 'center',
      }}
    >
      <motion.div variants={textVariants}>👋 Hi, I'am Jeetendra Kumar Barman</motion.div>
    </motion.div>
  );
};

export default Loader;
