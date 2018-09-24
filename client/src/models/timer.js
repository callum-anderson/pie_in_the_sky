const Timer = function (time) {
  this.timeLeft = time;
  this.counter = null;
  // this.section = section;
};


Timer.prototype.countdown = function () {
  //change time into minutes and seconds if timer is over a minute
  // let mins = this.timeLeft / 60;
  // let seconds = this.timeLeft % 60;

    //bind this.motion to retain this in scope
    this.counter = setInterval(this.motion.bind(this), 1000)

  //if timer is over one minute
  // mins = Math.floor(this.timeLeft / 60);
  // seconds = this.timeLeft % 60;
}



Timer.prototype.motion = function (counter) {
  if (this.timeLeft === 0) {
    console.log('here');
  clearInterval(this.counter);
}
else {
  this.timeLeft --;
  console.log(this.timeLeft);
};
};

Timer.prototype.endTimer = function () {
  console.log('timer done!');
};
module.exports = Timer;
