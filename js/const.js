const $userListWrapper = document.querySelector('#list-box');
const $addBTN = document.querySelector('#add-data');
const $dialogForm = document.querySelector('form');
const $saveBTN = document.querySelector('.save-btn');
const $cancelBTN = document.querySelector('.cancel-btn');

const $dialogModal = document.querySelector('#modal');
const $dialogWrapper = document.querySelector('.dialog');
const $dialogListBox = document.querySelector('.dialog ul');
const $dialogTitleBox = document.querySelector('.dialog-title-box');
const $dialogButtonBox = document.querySelector('.dialog-button-box');

const userList = [];

const initialDialogData = [
  { label: 'title', inputType: 'text' },
  { label: 'id', inputType: 'text' },
  { label: 'email', inputType: 'email' },
  { label: 'name', inputType: 'text' },
  { label: 'mobile', inputType: 'number' },
  { label: 'team', inputType: 'text' },
];
