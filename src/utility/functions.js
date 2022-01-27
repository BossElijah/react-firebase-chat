export const findImgUrl = (photoURL, email) => {
  if (photoURL) {
    return photoURL;
  } else if (email === 'elias@lfpost.dk') {
    return 'profile-photos/elias.png';
  } else if (email === 'joseph@lfpost.dk') {
    return 'profile-photos/joseph.webp';
  } else if (email === 'nathanael@lfpost.dk') {
    return 'profile-photos/natha.webp';
  } else if (email === 'simeon@lfpost.dk') {
    return 'profile-photos/simeon.png';
  } else if (email === 'admin@example.com') {
    return 'profile-photos/admin.png';
  } else {
    return 'profile-photos/default.png';
  }
};

export const findDisplayName = (displayName, email) => {
  if (displayName) {
    return displayName;
  } else if (email === 'elias@lfpost.dk') {
    return 'Elias';
  } else if (email === 'simeon@lfpost.dk') {
    return 'Simeon Joel Kristiansen';
  } else if (email === 'admin@example.com') {
    return 'Site admin';
  } else if (email === 'nathanael@lfpost.dk') {
    return 'Natha';
  } else if (email === 'joseph@lfpost.dk') {
    return 'Joffy';
  } else if (email === 'entertainer@example.com') {
    return 'Chat Entertainer';
  } else if (email) {
    return email;
  } else {
    return 'Anonymous';
  }
};
