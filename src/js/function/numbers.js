function onlyNumbers(e) {
  if ((e.keyCode < 48) || (e.keyCode > 57))
    e.returnValue = false;
}

export {onlyNumbers}
