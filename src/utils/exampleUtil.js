// utils/exampleUtil.js
// small utility to format objects to JSON strings

module.exports.format = function format(obj) {
  try {
    return JSON.stringify(obj);
  } catch (err) {
    return JSON.stringify({ error: 'failed to serialize' });
  }
};
