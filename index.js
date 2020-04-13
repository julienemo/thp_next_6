// generate default character at page charging
const myChar = new Paladin('Sirosse', 8, 4, 130);

// show default setting by button
const btnShowChar = document.getElementById('show_char');
const charName = document.getElementById('name');
const charRace = document.getElementById('race');
const charHp = document.getElementsByClassName('hp')[0];
const charDmg = document.getElementsByTagName('b')[0];
const charMana = document.querySelector('.mana span');

btnShowChar.addEventListener('click', function(e){
  e.preventDefault();
  myChar.displayInformation(
    charName, 
    charRace, 
    charHp, 
    charDmg, 
    charMana
  );
});

// update char settings and show by form submit

const btnChangeChar = document.getElementById('change_char');

btnChangeChar.addEventListener('click', function(e) {
  e.preventDefault();

  btnShowChar.style.display = 'none';

  const newName = document.getElementById('new_name')
                          .value || myChar.name;
  const newHp = document.getElementById('new_hp')
                        .value || myChar.hp;
  const newDmg = document.getElementById('new_dmg')
                         .value || myChar.dmg;
  const newMana = document.getElementById('new_mana')
                          .value || myChar.mana;
  
  myChar.update(newName, newHp, newDmg, newMana);
  myChar.displayInformation(
    charName, 
    charRace, 
    charHp, 
    charDmg, 
    charMana
  );
});

// customize cursor
const newCursor = document.getElementById('custom_cursor');

document.addEventListener('mousemove', e => {
  newCursor.style.visibility = 'visible';
  newCursor.style.position = 'absolute';
  newCursor.style.top = `${e.pageY - 10}px`;
  newCursor.style.left = `${e.pageX - 10}px`;
})

// cursor changes according to mouse event on picture
const draggableImg = document.getElementById('char_img');
const openHandCursor = () => {
  newCursor.style.backgroundImage = 'url("openhand.png")';
}
const resetCursor = () => {
  newCursor.style.backgroundImage = 'url("")';
}
draggableImg.addEventListener('mouseover', openHandCursor);
draggableImg.addEventListener('mouseleave', resetCursor);

// draggable picture
draggableImg.onmousedown = function(event) {
  draggableImg.style.position = 'absolute';

  const moveAction = (e) => {
    newCursor.style.backgroundImage = 'url("fist.png")';
    draggableImg.style.left = e.pageX - draggableImg.offsetWidth / 2 + 'px';
    draggableImg.style.top = e.pageY - draggableImg.offsetHeight / 2 + 'px';
    // this whole offset thing is quite important
    // it ensures that the cursor is in the middle of the element when dragging
  }

  const stopAction = (e) => {
    newCursor.style.backgroundImage = 'url("openhand.png")';
    document.removeEventListener('mousemove', moveAction);
    draggableImg.onmouseup = null;
  }

  document.addEventListener('mousemove', moveAction);
  // could have simply done document.onmousemove = moveAction;
  // BUT, since later we are removing the eventListener of mousemove
  // its event need to be added with an eventListener
  // otherwise there is nothing to remove

  document.onmouseup = stopAction;
};

draggableImg.ondragstart = function() {
  return false; 
  // this is to prevent a default behaviour when dragging
  // element makes a semi-transparent duplicate
  // moves with a fist cursor
};