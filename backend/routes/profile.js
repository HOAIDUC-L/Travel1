import express from 'express';
import { query } from '../db.js';

const router = express.Router();

const safe = (v) => v === undefined ? null : v;

router.put('/profile/update', async (req, res) => {
  const { avatar, email, name, provider, aboutme } = req.body;

  try {
    // Cập nhật bảng users
    await query(
      'UPDATE users SET avatar = ?, name = ?, email = ?, auth_provider = ? WHERE email = ?',
      [safe(avatar), safe(name), safe(email), safe(provider), safe(email)]
    );

    // Cập nhật bảng user_profiles
    await query(
      'UPDATE user_profiles SET about_me = ? WHERE user_id = (SELECT id FROM users WHERE email = ?)',
      [safe(aboutme), safe(email)]
    );

    res.json({ success: true, message: 'Profile updated successfully.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Lỗi khi cập nhật hồ sơ.' });
  }
});

export default router;