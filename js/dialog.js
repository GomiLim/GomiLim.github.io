class CommonDialog {
  constructor(data) {
    this.eventCallbacks = {};
    this.dialogState = {
      isEdit: false,
    };
    this.formData = {
      index: Date.now(),
      title: data.title ?? '',
      id: data.id ?? '',
      email: data.email ?? '',
      name: data.name ?? '',
      mobile: data.mobile ?? '',
      team: data.team ?? '',
    };
  }

  reset() {
    return (this.dialogState.edit = false);
  }

  on(event_name, callback) {
    this.eventCallbacks[event_name] = callback;
  }

  open() {
    $dialogModal.style.display = 'flex';
    $dialogButtonBox.style.flexDirection = 'inherit';
    $dialogButtonBox.style.justifyContent = 'flex-end';
    if (this.formData.title) {
      $saveBTN.innerText = '편집';
      $cancelBTN.innerText = '닫기';
    } else {
      $saveBTN.innerText = '추가';
      $cancelBTN.innerText = '취소';
    }
    if (this.eventCallbacks.onOpen) {
      return this.eventCallbacks.onOpen();
    }
  }

  close() {
    if (this.eventCallbacks.onClose) {
      if (this.eventCallbacks.onBeforeClose && this.dialogState.isEdit) {
        const result = this.eventCallbacks.onBeforeClose();
        if (!result) {
          return;
        }
      }
      this.dialogState.isVisible = false;
      return this.eventCallbacks.onClose();
    }
    $dialogModal.style.display = 'none';
  }

  changeTitle(title) {
    const prevTitle = this.formData.title;
    const newTitle = title;

    if (this.eventCallbacks.onBeforeChangeTitle) {
      const result = this.eventCallbacks.onBeforeChangeTitle({ prevTitle, newTitle });
      if (!result) {
        return;
      }
    }

    this.formData = { ...this.formData, title };
    if (this.eventCallbacks.onChangeTitle) {
      this.eventCallbacks.onChangeTitle({ prevTitle, newTitle });
    }
  }

  isEditTable(edit) {
    this.dialogState.isEdit = edit;
    $dialogButtonBox.style.flexDirection = 'row-reverse';
    $dialogButtonBox.style.justifyContent = 'flex-start';
    $saveBTN.innerText = '저장';
    $cancelBTN.innerText = '취소';
    return editFormData(edit);
  }

  save(isEditUserData) {
    const message = this.dialogState.isEdit;
    if (this.eventCallbacks.onSave) {
      const updateData = { ...this.formData, ...isEditUserData };
      editFormData(false);
      const userList = this.dialogState.isEdit ? updateData : Object.values(updateData);
      this.dialogState.isEdit = false;
      return this.eventCallbacks.onSave({
        userList: userList,
        message: message ? '수정되었습니다' : '생성되었습니다',
      });
    }
  }

  cancel() {
    if (this.eventCallbacks.onCancel) {
      if (this.dialogState.isEdit) {
        if (!confirm('아직 저장되지 않은 정보가 있습니다.\n정말 취소하시겠습니까?')) {
          return;
        } else {
          $saveBTN.innerText = '편집';
          $cancelBTN.innerText = '닫기';
          $dialogButtonBox.style.flexDirection = 'inherit';
          $dialogButtonBox.style.justifyContent = 'flex-end';
        }
      }
      this.dialogState.isEdit = false;
      editFormData(false);
      return this.eventCallbacks.onCancel({ userList: this.formData });
    }
  }

  getDataSource() {
    return Object.values(this.formData);
  }

  setDataSource(setData) {
    const newData = setData[0];
    this.formData.index = newData[0];
    this.formData.title = newData[1];
    this.formData.id = newData[2];
    this.formData.email = newData[3];
    this.formData.name = newData[4];
    this.formData.mobile = newData[5];
    this.formData.team = newData[6];

    return this.formData;
  }
}
