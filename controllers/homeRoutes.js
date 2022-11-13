const router = require('express').Router();
const { Pet, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    res.render('homepage', { 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    console.error(err)
    res.status(500).json(err);
  }
});

router.get('/pets', async (req, res) => {
  try {
    const petsRawData = await Pet.findAll()
    const pets = petsRawData.map((pets) => pets.get({ plain: true }));
    res.render('petView', { 
      pets, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    console.error(err)
    res.status(500).json(err);
  }
});

router.get('/pets/:id', async (req, res) => {
  try {
    const petRawData = await Pet.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name']
        }
      ]
    })
    const pet = petRawData.get({ plain: true });
    res.render('singlePet', { 
      pet, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    console.error(err)
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  try {
    res.render('login', { 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    console.error(err)
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Pet }],
    });

    const user = userData.get({ plain: true });
    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    console.error(err)
    res.status(500).json(err);
  }
});



// router.get('/login', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.redirect('/profile');
//     return;
//   }

//   res.render('login');
// });

module.exports = router;
