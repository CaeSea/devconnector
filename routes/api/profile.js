const express = require('express');
const router = express.Router();
const Profile = require('../../models/Profile');
const User = require('../../models/User');

const auth = require('../../middleware/auth');

// @route GET api/profile/me
// @desc Get current user profile
// @access Private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id
    }).populate('user', ['name', 'avatar']);

    if (!profile) {
      return res.status(400).json({ msg: 'No profile found!' });
    }

    res.json(profile);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
