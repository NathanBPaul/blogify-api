module.exports.getHealth = function getHealth() {
  return {
    status: 'ok',
    service: 'Blogify',
    timestamp: new Date().toISOString()
  };
};
