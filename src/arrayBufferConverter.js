export default class ArrayBufferConverter {
    constructor() {
      this.bufferView = null;
    }
  
    load(buffer) {
      this.bufferView = new Uint16Array(buffer);
      return this.bufferView;
    }
  
    toString() {
      if (this.bufferView) {
        let result = '';
  
        for (let i = 0; i < this.bufferView.length; i += 1) {
          result += String.fromCharCode(this.bufferView[i]);
        }
        
        return result;
      } else {
        throw new Error("bufferView не определен");
      }
    }
  }