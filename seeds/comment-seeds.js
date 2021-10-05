const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'something',
  },
  {
    comment_text:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
  },
  {
    comment_text: 'Aliquam erat volutpat. In congue.',
  },
  {
    comment_text:
      'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
