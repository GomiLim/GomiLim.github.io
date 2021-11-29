const makeFormList = () => {
  for (data of initialDialogData) {
  }

  initialDialogData.forEach((data, index) => {
    if (index) {
      let $list = document.createElement("li");
      $list.setAttribute("data-index", index);

      let $dialogLabel = document.createElement("label");
      $dialogLabel.for = `${data.label}`;
      $dialogLabel.innerText = data.label;

      let $dialogInput = document.createElement("input");
      $dialogInput.className = "border-style";
      $dialogInput.type = data.inputType;
      $dialogInput.name = data.label;
      $dialogInput.id = data.label;

      $list.appendChild($dialogLabel);
      $list.appendChild($dialogInput);

      $dialogListBox.appendChild($list);
    } else {
      const $listTitle = document.createElement("h2");
      $listTitle.className = "dialog-title";
      const $listTitleInput = document.createElement("input");
      $listTitleInput.name = "title";
      $listTitleInput.type = "text";
      $listTitleInput.className = "border-style";
      $listTitleInput.placeholder = "타이틀을 입력해주세요.";
      $listTitle.appendChild($listTitleInput);

      const $listTitleEditBTN = document.createElement("span");
      $listTitleEditBTN.className = "edit-title";
      $listTitleEditBTN.innerHTML = '<i class="far fa-edit"></i>';

      $dialogTitleBox.appendChild($listTitleEditBTN);
      $dialogTitleBox.prepend($listTitle);
    }
  });
};

const makeUpdateUserList = (userList) => {
  const $userListBox = document.createElement("li");
  $userListBox.className = "list-data";
  const $userListEditButton = document.createElement("span");
  $userListEditButton.className = "edit-data";
  $userListEditButton.innerText = "편집하기";

  userList.at(-1).forEach((userData, index) => {
    if (!index) $userListEditButton.dataset.id = userData;
    else {
      const $userData = document.createElement("p");
      $userData.innerHTML = userData;
      $userListBox.appendChild($userData);
      $userListBox.appendChild($userListEditButton);
    }
  });

  $userListWrapper.prepend($userListBox);
};

const updateUserList = (userList, updateData) => {
  let findUpdateDataIndex = userList.findIndex(
    (list) => list[0] === updateData[0]
  );
  userList[findUpdateDataIndex] = [...updateData];

  document.querySelectorAll(".list-data").forEach((el) => el.remove());
  userList.forEach((userData) => {
    const $userListBox = document.createElement("li");
    $userListBox.className = "list-data";
    const $userListEditButton = document.createElement("span");
    $userListEditButton.className = "edit-data";
    $userListEditButton.innerText = "편집하기";
    userData.forEach((data, index) => {
      if (!index) $userListEditButton.dataset.id = data;
      else {
        const $userData = document.createElement("p");
        $userData.innerHTML = data;
        $userListBox.appendChild($userData);
        $userListBox.appendChild($userListEditButton);
      }
    });
    $userListWrapper.prepend($userListBox);
  });
};

const setFormData = (reset = false, data, isEdit = false) => {
  document.querySelector('input[name="title"]').value = reset ? "" : data.title;
  document.querySelector('input[name="id"]').value = reset ? "" : data.id;
  document.querySelector('input[name="email"]').value = reset ? "" : data.email;
  document.querySelector('input[name="name"]').value = reset ? "" : data.name;
  document.querySelector('input[name="mobile"]').value = reset
    ? ""
    : data.mobile;
  document.querySelector('input[name="team"]').value = reset ? "" : data.team;
};

const editFormData = (isEdit = true, type = "") => {
  if (type === "title") {
    document.querySelector('input[name="title"]').disabled = !isEdit;
  } else {
    document.querySelector('input[name="id"]').disabled =
      type === "all" ? false : true;
    document.querySelector('input[name="team"]').disabled =
      type === "all" ? false : true;
    document.querySelector('input[name="title"]').disabled = !isEdit;
    document.querySelector('input[name="email"]').disabled = !isEdit;
    document.querySelector('input[name="name"]').disabled = !isEdit;
    document.querySelector('input[name="mobile"]').disabled = !isEdit;
  }
};

window.onload = function () {
  makeFormList();
};
