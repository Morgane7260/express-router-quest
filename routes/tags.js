const express = require('express')
const fakePosts = require('../data/posts');
const fakeTags = require('../data/tags');
const router = express.Router();

// Get a list of all tags
router.get('/', (req, res) => {
  res.json(fakeTags);
});

// Get a list of posts with with same tag
router.get('/:tagId/posts', (req, res) => {
  const tagId = Number(req.params.tagId);
  const filteredPosts = fakePosts.filter((post) => post.tag_ids.includes(tagId));
  res.json(filteredPosts);
});

module.exports = router;