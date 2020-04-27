export const validateFileExtension = (file, expectedExtension) => {
  const [,extension] = file.name.split('.');

  return extension.toLowerCase() === expectedExtension;
}

export const readContentFromFile = (file, callback) => {
  const reader = new FileReader();

  reader.addEventListener('load', ev => {
    callback(ev.target.result);
  });
  
  reader.readAsBinaryString(file);
}