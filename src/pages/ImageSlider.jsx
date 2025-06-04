
// Phrase 1

// import React, { useState, useEffect, memo, useRef } from 'react';
// import '../styles/about.scss';
// import greenTraveling1 from '../assets/images/home/green-traveling-1.jpg';
// import greenTraveling2 from '../assets/images/home/green-traveling-5.jpg';
// import greenTraveling3 from '../assets/images/home/green-traveling-2.jpg';
// import greenTraveling4 from '../assets/images/home/green-traveling-7.jpg';
// import greenTraveling5 from '../assets/images/home/green-traveling-8.jpg';
// import greenTraveling6 from '../assets/images/home/green-traveling-9.jpg';

// const SliderItem = memo(({ item, index, isInitialLoad }) => (
//   <div
//     className={`slider-item ${index === 0 ? 'first' : ''} ${index === 1 ? 'second' : ''} ${index >= 2 && index <= 4 && isInitialLoad ? 'initial-load' : ''
//       }`}
//     style={{ backgroundImage: `url(${item.image})` }}
//   >
//     {index === 1 && (
//       <div className="slider-content">
//         <div className="name">{item.name}</div>
//         <div className="des">{item.description}</div>
//         <button>See more</button>
//       </div>
//     )}
//   </div>
// ));

// const ImageSlider = () => {

//   const [items, setItems] = useState([
//     {
//       id: 1,
//       image: greenTraveling1,
//       name: 'LUNDEV',
//       description: 'Tình rủ anh đi chạy phố, chưa kịp chạy phố thì anh chạy mất tiêu',
//     },
//     {
//       id: 2,
//       image: greenTraveling2,
//       name: 'LUNDEV',
//       description: 'Tình rủ anh đi chạy phố, chưa kịp chạy phố thì anh chạy mất tiêu',
//     },
//     {
//       id: 3,
//       image: greenTraveling3,
//       name: 'LUNDEV',
//       description: 'Tình rủ anh đi chạy phố, chưa kịp chạy phố thì anh chạy mất tiêu',
//     },
//     {
//       id: 4,
//       image: greenTraveling4,
//       name: 'LUNDEV',
//       description: 'Tình rủ anh đi chạy phố, chưa kịp chạy phố thì anh chạy mất tiêu',
//     },
//     {
//       id: 5,
//       image: greenTraveling5,
//       name: 'LUNDEV',
//       description: 'Tình rủ anh đi chạy phố, chưa kịp chạy phố thì anh chạy mất tiêu',
//     },
//     {
//       id: 6,
//       image: greenTraveling6,
//       name: 'LUNDEV',
//       description: 'Tình rủ anh đi chạy phố, chưa kịp chạy phố thì anh chạy mất tiêu',
//     },
//   ]);
//   const [isInitialLoad, setIsInitialLoad] = useState(true);

//   useEffect(() => {
//     // Tắt isInitialLoad sau 1.4s (thời gian dài nhất của animation showSliderItem)
//     const timer = setTimeout(() => {
//       setIsInitialLoad(false);
//     }, 1400);
//     return () => clearTimeout(timer);
//   }, []);

//   const slideRef = useRef(null);

//   const handleNext = () => {
//     let items = slideRef.current.querySelectorAll(".slider-item");
//     slideRef.current.appendChild(items[0]);
//   };

//   const handlePrev = () => {
//     let items = slideRef.current.querySelectorAll(".slider-item");
//     slideRef.current.prepend(items[items.length - 1]);
//   };

//   return (
//     <section className="slider-section">
//       <div className="slider-container">
//         <div id="slide" ref={slideRef}>
//           {items.map((item, index) => (
//             <SliderItem key={item.id} item={item} index={index} isInitialLoad={isInitialLoad} />
//           ))}
//         </div>
//         <div className="slider-buttons">
//           <button id="prev" onClick={handlePrev}>
//             <i className="fa-solid fa-angle-left"></i>
//           </button>
//           <button id="next" onClick={handleNext}>
//             <i className="fa-solid fa-angle-right"></i>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ImageSlider;

// Phrase 2

import { useRef, useState , useEffect} from "react";
import "../styles/ImageSlider.scss";

const ImageSlider = () => {
  const slideRef = useRef(null);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 1400);
    return () => clearTimeout(timer);
  }, []);

  const handleClickNext = () => {
    let items = slideRef.current.querySelectorAll(".slider-item");
    slideRef.current.appendChild(items[0]);
  };

  const handleClickPrev = () => {
    let items = slideRef.current.querySelectorAll(".slider-item");
    slideRef.current.prepend(items[items.length - 1]);
  };

  const data = [
    {
      id: 1,
      imgUrl: "https://i.postimg.cc/PrMGqZwx/pexels-m-venter-1659437.jpg",
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
    {
      id: 2,
      imgUrl:
        "https://i.postimg.cc/bw6KxhLf/pexels-eberhard-grossgasteiger-1062249.jpg",
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
    {
      id: 3,
      imgUrl:
        "https://i.postimg.cc/CMkTW9Mb/pexels-eberhard-grossgasteiger-572897.jpg",
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
    {
      id: 5,
      imgUrl: "https://i.postimg.cc/6qdkn4bM/pexels-joyston-judah-933054.jpg",
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
    {
      id: 6,
      imgUrl:
        "https://i.postimg.cc/RVm59Gqy/pexels-roberto-nickson-2559941.jpg",
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
  ];

  return (
    <div className="slider-layer">
      <div className="slider-container">
        <div id="slide" ref={slideRef}>
          {data.map((item, index) => (
            <div
              key={item.id}
              className={`slider-item ${isInitialLoad ? 'initial-load' : ''} ${
                index === 0 ? 'first' : index === 1 ? 'second' : ''
              }`}
              style={{ backgroundImage: `url(${item.imgUrl})` }}
            >
              <div className="slider-content">
                <div className="name">{item.name}</div>
                <div className="des">{item.desc}</div>
                <button>See more</button>
              </div>
            </div>
          ))}
        </div>
        <div className="slider-buttons">
          <button id="prev" onClick={handleClickPrev}>
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <button id="next" onClick={handleClickNext}>
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;