const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User'); 
const { generateToken } = require('../utils/jwtHelper'); 

const router = express.Router();

router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      email,
      password: hashedPassword
    });

    await newUser.save();

    const token = generateToken({ userId: newUser._id });

    res.status(201).json({ message: 'User registered successfully', token });
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = generateToken({ userId: user._id });

    res.json({ message: 'Login successful', token });
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
});

module.exports = router;
