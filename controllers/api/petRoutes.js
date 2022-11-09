const router = require('express').Router();
const { Pet, User } = require('../../models');
const withAuth = require('../../utils/auth');

// router.post('/', withAuth, async (req, res) => {
//   try {
//     const newPet = await Pet.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });

//     res.status(200).json(newProject);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

router.get('/', async (req, res) => {
  try {
    const allPets = await Pet.findAll({
      include: [User]
  })
    res.status(200).json(allPets);
  } catch (err) {
    res.status(400).json(err);
  }
})

router.post('/', withAuth, async (req, res) => {
  try {
    const newPet = await Pet.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPet);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const deletePet = await Pet.destroy({
      where: {
        id: req.params.id,
      }
    })
    if (!deletePet) {
      res.status(404).json({ message: `No pet found with id of ${req.params.id}` });
      return;
    }

    res.status(200).json(`Pet with id of ${req.params.id} has been deleted.`);
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;
