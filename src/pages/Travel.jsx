import React, { useState } from "react";
import hanoiImg from '../assets/images/travel/hanoi1.jpg';
import danangImg from '../assets/images/travel/danang.jpeg';
import hoianImg from '../assets/images/travel/hoian.jpg';
import nhatrangImg from '../assets/images/travel/langson1.jpg';
import phuquocImg from '../assets/images/travel/vungtau1.jpg';
import image1Img from '../assets/images/travel/image1.webp';
import image2Img from '../assets/images/travel/image2.jpg';
import image3Img from '../assets/images/travel/image3.jpg';
import aboutImg from '../assets/images/travel/about.jfif';
import service1Img from '../assets/images/travel/service1.png';
import service2Img from '../assets/images/travel/service2.png';
import service3Img from '../assets/images/travel/service3.png';
import dalatImg from '../assets/images/travel/dalat.jpg';
import hochiminhImg from '../assets/images/travel/hochiminh.webp';
import hagiangImg from '../assets/images/travel/hagiang.jpg';
import hueImg from '../assets/images/travel/hue.jpg';
import quotationImg from '../assets/images/travel/quotation.png';
// import review1Img from '../assets/images/travel/review1.jpg';
// import review2Img from '../assets/images/travel/review2.jpg';
// import review3Img from '../assets/images/travel/review3.jpg';
import video12 from '../assets/images/travel/12.mp4';
import '../styles/travel.scss';

const tourData = [
  {
    id: 1,
    name: "Du lịch sinh thái-Hà Nội",
    description: "Hà Nội, thủ đô của Việt Nam, nổi tiếng với kiến trúc trăm tuổi...",
    img: hanoiImg,
    price: "3.500.000₫"
  },
  {
    id: 2,
    name: "Tour Đà Nẵng",
    description: "Đà Nẵng là thành phố lớn nhất của miền Trung...",
    img: danangImg,
    price: "4.200.000₫"
  },
  {
    id: 3,
    name: "Tham quan Hội An",
    description: "Phố cổ Hội An từng là một thương cảng quốc tế sầm uất...",
    img: hoianImg,
    price: "3.900.000₫"
  },
  {
    id: 4,
    name: "Trải nghiệm du lịch Lạng Sơn",
    description: "Lạng Sơn là một tỉnh miền núi phía Bắc Việt Nam, nổi tiếng với cảnh quan thiên nhiên hùng vĩ...",
    img: nhatrangImg,
    price: "5.100.000₫"
  },
  {
    id: 5,
    name: "Chuyến đi Vũng Tàu",
    description: "Vũng Tàu là một thành phố biển nổi tiếng với bãi biển đẹp và các hoạt động giải trí đa dạng...",
    img: phuquocImg,
    price: "5.600.000₫"
  }
];

const suggestions = [
  "CMND/CCCD hoặc hộ chiếu",
  "Vé máy bay/tàu/xe",
  "Tiền mặt/thẻ ngân hàng",
  "Quần áo phù hợp điểm đến",
  "Đồ dùng cá nhân ",
  "Thuốc men cá nhân",
  "Áo mưa hoặc ô",
  "Máy ảnh (nếu cần)",
];

function Modal({ show, onClose, children }) {
  if (!show) return null;
  return (
    <div className="modal" style={{ display: "block" }} onClick={e => e.target.className === "modal" && onClose()}>
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>&times;</span>
        <div id="modalBody">{children}</div>
      </div>
    </div>
  );
}

function Travel() {
  const [form, setForm] = useState({
    location: "0",
    people: "",
    start: "",
    end: ""
  });
  const [modalContent, setModalContent] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.location === "0") {
      setModalContent(<p style={{ color: "red" }}>Hãy chọn địa điểm bạn muốn đi!</p>);
      return;
    }
    const tour = tourData.find(t => t.id === Number(form.location));
    if (tour) {
      setModalContent(
        <div style={{ textAlign: "center" }}>
          <img src={tour.img} alt={tour.name} style={{ width: "90%", maxWidth: 230, height: 120, objectFit: "cover", borderRadius: 10, boxShadow: "0 2px 12px #0def3a44" }} />
          <h2 style={{ color: "#0def3a", margin: "15px 0 8px" }}>{tour.name}</h2>
          <p style={{ fontSize: 16 }}>{tour.description}</p>
          <div style={{ fontSize: 17, margin: "10px 0 8px 0" }}>
            <b>Giá tour: <span style={{ color: "#e53935" }}>{tour.price}</span></b>
          </div>
          <button className="btn" style={{ marginTop: 10, width: 120 }} onClick={() => alert("Đặt tour thành công!")}>
            Đặt tour
          </button>
          <hr style={{ margin: "18px 0" }} />
          <div style={{ textAlign: "left" }}>
            <h3 style={{ color: "#0def3a" }}>Gợi ý đồ cần chuẩn bị:</h3>
            <ul style={{ paddingLeft: 18, lineHeight: 1.7, fontSize: 15 }}>
              {suggestions.map((item, idx) => <li key={idx}>✔️ {item}</li>)}
            </ul>
          </div>
        </div>
      );
    }
  };

  const handleCloseModal = () => setModalContent(null);
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <>
      <header>
        <div className="video-container">
          <video src={video12} autoPlay muted loop />
        </div>
        <div className="header-content">
          <h1>Khám phá</h1>
          <p>Xách ba lô lên và đi nào</p>
          <form onSubmit={handleSubmit}>
            <h1>Bạn muốn đi đâu ?</h1>
            <p>Địa điểm</p>
            <select name="location" value={form.location} onChange={handleChange}>
              <option value="0">--Chọn địa điểm--</option>
              <option value="1">Hà Nội</option>
              <option value="2">Đà Nẵng</option>
              <option value="3">Hội An</option>
              <option value="4">Nha Trang</option>
              <option value="5">Phú Quốc</option>
            </select>
            <p>Số người</p>
            <input name="people" type="number" min="1" placeholder="Bạn đi bao nhiêu người" value={form.people} onChange={handleChange} />
            <p>Ngày đi</p>
            <input name="start" type="date" value={form.start} onChange={handleChange} />
            <p>Ngày về</p>
            <input name="end" type="date" value={form.end} onChange={handleChange} />
            <button type="submit">Tìm kiếm</button>
          </form>
        </div>
      </header>

      <section className="nice-place">
        <div className="container">
          <h1 className="h1-style">Tour nổi bật</h1>
          <div className="nice-place-content row">
            <div className="nice-place-item">
              <div className="nice-place-item-img">
                <img src={image1Img} alt="Hà Nội" />
              </div>
              <div className="nice-place-item-text">
                <h2>Tour Hà Nội</h2>
                <div className="star-group">
                  {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
                </div>
                <p>Hà Nội, thủ đô của Việt Nam, nổi tiếng với kiến trúc trăm tuổi và nền văn hóa phong phú với sự ảnh hưởng của khu vực Đông Nam Á, Trung Quốc và Pháp.</p>
                <button className="btn">Mua Tour</button>
              </div>
            </div>
            <div className="nice-place-item">
              <div className="nice-place-item-img">
                <img src={image2Img} alt="Tây Bắc" />
              </div>
              <div className="nice-place-item-text">
                <h2>Tour Tây Bắc</h2>
                <div className="star-group">
                  {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
                </div>
                <p>Tây Bắc Bộ, vùng Tây Bắc hay ngắn gọn là Tây Bắc là vùng miền núi phía tây của miền Bắc Việt Nam, có chung đường biên giới với Lào và Trung Quốc.</p>
                <button className="btn">Mua Tour</button>
              </div>
            </div>
            <div className="nice-place-item">
              <div className="nice-place-item-img">
                <img src={image3Img} alt="Hạ Long" />
              </div>
              <div className="nice-place-item-text">
                <h2>Tour Hạ Long</h2>
                <div className="star-group">
                  {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
                </div>
                <p>Hạ Long là thành phố tỉnh lỵ của tỉnh Quảng Ninh, Việt Nam. Thành phố được đặt theo tên của vịnh Hạ Long, là một di sản thiên nhiên nổi tiếng của Việt Nam.</p>
                <button className="btn">Mua Tour</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <h1 className="h1-style">About</h1>
          <div className="about-content row">
            <div className="about-content-left">
              <img src={aboutImg} alt="" />
            </div>
            <div className="about-content-right">
              <h2>Tại sao bạn nên chọn chúng tôi ?</h2>
              <p>Chúng tôi là công ty hàng đầu về cung cấp dịch vụ lữ hành hàng nội địa và quốc tế.</p>
              <button className="btn">Tìm hiều thêm</button>
            </div>
          </div>
          <div className="service row">
            <div className="service-item">
              <img src={service1Img} alt="" />
              <p>Đặt phòng</p>
            </div>
            <div className="service-item">
              <img src={service2Img} alt="" />
              <p>Dịch vụ 24/7</p>
            </div>
            <div className="service-item">
              <img src={service3Img} alt="" />
              <p>Guide book</p>
            </div>
          </div>
        </div>
      </section>

      <section className="tour-summer">
        <div className="container">
          <h1 className="h1-style">Tour hè 2025</h1>
          <div className="tour-summer-content row">
            <div className="tour-summer-content-item row ">
              <div className="tour-summer-content-item-img">
                <img src={dalatImg} alt="Đà Lạt" />
              </div>
              <div className="tour-summer-content-item-text">
                <h2>Đà Lạt</h2>
                <p>Đà Lạt là thành phố tỉnh lỵ trực thuộc tỉnh Lâm Đồng, nằm trên cao nguyên Lâm Viên, thuộc vùng Tây Nguyên, Việt Nam.</p>
                <button className="btn">Khám phá</button>
              </div>
            </div>
            <div className="tour-summer-content-item row ">
              <div className="tour-summer-content-item-img">
                <img src={hoianImg} alt="Hội An" />
              </div>
              <div className="tour-summer-content-item-text">
                <h2>Hội An</h2>
                <p>Phố cổ Hội An từng là một thương cảng quốc tế sầm uất, gồm những di sản kiến trúc đã có từ hàng trăm năm trước, được UNESCO công nhận là di sản văn hóa thế giới từ năm 1999.</p>
                <button className="btn">Khám phá</button>
              </div>
            </div>
            <div className="tour-summer-content-item row ">
              <div className="tour-summer-content-item-img">
                <img src={hochiminhImg} alt="Hồ Chí Minh" />
              </div>
              <div className="tour-summer-content-item-text">
                <h2>Hồ Chí Minh</h2>
                <p>Thành phố Hồ Chí Minh (thường được gọi là Sài Gòn) là một thành phố ở miền nam Việt Nam nổi tiếng với vai trò nòng cốt trong chiến tranh Việt Nam.</p>
                <button className="btn">Khám phá</button>
              </div>
            </div>
            <div className="tour-summer-content-item row ">
              <div className="tour-summer-content-item-img">
                <img src={danangImg} alt="Đà Nẵng" />
              </div>
              <div className="tour-summer-content-item-text">
                <h2>Đà Nẵng</h2>
                <p>Đà Nẵng là thành phố lớn nhất của miền Trung, đóng vai trò là trung tâm chính trị, kinh tế - xã hội lớn của miền Trung và là hạt nhân quan trọng trong Vùng kinh tế trọng điểm miền Trung.</p>
                <button className="btn">Khám phá</button>
              </div>
            </div>
            <div className="tour-summer-content-item row ">
              <div className="tour-summer-content-item-img">
                <img src={hagiangImg} alt="Hà Giang" />
              </div>
              <div className="tour-summer-content-item-text">
                <h2>Hà Giang</h2>
                <p>Thành phố Hà Giang là trung tâm kinh tế, chính trị của tỉnh Hà Giang, nằm ở vị trí trung tâm của tỉnh, cách cửa khẩu Thanh Thủy trên biên giới Việt Nam.</p>
                <button className="btn">Khám phá</button>
              </div>
            </div>
            <div className="tour-summer-content-item row ">
              <div className="tour-summer-content-item-img">
                <img src={hueImg} alt="Huế" />
              </div>
              <div className="tour-summer-content-item-text">
                <h2>Huế</h2>
                <p>Thành phố Huế lúc bấy giờ có địa giới hành chính tương ứng với các quận Phú Xuân và Thuận Hóa hiện nay. Huế từng là kinh đô của Việt Nam dưới triều Tây Sơn và triều Nguyễn.</p>
                <button className="btn">Khám phá</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="review">
        <div className="container">
          <h1 className="h1-style">Đánh giá</h1>
          <div className="review-content row">
            <div className="review-item">
              <div className="review-item-text">
                <img src={quotationImg} alt="" />
                <p><span>&ldquo;</span>Khung cảnh sương mù Đà Lạt vào buổi sớm thật sự rất tuyệt!<span>&rdquo;</span></p>
              </div>
              <div className="review-item-img row">
                {/* <img src={review1Img} alt="" /> */}
                <div className="review-item-img-text">
                  <h2>Trần Thanh Đức</h2>
                  <p>Ngày 23/3/2025</p>
                </div>
              </div>
            </div>
            <div className="review-item">
              <div className="review-item-text">
                <img src={quotationImg} alt="" />
                <p><span>&ldquo;</span>Cố đô Huế mãi đỉnh, mãi là nhất trong lòng tôi!<span>&rdquo;</span></p>
              </div>
              <div className="review-item-img row">
                {/* <img src={review2Img} alt="" /> */}
                <div className="review-item-img-text">
                  <h2>Nguyễn Hữu Quốc Bảo</h2>
                  <p>Ngày 19/4/2025</p>
                </div>
              </div>
            </div>
            <div className="review-item">
              <div className="review-item-text">
                <img src={quotationImg} alt="" />
                <p><span>&ldquo;</span>Khung cảnh thiên nhiên ở Tây Nguyên nó đẹp một cách kỳ lạ!<span>&rdquo;</span></p>
              </div>
              <div className="review-item-img row">
                {/* <img src={review3Img} alt="" /> */}
                <div className="review-item-img-text">
                  <h2>Lê Hoài Đức</h2>
                  <p>Ngày 19/5/2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Modal show={!!modalContent} onClose={handleCloseModal}>
        {modalContent}
      </Modal>
    </>
  );
}

export default Travel;