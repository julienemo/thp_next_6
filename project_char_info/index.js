const btnShowChar = document.getElementById('show_char');
const btnChangeChar = document.getElementById('change_char');
const myChar = new Paladin('Sirosse', 8, 4, 130);

const charName = document.getElementById('name');
const charRace = document.getElementById('race');
const charHp = document.getElementsByClassName('hp')[0];
const charDmg = document.getElementsByTagName('b')[0];
const charMana = document.querySelector('.mana span');

btnShowChar.addEventListener('click', function(e){
  e.preventDefault();
  myChar.displayInformation(charName, charRace, charHp, charDmg, charMana);
});

btnChangeChar.addEventListener('click', function(e) {
  e.preventDefault();

  const newName = document.getElementById('new_name').value || myChar.name;
  const newHp = document.getElementById('new_hp').value || myChar.hp;
  const newDmg = document.getElementById('new_dmg').value || myChar.dmg;
  const newMana = document.getElementById('new_mana').value || myChar.mana;
  
  myChar.update(newName, newHp, newDmg, newMana);
  myChar.displayInformation(charName, charRace, charHp, charDmg, charMana);
});