const userList = [];

class CommonDialog {
  constructor(data) {
    this.eventCallbacks = {};
    this.dialogState = {
      isVisible: false,
      isEdit: false,
    };
    this.formData = {
      index: userList.length,
      title: data.title ?? '',
      id: data.id ?? '',
      email: data.email ?? '',
      name: data.name ?? '',
      mobile: data.mobile ?? '',
      team: data.team ?? '',
    };
  }

  reset() {
    this.dialogState.edit = false;
  }

  on(event_name, callback) {
    this.eventCallbacks[event_name] = callback;
  }

  open() {
    if (this.eventCallbacks.onOpen) {
      this.dialogState.isVisible = true;
      return this.dialogState.isVisible;
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
      reset();
      this.dialogState.isVisible = false;
      return this.dialogState.isVisible;
    }
  }

  changeTitle(editTitle) {
    const prevTitle = this.formData.title;
    const newTitle = editTitle;

    if (this.eventCallbacks.onBeforeChangeTitle) {
      const result = this.eventCallbacks.onBeforeChangeTitle({ prevTitle, newTitle });
      if (!result) {
        return;
      }
    }

    this.formData.title = editTitle;

    if (this.eventCallbacks.onChangeTitle) {
      this.eventCallbacks.onChangeTitle({ prevTitle, newTitle });
    }
  }

  isEditTable() {
    return (this.dialogState.isEdit = true);
  }

  save(isEditUserData) {
    if (this.eventCallbacks.onSave) {
      const updateData = { ...this.formData, ...isEditUserData };
      return updateData;
    }
  }

  cancel() {
    if (this.eventCallbacks.onCancel) {
      this.dialogState.isEdit = false;
      return this.formData;
    }
  }

  getDataSource() {
    const dataSource = Object.values(this.formData);
    dataSource.shift();
    return dataSource;
  }

  setDataSource(setData) {
    this.formData.title = setData[0];
    this.formData.id = setData[1];
    this.formData.email = setData[2];
    this.formData.name = setData[3];
    this.formData.mobile = setData[4];
    this.formData.team = setData[5];
    return this.formData;
  }
}

let dialog = new CommonDialog({ title: 'before', name: '임고미', id: 'poilchxn' });

dialog.on('onOpen', (param) => {});

dialog.on('onClose', () => {});

dialog.on('onBeforeClose', (param) => {
  return confirm(`저장되지 않은 정보가 있습니다.\n정말 취소하시겠습니까?`);
});

dialog.on('onChangeTitle', (param) => {
  const { prevTitle, newTitle } = param;
  alert(`타이틀이 ${prevTitle} 에서 ${newTitle}로 변했습니다.`);
});

dialog.on('onBeforeChangeTitle', (param) => {
  const { prevTitle, newTitle } = param;
  return confirm(`정말 ${prevTitle} 에서 ${newTitle}로 바꾸시겠습니까?`);
});

dialog.on('onSave', (param) => {});

dialog.on('onCancel', (param) => {});
