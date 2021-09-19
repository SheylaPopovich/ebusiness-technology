const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data

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
  // find a single tag by its `id`
  // be sure to include its associated Product data

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
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
