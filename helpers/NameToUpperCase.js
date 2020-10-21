const NameToUpperCase = (fullName) => {
  let userName = fullName;
  const values = fullName.split(' ');

  if (values.length === 2) {
    const res1 = values[0].charAt(0).toUpperCase().concat(values[0].slice(1));
    const res2 = values[1].charAt(0).toUpperCase().concat(values[1].slice(1));
    const result = res1.concat(' ', res2);

    userName = result;
  }

  return userName;
};

export default NameToUpperCase;
