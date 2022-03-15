export const maxLength = (text, length) => {
  return text.replace(/ /g, '').length > length ? `Nama terlalu panjang` : null;
};

export const minLength = (text, length) => {
  return text.replace(/ /g, '').length < length ? `Nama terlalu pendek` : null;
};

export const lengthBetween = (text, val1, val2) => {
  return text.replace(/ /g, '').length < val1 || text.replace(/ /g, '').length > val2
    ? `Kata sandi harus mengandung ${val1}-${val2} karakter`
    : null;
};

export const phoneNumber = (number) => {
  const isPhone = /^[0-9]*$/i.test(number);

  return number.length > 14
      ? `Nomor telepon tidak valid`
      : !isPhone
      ? `Nomor telepon tidak valid`
      : null
};

export const passwordFormat = (text) => {
  if(text.length > 0){
  return /(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])/.test(text)
    ? null
    : `Kata sandi kombinasi huruf besar, huruf kecil, dan angka`;
  }else return null;
};
