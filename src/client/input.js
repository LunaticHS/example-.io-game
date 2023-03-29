// Learn more about this file at:
// https://victorzhou.com/blog/build-an-io-game-part-1/#6-client-input-%EF%B8%8F
import { updateDirection, updateSpeed, updateFire } from './networking';

const keymap = new Map();

function onMouseInput(e) {
  handleInput(e.clientX, e.clientY);
}

function onFire(e) {
  const dir = Math.atan2(e.clientX - window.innerWidth / 2, window.innerHeight / 2 - e.clientY);
  updateFire(dir);
}

function onTouchInput(e) {
  const touch = e.touches[0];
  handleInput(touch.clientX, touch.clientY);
}

function onKeyboardInput(e) {
  keymap.set(e.key,1);
  updatekey();
}

function onKeyboardInput_up(e) {
  keymap.set(e.key,0);
  updatekey();
}

function updatekey(){
  const dir = Math.atan2(1, 1);
  if(keymap.get('w')==1 && keymap.get('d')==1){
    updateDirection(dir);
  }
  else if(keymap.get('d')==1 && keymap.get('s')==1){
    updateDirection(3*dir);
  }
  else if(keymap.get('s')==1 && keymap.get('a')==1){
    updateDirection(5*dir);
  }
  else if(keymap.get('w')==1 && keymap.get('a')==1){
    updateDirection(7*dir);
  }
  else if(keymap.get('w')==1){
    updateDirection(0);
  }
  else if(keymap.get('d')==1){
    updateDirection(2*dir);
  }
  else if(keymap.get('s')==1){
    updateDirection(4*dir);
  }
  else if(keymap.get('a')==1){
    updateDirection(6*dir);
  }
  else{
    updateSpeed(0);
    return;
  }
  updateSpeed(400);
}

function handleInput(x, y) {
  const dir = Math.atan2(x - window.innerWidth / 2, window.innerHeight / 2 - y);
  updateDirection(dir);
}

export function startCapturingInput() {
  window.addEventListener('mousemove', onFire);
  window.addEventListener('click', onFire);
  window.addEventListener('keydown', onKeyboardInput);
  window.addEventListener('keyup', onKeyboardInput_up);
  window.addEventListener('touchstart', onTouchInput);
  window.addEventListener('touchmove', onTouchInput);
}

export function stopCapturingInput() {
  window.removeEventListener('mousemove', onFire);
  window.removeEventListener('click', onFire);
  window.removeEventListener('keydown', onKeyboardInput);
  window.removeEventListener('touchstart', onTouchInput);
  window.removeEventListener('touchmove', onTouchInput);
}
