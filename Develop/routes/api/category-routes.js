const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products

  //USE EXAMPLE BELOW FOR THIS SECTION
  // router.get('/', async (req, res) => {
  //   try {
  //     const libraryCardData = await LibraryCard.findAll({
  //       include: [{ model: Reader }],
  //     });
  //     res.status(200).json(libraryCardData);
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // });

});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products

  //USE EXAMPLE BELOW FOR THIS SECTION
  // router.get('/:isbn', (req, res) => {
  //   // Get one book from the book table
  //   Book.findOne(
  //     {
  //       // Gets the book based on the isbn given in the request parameters
  //       where: { 
  //         isbn: req.params.isbn 
  //       },
  //     }
  //   ).then((bookData) => {
  //     res.json(bookData);
  //   });
  // });

});

router.post('/', (req, res) => {
  // create a new category

//USE THIS EXAMPLE TO CREATE CATEGORY 
// Book.create({
//   title: req.body.title,
//   author: req.body.author,
//   is_paperback: true
// })
//   .then((newBook) => {
//     // Send the newly created row as a JSON object
//     res.json(newBook);
//   })
//   .catch((err) => {
//     res.json(err);
//   });
// });



});

router.put('/:id', (req, res) => {
  // update a category by its `id` value

  //USE THIS EXAMPLE TO CREATE CATEGORY 
  // router.put('/:id', async (req, res) => {
  //   try {
  //     const userData = await User.update(req.body, {
  //       where: {
  //         id: req.params.id,
  //       },
  //     });
  //     if (!userData[0]) {
  //       res.status(404).json({ message: 'No user with this id!' });
  //       return;
  //     }
  //     res.status(200).json(userData);
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // });

});







router.delete('/:id', (req, res) => {
  // delete a category by its `id` value

//USE THIS EXAMPLE TO CREATE A CATEGORY
// router.delete('/:id', async (req, res) => {
//   try {
//     const libraryCardData = await LibraryCard.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });

//     if (!libraryCardData) {
//       res.status(404).json({ message: 'No library card found with that id!' });
//       return;
//     }

//     res.status(200).json(libraryCardData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });




});

module.exports = router;
