export const maxLength = (name,text, length) => {
  return text.replace(/ /g, '').length > length ? `${name} terlalu panjang` : null;
};

export const minLength = (name,text, length) => {
  return text.replace(/ /g, '').length < length ? `${name} terlalu pendek` : null;
};

export const lengthBetween = (name,text, val1, val2) => {
  return text.replace(/ /g, '').length < val1 || text.replace(/ /g, '').length > val2
    ? `${name} harus mengandung ${val1}-${val2} karakter`
    : null;
};

export const phoneNumber = (name,number) => {
  const isPhone = /^[0-9]*$/i.test(number);

  return number.length > 14
      ? `${name} tidak valid`
      : !isPhone
      ? `${name} tidak valid`
      : null
};

export const passwordFormat = (name, text) => {
  if(text.length > 0){
  return /(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])/.test(text)
    ? null
    : `${name} kombinasi huruf besar, huruf kecil, dan angka`;
  }else return null;
};
