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
