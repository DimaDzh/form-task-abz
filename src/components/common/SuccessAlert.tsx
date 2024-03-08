import { motion } from "framer-motion";
import alertImage from "../../assets/success-image.svg";

export default function SuccessAlert() {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="container max-w-3xl py-12 bg-white rounded-md shadow-lg overflow-hidden"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
      >
        <div className="flex items-center justify-center flex-col">
          <h2 className="text-2xl font-bold mb-6">
            User successfully registered
          </h2>
          <div className="mb-6">
            <img src={alertImage} alt="Success" className="w-64 h-auto" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
