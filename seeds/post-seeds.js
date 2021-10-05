const { Post } = require('../models');

const postdata = [
  {
    title: 'Audi',
    body: 'Donec posuere metus vitae ipsum.',
  },
  {
    title: 'Audi',
    body: 'Donec posuere metus vitae ipsum.',
  },
  {
    title: 'Audi',
    body: 'Donec posuere metus vitae ipsum.',
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
