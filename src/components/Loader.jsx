import { motion } from 'framer-motion';

const loaderVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { duration: 3 },
  },
  exit: { opacity: 0, transition: { duration: 1 } },
};

const Loader = ({ text }) => (
  <motion.div
    className="fixed inset-0 flex items-center justify-center z-50 flex-col bg-secondary backdrop-blur-2xl"
    variants={loaderVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
  >
  <div className="absolute top-[29%] flex items-center justify-center flex-col">
    <h1 className="text-5xl text-primary font-bold tracking-wide mb-2">RafCart</h1>
    <p className="text-gray text-sm tracking-wide">{text}</p>
  </div>

      <div className="dots relative">
        {[...Array(15)].map((_, i) => (
          <span key={i} style={{ '--i': i + 1 }} />
        ))}

      </div>
  </motion.div>
);

export default Loader;
