import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative bg-dark-green text-white h-80 flex justify-center items-center">
      {/* Replace motion.div with a simple div to test */}
      <div className="text-center">
        <h1 className="text-4xl font-bold">Your Partner in Software Innovation</h1>
        <button className="mt-6 px-6 py-2 bg-teal text-white rounded-md hover:bg-light-green transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
