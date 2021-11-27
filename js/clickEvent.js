let newData;
$addBTN.addEventListener('click', () => {
  $dialogModal.style.display = 'flex';
});

$saveBTN.addEventListener('click', () => {
  const formData = new FormData(document.querySelector('form'));
  const setData = {};
  for (var pair of formData.entries()) {
    setData[`${pair[0]}`] = pair[1];
  }

  newData = new CommonDialog(setData);

  userList.push(newData.getDataSource());
  updateUserList(userList);
});

$cancelBTN.addEventListener('click', () => {
  if (newData) {
    newData.on('onClose', (isVisible) => {
      if (!isVisible) {
        $dialogModal.style.display = 'none';
      }
    });
    newData.close();
  } else {
    $dialogModal.style.display = 'none';
  }
});

$cancelBTN.addEventListener('click', () => {
  if (newData) {
    newData.on('onClose', (isVisible) => {
      if (!isVisible) {
        $dialogModal.style.display = 'none';
      }
    });
    newData.close();
  } else {
    $dialogModal.style.display = 'none';
  }
});
