'use strict';

var NAMES = ['Иван ', 'Хуан Себастьян ', 'Мария ', 'Кристоф ',
  'Виктор ', 'Юлия ', 'Люпита ', 'Вашингтон '];
var SURNAMES = ['да Марья ', 'Верон ', 'Мирабелла ', 'Вальц ',
  'Онопко ', 'Топольницкая ', 'Нионго ', 'Ирвинг '];
var COLOR_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)',
  'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var COLOR_EYES = ['black', 'red', 'blue', 'yellow', 'green'];


var setupBlock = document.querySelector('.setup');
setupBlock.classList.remove('hidden');

var setupWizards = document.querySelector('.setup-similar');
setupWizards.classList.remove('hidden');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var similarListElement = document.querySelector('.setup-similar-list');

// Генерация случайного числа

var getRandomNumber = function (number) {
  return Math.floor(Math.random() * number.length);
};

// Создание случайные инициалы
var getDiffirentNames = function (name, surname) {
  var diffNames = [name[getRandomNumber(name)], surname[getRandomNumber(surname)]];
  return diffNames[getRandomNumber(diffNames)] + diffNames[getRandomNumber(diffNames)];
};


var wizards = [
  {
    name: getDiffirentNames(NAMES, SURNAMES),
    coatColor: COLOR_COATS[getRandomNumber(COLOR_COATS)],
    eyesColor: COLOR_EYES[getRandomNumber(COLOR_EYES)]
  },
  {
    name: getDiffirentNames(NAMES, SURNAMES),
    coatColor: COLOR_COATS[getRandomNumber(COLOR_COATS)],
    eyesColor: COLOR_EYES[getRandomNumber(COLOR_EYES)]
  },
  {
    name: getDiffirentNames(NAMES, SURNAMES),
    coatColor: COLOR_COATS[getRandomNumber(COLOR_COATS)],
    eyesColor: COLOR_EYES[getRandomNumber(COLOR_EYES)]
  },
  {
    name: getDiffirentNames(NAMES, SURNAMES),
    coatColor: COLOR_COATS[getRandomNumber(COLOR_COATS)],
    eyesColor: COLOR_EYES[getRandomNumber(COLOR_EYES)]
  },
];

// Создание разметки
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};


var getFragment = function (fragments) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < fragments.length; i++) {
    fragment.appendChild(renderWizard(fragments[i]));
  }
  return fragment;
};

similarListElement.appendChild(getFragment(wizards));

