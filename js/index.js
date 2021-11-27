const makeFormList = () => {
  for (data of initialDialogData) {
  }

  initialDialogData.forEach((data, index) => {
    if (index) {
      let $list = document.createElement('li');
      $list.setAttribute('data-index', index);

      let $dialogLabel = document.createElement('label');
      $dialogLabel.for = `${data.label}`;
      $dialogLabel.innerText = data.label;

      let $dialogInput = document.createElement('input');
      $dialogInput.type = data.inputType;
      $dialogInput.name = data.label;
      $dialogInput.id = data.label;

      $list.appendChild($dialogLabel);
      $list.appendChild($dialogInput);

      $dialogListBox.appendChild($list);
    } else {
      const $listTitle = document.createElement('h2');
      $listTitle.className = 'dialog-title';
      $listTitle.innerText = '타이틀을 입력해주세요.';

      const $listTitleEditBTN = document.createElement('span');
      $listTitleEditBTN.className = 'edit-title';
      $listTitleEditBTN.innerHTML = '<i class="far fa-edit"></i>';

      $dialogTitleBox.appendChild($listTitleEditBTN);
      $dialogTitleBox.prepend($listTitle);
    }
  });
};

const updateUserList = (userList) => {
  console.log(userList);
  const $userListBox = document.createElement('li');
  $userListBox.className = 'list-data';
  userList.at(-1).forEach((userData, index) => {
    const $userData = document.createElement('p');
    $userData.innerHTML = userData;
    $userListBox.appendChild($userData);
  });

  $userListWrapper.prepend($userListBox);
};

window.onload = function () {
  makeFormList();
};
