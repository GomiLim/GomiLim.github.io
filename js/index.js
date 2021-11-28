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
      $dialogInput.className = 'border-style';
      $dialogInput.type = data.inputType;
      $dialogInput.name = data.label;
      $dialogInput.id = data.label;

      $list.appendChild($dialogLabel);
      $list.appendChild($dialogInput);

      $dialogListBox.appendChild($list);
    } else {
      const $listTitle = document.createElement('h2');
      $listTitle.className = 'dialog-title';
      const $listTitleInput = document.createElement('input');
      $listTitleInput.name = 'title';
      $listTitleInput.type = 'text';
      $listTitleInput.className = 'border-style';
      $listTitleInput.placeholder = '타이틀을 입력해주세요.';
      $listTitle.appendChild($listTitleInput);

      const $listTitleEditBTN = document.createElement('span');
      $listTitleEditBTN.className = 'edit-title';
      $listTitleEditBTN.innerHTML = '<i class="far fa-edit"></i>';

      $dialogTitleBox.appendChild($listTitleEditBTN);
      $dialogTitleBox.prepend($listTitle);
    }
  });
};

const updateUserList = (userList) => {
  const $userListBox = document.createElement('li');
  $userListBox.className = 'list-data';
  const $userListEditButton = document.createElement('span');
  $userListEditButton.className = 'edit-data';
  $userListEditButton.innerText = '수정하기';
  userList.at(-1).forEach((userData, index) => {
    const $userData = document.createElement('p');
    $userData.innerHTML = userData;
    $userListBox.appendChild($userData);
    $userListBox.appendChild($userListEditButton);
  });

  $userListWrapper.prepend($userListBox);
};

window.onload = function () {
  makeFormList();
};
