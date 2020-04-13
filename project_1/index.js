const btnShowChar = document.getElementById('show_char');
const btnChangeChar = document.getElementById('change_char');
const defaultChar = new Paladin('Sirosse', 8, 4, 130);

const charName = document.getElementById('name');
const charRace = document.getElementById('race');
const charHp = document.getElementsByClassName('hp')[0];
const charDmg = document.getElementsByTagName('b')[0];
const charMana = document.querySelector('.mana span');

const showChar = (char) => {
  charName.innerHTML = char.name;
  charRace.innerHTML = char.constructor.name;
  charHp.innerHTML = char.hp;
  charDmg.innerHTML = char.dmg;
  charMana.innerHTML = char.mana;
}

btnShowChar.addEventListener('click', function(e){
  e.preventDefault();
  showChar(defaultChar);
});

btnChangeChar.addEventListener('click', function(e) {
  e.preventDefault();

  const newName = document.getElementById('new_name').value || defaultChar.name;
  const newHp = document.getElementById('new_hp').value || defaultChar.hp;
  const newDmg = document.getElementById('new_dmg').value || defaultChar.dmg;
  const newMana = document.getElementById('new_mana').value || defaultChar.mana;

  let newChar = new Paladin(newName, newHp, newDmg, newMana);
  console.log(newChar.name);
  showChar(newChar);
});