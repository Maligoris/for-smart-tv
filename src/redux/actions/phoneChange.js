const phoneChange = (text) => {
  return {
    type: "phoneNumber/changePhoneNumber",
    payload: text,
  };
};
