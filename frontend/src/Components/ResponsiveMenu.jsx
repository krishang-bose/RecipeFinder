import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

const ResponsiveMenu = ({open}) => {
  return (
    <AnimatePresence mode="wait">
      {
        open && (
          <motion.div
            initial={{ opacity: 0, y:-100 }}
            animate={{ opacity: 1, y:0 }}
            exit={{ opacity: 0, y:-100 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-full bg-black/60 z-10"
          >
            <div className="text-xl font-semibold uppercase bg-emerald-600 text-white py-10 m-6 rounded-3xl">
              <ul className="flex flex-col justify-center items-center gap-10">
                <li>Home</li>
                <li>Utility</li>
                <li>Help</li>
                <li>Community</li>
                <li>Map</li>
              </ul>
            </div>
          </motion.div>
        )
      }
    </AnimatePresence>
  );
};
ResponsiveMenu.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default ResponsiveMenu
