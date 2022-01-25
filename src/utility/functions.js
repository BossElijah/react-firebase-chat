export const findImgUrl = (photoURL, email) => {
  if (photoURL) {
    return photoURL;
  } else if (email === 'elias@lfpost.dk') {
    return 'https://bosselijah-chat.netlify.app/logo.png';
  } else if (email === 'joseph@lfpost.dk') {
    return 'https://cdn.xxl.thumbs.canstockphoto.dk/glade-agerdyrker-eps-vector_csp4325798.jpg';
  } else if (email === 'nathanael@lfpost.dk') {
    return 'https://media.musiciansfriend.com/is/image/MMGS7/2016-Hummingbird-Square-Shoulder-Dreadnought-Acoustic-Electric-Guitar-Heritage-Cherry/J24259000001000-00-1600x1600.jpg';
  } else if (email === 'admin@example.com') {
    return 'https://www.logolynx.com/images/logolynx/s_23/23938578fb8d88c02bc59906d12230f3.png';
  } else {
    return 'https://www.w3schools.com/howto/img_avatar.png';
  }
};

export const findDisplayName = (displayName, email) => {
  if (displayName) {
    return displayName;
  } else if (email === 'elias@lfpost.dk') {
    return 'Elias';
  } else if (email === 'simeon@lfpost.dk') {
    return 'Symy';
  } else if (email === 'admin@example.com') {
    return 'Site admin';
  } else if (email === 'nathanael@lfpost.dk') {
    return 'Natha';
  } else if (email === 'joseph@lfpost.dk') {
    return 'Joffy';
  } else if (email) {
    return email;
  } else {
    return 'Anonymous';
  }
};
