function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement); //.push mutates the original
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement); //concat returns a new array
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}