exports.convertFormat = (data) => {
  return {
    fulfillmentText: `Hi ! Here's every student in my class: ${data.map((el) => el[0]).join(', ')}`
  };
};