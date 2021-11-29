let dialog;
let changeTitle = false;

$addBTN.addEventListener("click", () => {
  setFormData(true, {});
  editFormData(true, "all");
  dialog = new CommonDialog({});
  dialog.open();
});

$saveBTN.addEventListener("click", () => {
  let isEdit = $saveBTN.innerText === "저장" || $saveBTN.innerText === "편집";

  const formData = new FormData(document.querySelector("form"));
  const setData = { index: Date.now() };
  for (var pair of formData.entries()) {
    setData[`${pair[0]}`] = pair[1];
  }
  if (changeTitle) {
    //타이틀 변경
    dialog.on("onChangeTitle", (param) => {
      const { prevTitle, newTitle } = param;
      alert(`타이틀이 ${prevTitle} 에서 ${newTitle}로 수정되었습니다.`);
      dialog.close();
      changeTitle = false;
      dialog.isEditTable(false);
      updateUserList(userList, dialog.getDataSource());
    });

    dialog.changeTitle(document.querySelector('input[name="title"]').value);
  } else if (isEdit) {
    //데이터 수정
    const isEditing = $saveBTN.innerText === "저장";
    const editData = {};
    for (var pair of formData.entries()) {
      editData[`${pair[0]}`] = pair[1];
    }

    if (isEditing) {
      dialog.on("onSave", (getData) => {
        alert(getData.message);
        setFormData(false, getData.userList);
        dialog.close();
        updateUserList(userList, Object.values(getData.userList));
      });
 if (checkValidate(editData, 'edit')) {
        dialog.save(editData);
      }
    } else {
      dialog.isEditTable(true);
    }
  } else {
    //데이터 생성
    dialog = new CommonDialog(setData);
    dialog.on("onSave", (getData) => {
      userList.push(getData.userList);
      makeUpdateUserList(userList);
      alert(getData.message);
      setFormData(true, {});
      dialog.close();
    });
  if (checkValidate(setData)) {
      dialog.save(setData);
    }
  }
});

$cancelBTN.addEventListener("click", () => {
  if (dialog.dialogState.isEdit) {
    dialog.on("onCancel", (getData) => {
      setFormData(false, getData.userList);
    });
    dialog.cancel();
  } else {
    $dialogModal.style.display = "none";
    dialog.close();
  }
});

document.addEventListener("click", function (event) {
  if (event.target.matches(".edit-data")) {
    const selectId = event.target.dataset.id;
    const getSelectData = userList.filter((list) => list[0] === +selectId);
    const setValue = dialog.setDataSource(getSelectData);
    editFormData(false);
    dialog.on("onOpen", () => {
      setFormData(false, setValue);
    });

    dialog.open();
  }

  if (event.target.matches(".fa-edit")) {
    editFormData("true", "title");
    changeTitle = true;
  }
});
