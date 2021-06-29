function routeEncript(text, routeSize) {
  const matrixRepresentation = [];
  let encryptedText = ''

  // create a matrix from plain text with width = step_size
  for (let i = 0; _.inRange(i, Math.ceil(text.length / routeSize)); i++) {
    let matrixRow = [];
    for (let j = 0; _.inRange(j, routeSize); j++) {
      if (i * routeSize + j < text.length) {
        matrixRow.push(text[i * routeSize + j]);
      } else {
        matrixRow.push("-");
      }
    }
    matrixRepresentation.push(matrixRow);
  }

  console.log(matrixRepresentation);

  const matrixWidth = matrixRepresentation[0].length;
  const matrixHeight = matrixRepresentation.length;
  let allowedDepth = 0;
  if (matrixWidth < matrixHeight) {
    allowedDepth = matrixWidth;
  } else {
    allowedDepth = matrixHeight;
  }

  // console.log(allowedDepth, matrixWidth, matrixHeight);
  //  Here we read the matrix in a spiral starting from the top left corner
  for (let i = 0; _.inRange(i, allowedDepth); i++) {
    //  Going down on left side
    for (let j = 0; _.inRange(j, matrixHeight); j++) {
      encryptedText += matrixRepresentation[j][i];
    }
  }


  return encryptedText;
}


// ==========================function route decrypt=============================

function routeDecrypt(text, routeSize) {
  const matrixRepresentation = [];
  let plainText = '';

  let matrixWidth = routeSize;
  let matrixHeight = Math.ceil(text.length / routeSize)

  console.log(matrixWidth, matrixHeight);

  // create a matrix from cipher text with width = step_size
  for (let i = 0; _.inRange(i, matrixHeight); i++) {
    matrixRepresentation.push([]);
    for (let j = 0; _.inRange(j, matrixWidth); j++) {
      matrixRepresentation[i].push('*')
    }
  }

  // Here we rewrite the matrix in a spiral starting from the top left corner
  for (let i = 0; _.inRange(i, matrixWidth); i++) {
    for (let j = 0; _.inRange(j, matrixHeight); j++) {
      if (i * routeSize + j < text.length) {
        matrixRepresentation[j][i] = text[(i * matrixHeight) + (j * 1)]
      } else {
        matrixRepresentation[j][i] = '-';
      }
    }
  }

  // Here we read the matrix in a spiral starting from the top left corner
  for (let i = 0; _.inRange(i, matrixHeight); i++) {
    //  Going down on left side
    for (let j = 0; _.inRange(j, matrixWidth); j++) {
      if (matrixRepresentation[i][j] != '-') {
        plainText += matrixRepresentation[i][j];
      }
    }
  }


  console.log(matrixRepresentation);
  console.log(plainText);
  return plainText;
}