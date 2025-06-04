import React, { useEffect, useState } from 'react';
import '../styles/profile.scss';
import { useTranslation } from 'react-i18next';

const Profile = () => {
  const { t } = useTranslation();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    avatar: '',
    name: '',
    email: '',
    provider: '',
    aboutme: '',
  });

  // Lấy dữ liệu ban đầu và thiết lập cả state & localStorage backup
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      setUser(userData);
      setFormData({
        avatar: userData.avatar,
        name: userData.name,
        email: userData.email,
        provider: userData.provider,
        aboutme: userData.aboutme,
      });
      localStorage.setItem('backupData', JSON.stringify(userData));
    }
  }, []);

  if (!user) return <div style={{ padding: 20 }}>Please log in to view your profile.</div>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDiscard = () => {
    const backup = JSON.parse(localStorage.getItem('backupData'));
    if (backup) {
      setFormData({
        avatar: backup.avatar,
        name: backup.name,
        email: backup.email,
        provider: backup.provider,
        aboutme: backup.aboutme || '',
      });
    }
  };

  const handleSave = async (e) => {
  e.preventDefault();

  // Kiểm tra username
  if (!formData.name.trim()) return;

  try {
    const res = await fetch('http://localhost:5000/api/profile/update', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: user.id,
        avatar: formData.avatar,
        name: formData.name,
        email: formData.email,
        provider: formData.provider,
        aboutme: formData.aboutme,
      }),
    });

    const result = await res.json();
    if (result.success) {
      alert('Đã lưu thành công!');
      localStorage.setItem('user', JSON.stringify({ ...user, ...formData }));
    } else {
      alert('Lỗi khi lưu: ' + result.message);
    }
  } catch (err) {
    console.error(err);
    alert('Lỗi kết nối server.');
  }
};


  return (
    <div>
      <div className="profile-container">
        <div className="left-panel">
          <h2>{t('profile.title')}</h2>
          <div className="avatar">
            <img
              src={user.avatar}
              alt="avatar"
              style={{ width: 100, borderRadius: '50%', marginBottom: 10 }}
            />
          </div>
          <div className="upload">{t('profile.upload')}</div>
          <div className="social">
            <a className="link-fb" href="#" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <i className="bx bxl-facebook-circle" style={{ fontSize: '24px', marginRight: '8px' }}></i>
              <span>{t('profile.fbLink')}</span>
            </a>
            
            <a className="link-twit" href="#" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <i className="bx bxl-twitter" style={{ fontSize: '24px', marginRight: '8px' }}></i>
              <span>{t('profile.twitLink')}</span>
            </a>

            <a className="link-ig" href="#" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <i className="bx bxl-instagram-alt" style={{ fontSize: '24px', marginRight: '8px' }}></i>
              <span>{t('profile.igLink')}</span>
            </a>

            <a className="link-gg" href="#" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <i className="bx bxl-google-plus-circle" style={{ fontSize: '24px', marginRight: '8px' }}></i>
              <span>{t('profile.ggLink')}</span>
            </a>
          </div>
        </div>

        <form className="right-panel" onSubmit={handleSave}>
          <label>{t('profile.username')}:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder={t('profile.usernamePlaceholder')}/>

          <label>E-mail:</label>
          <input type="email" name="email" value={formData.email} />

          <label>{t('profile.provider')}:</label>
          <input type="text" name="provider" value={formData.provider} />

          <label>{t('profile.aboutme')}:</label>
          <textarea name="aboutme" rows="4" value={formData.aboutme} onChange={handleChange} placeholder={t('profile.aboutmePlaceholder')} />

          <div className="button-container">
            <button type="button" className="discard-save-button btn" onClick={handleDiscard}>{t('profile.discardBtn')}</button>
            <button type="submit" className="save-button btn">{t('profile.saveBtn')}</button>
          </div>
        </form>
      </div>

      <div className="sidebar-links">
        <a href="#">Profile</a>
        <a href="#">Statistics</a>
        <a href="#">Get Help</a>
        <a href="#">Settings</a>
        <a href="#">Sign Out</a>
      </div>
    </div>
  );
};

export default Profile;