const validate = (value, type) => {
  const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  const email = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  const mobile = /(01[016789])([1-9]{1}[0-9]{2,3})([0-9]{4})$/;
  const num = /^[0-9]*$/;
  if (type === 'email') {
    if (email.test(value)) {
      return true;
    }
  } else if (type === 'num') {
    if (num.test(value)) {
      return true;
    }
  } else if (type === 'mobile') {
    if (mobile.test(value)) {
      return true;
    }
  } else if (type === 'kr') {
    if (korean.test(value)) {
      return true;
    }
  } else {
    return false;
  }
};

const checkValidate = (checkData, edit) => {
  if (!checkData.title) {
    return alert('타이틀은 필수값입니다.');
  }

  if (edit !== 'edit' && !checkData.id) {
    return alert('ID는 필수값입니다.');
  }

  if (!validate(checkData.email, 'email')) {
    return alert('이메일 형식에 맞춰서 입력해주세요.');
  }
  if (!checkData.name) {
    return alert('Name은 필수값입니다.');
  }

  if (!validate(checkData.mobile, 'mobile')) {
    return alert('전화번호 형식에 맞춰서 입력해주세요.');
  }

  if (edit !== 'edit' && !checkData.team) {
    return alert('Team는 필수값입니다.');
  }

  return true;
};
