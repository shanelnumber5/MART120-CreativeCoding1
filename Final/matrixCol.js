function matrixCol(x, w, delay) {
  this.x = x;
  this.y = 0;
  this.w = w;
  this.tower = [];
  this.delay = delay;
  this.hasChild = false;
  this.len = random(floor(height * 0.75 / w), floor(height * 1.25 / w));
  this.highlight = random()<0.95;

  this.update = function() {
    if (this.tower.length < this.len) {
      if (this.delay < 0) {
        var c = this.getRandomChar();
        this.tower.push(c);
      } else {
        this.delay--;
      }
    }
    for (let i = 0; i < this.tower.length; i++) {
      let p = random(1) > 0.97;
      if (p || i == this.tower.length - 1) {
        var cp = this.getRandomChar();
        this.tower[i] = cp;
      }
    }
  }

  this.show = function() {
    textSize(this.w);
    let ypos = this.y;
    for (let i = this.tower.length - 1; i >= 0; i--) {
      if (i > this.tower.length - 3 && this.highlight) {
        fill(255 - 70 * (this.tower.length -1 - i));
      } else {
        fill(3, 200, 60, 255 - 4 * (this.tower.length - i));
      }
      text(this.tower[i], this.x, ypos);
      ypos -= this.w;
    }
    if (this.delay < 0){
      this.y += w;
    }
  }

  this.isDone = function() {
    return (this.y - this.len * this.w > height);
  }

  this.isAllowChild = function() {
    return !this.hasChild && (this.y - this.len * this.w > 0);
  }

  this.getRandomChar = function() {
    let katakana = String.fromCharCode(random(12448, 12546))
    let number = String.fromCharCode(random(48, 57))
    let alphabet = String.fromCharCode(random(97, 122))
    let r = random(100);
    return r < 10 ? number : r > 90 ? alphabet : katakana;
  }


}