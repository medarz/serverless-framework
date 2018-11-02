module.exports.hello = async (event, context) => ({
  statusCode: 200,
  body: JSON.stringify({
    message: 'Go Serverless v1.3! ',
    input: event,
  }),
});
