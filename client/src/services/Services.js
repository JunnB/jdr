import {API_ROOT} from '../config/api-config'
// Renvoie un entier aléatoire
// entre une valeur min (incluse)
// et une valeur max (incluse)
export function randomDice(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getCurrentCharacter() {
  const name = localStorage.getItem('name');
  const strenght = localStorage.getItem('strenght');
  const health = localStorage.getItem('health');
  const luck = localStorage.getItem('health');
  if (name !== null && strenght > 0 && health > 0 && luck > 0) {
    var character = {
      submitted: true,
      characterCreated: true,
      name,
      strenght: parseInt(strenght, 10),
      health: parseInt(health, 10),
      luck: parseInt(luck, 10)
    };
    return character;
  }
}

export function generateCharacter(tmpCharacter) {
  const strenght = randomDice(7, 12);
  const health = randomDice(14, 24);
  const luck = randomDice(14, 24);

  var character = Object.assign({}, tmpCharacter);
  character.characterCreated = true;
  character.strenght = strenght;
  character.health = health;
  character.luck = luck;
  saveCharacter(tmpCharacter.name, strenght, health, luck);
  return character;
}

// La fonction stock les données dans le navigateur
export function saveCharacter(name, strenght, health, luck) {
  localStorage.setItem('name', name);
  localStorage.setItem('strenght', strenght);
  localStorage.setItem('health', health);
  localStorage.setItem('luck', luck);
}

// Enlève les données du navigateur
export function deleteCharacter() {
  localStorage.clear();
}

export const callApi = async url => {
  const response = await fetch(`${API_ROOT}${url}`);
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);

  return body.data[0];
};
