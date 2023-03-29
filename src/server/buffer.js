class Buffer {
    constructor(id, x, y, dir, speed) {
      this.id = id;
      this.x = x;
      this.y = y;
    }
  
    update() {
    }
  
    distanceTo(object) {
      const dx = this.x - object.x;
      const dy = this.y - object.y;
      return Math.sqrt(dx * dx + dy * dy);
    }
  
    serializeForUpdate() {
      return {
        id: this.id,
        x: this.x,
        y: this.y,
      };
    }
  }
  
  module.exports = Buffer;
  