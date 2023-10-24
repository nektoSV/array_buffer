import ArrayBufferConverter from '../arrayBufferConverter';
import getBuffer from '../getBuffer';

test.each([
  [ 
    'array',
    [
      123,  34, 100,  97, 116,  97,  34,  58, 123,  34,
      117, 115, 101, 114,  34,  58, 123,  34, 105, 100,
      34,  58,  49,  44,  34, 110,  97, 109, 101,  34,
      58,  34,  72, 105, 116, 109,  97, 110,  34,  44,
      34, 108, 101, 118, 101, 108,  34,  58,  49,  48,
      125, 125, 125
    ]
  ],
])// eslint-disable-next-line
('testing load method with %s', (_, expected) => {
  let converter = new ArrayBufferConverter;
  let result = converter.load(getBuffer());

  expect(Array.from(result)).toEqual(expected);
});

test.each([
  [
    'string',
    '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}'
  ],
])// eslint-disable-next-line
('testing toString method with %s', (_, expected) => {
  let converter = new ArrayBufferConverter;

  converter.load(getBuffer());

  let result = converter.toString();

  expect(result).toBe(expected);
});

test.each([
  [
    'Error',
    new Error("bufferView не определен")
  ],
])// eslint-disable-next-line
('testing toString method with %s', (_, expected) => {
  let converter = new ArrayBufferConverter;
  
  function result() {
    converter.toString();
  }

  expect(result).toThrow(expected);
});