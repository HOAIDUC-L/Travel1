import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaLeaf, FaMapMarkedAlt, FaRegSmile } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/home.scss';
import ImageSlider from './ImageSlider';

// Variants cho hiệu ứng mờ dần và trượt lên
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// Variants cho các phần tử con (stagger effect)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Độ trễ giữa các phần tử con
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

// Hero Section Component
const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      id="hero"
      ref={ref}
      className="relative bg-green-100 py-20 px-6 text-center"
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-green-700 mb-4"
        variants={childVariants}
      >
        Du lịch xanh – Hành trình bền vững
      </motion.h1>
      <motion.p
        className="text-lg max-w-2xl mx-auto text-gray-600"
        variants={childVariants}
      >
        Khám phá thiên nhiên, hòa mình vào văn hóa bản địa và góp phần bảo vệ môi trường.
      </motion.p>
      <motion.div className="mt-8" variants={childVariants}>
        <Link
          to="/tours"
          className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
        >
          Khám phá tour
        </Link>
      </motion.div>
    </motion.div>
  );
};

// Why Green Travel Section Component
const WhyGreenTravel = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      id="why"
      ref={ref}
      className="py-16 px-6 bg-white"
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <motion.h2
        className="text-3xl font-semibold text-center mb-10 text-green-700"
        variants={childVariants}
      >
        Tại sao chọn du lịch xanh?
      </motion.h2>
      <motion.div
        className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center"
        variants={containerVariants}
      >
        {[
          { icon: <FaLeaf size={40} className="mx-auto text-green-600 mb-4" />, title: 'Bảo vệ thiên nhiên', desc: 'Giảm rác thải, giảm carbon và giữ gìn cảnh quan tự nhiên.' },
          { icon: <FaMapMarkedAlt size={40} className="mx-auto text-green-600 mb-4" />, title: 'Trải nghiệm bản địa', desc: 'Sống cùng người dân, học tập văn hóa và ẩm thực địa phương.' },
          { icon: <FaRegSmile size={40} className="mx-auto text-green-600 mb-4" />, title: 'Tác động tích cực', desc: 'Góp phần phát triển kinh tế địa phương và giáo dục môi trường.' },
        ].map((item, index) => (
          <motion.div key={index} variants={childVariants}>
            {item.icon}
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

// Featured Tours Section Component
const FeaturedTours = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      id="tours"
      ref={ref}
      className="py-16 px-6 bg-green-50"
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <motion.h2
        className="text-3xl font-semibold text-center mb-10 text-green-800"
        variants={childVariants}
      >
        Tour nổi bật
      </motion.h2>
      <motion.div
        className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        variants={containerVariants}
      >
        {[1, 2, 3].map((id) => (
          <motion.div
            key={id}
            className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
            variants={childVariants}
          >
            <img
              src={`https://source.unsplash.com/400x250/?nature,travel,green,${id}`}
              alt="tour"
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Tour miền núi xanh #{id}</h3>
            <p className="text-gray-600 mb-2">3 ngày 2 đêm | Homestay | Không rác thải</p>
            <Link
              to="/tours"
              className="text-green-700 font-semibold hover:underline"
            >
              Xem chi tiết →
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

// Call to Action Section Component
const CallToAction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      id="cta"
      ref={ref}
      className="py-16 px-6 text-center bg-green-600 text-white"
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <motion.h2
        className="text-3xl font-semibold mb-4"
        variants={childVariants}
      >
        Sẵn sàng cho hành trình xanh?
      </motion.h2>
      <motion.p className="mb-6" variants={childVariants}>
        Đặt tour hôm nay và trở thành một phần của du lịch bền vững.
      </motion.p>
      <motion.div variants={childVariants}>
        <Link
          to="/booking"
          className="bg-white text-green-700 font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition"
        >
          Đặt ngay
        </Link>
      </motion.div>
    </motion.section>
  );
};

// Main Home Component
const Home = () => {
  return (
    <div className="bg-white text-gray-800">
      <ImageSlider />
      <HeroSection />
      <WhyGreenTravel />
      <FeaturedTours />
      <CallToAction />
    </div>
  );
};

export default Home;