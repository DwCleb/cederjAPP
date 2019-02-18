const Utils = {
  decimal: (num) => {
    const casas = 2;
    const operation = Math.pow(10, casas);
    let newNum = Math.floor(num * operation) / operation;
    let str = newNum.toString();
    str = str.replace('.', ',');
    str = str.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    if (newNum % 1 === 0 || newNum === 0) str = `${str},00`;
    let newStr = str.split(',');
    if (newStr.length > 1) if (newStr[1].length < 2) str = `${str}0`;
    return str;
  },
  dateFormat: (date, format = 1) => {
    const newDate = date.split('-');
    const monthsArr = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];
    const month = newDate[1];

    switch (format) {
      case 1:
        return `${newDate[2]}/${newDate[1]}/${newDate[0]}`;
      case 2:
        return `${monthsArr[month - 1]} ${newDate[2]}`;
      case 3:
        return `${newDate[2]}/${newDate[1]}`;
      default:
        break;
    }

    return false;
  },
  hourFormat: (hour) => {
    const newHour = hour.split(':');
    return `${newHour[0]}:${newHour[1]}`;
  },
  getCurrentDateTime: () => {
    const date = new Date();

    let minutes = date.getMinutes().toString();
    let hours = date.getHours().toString();
    let seconds = date.getSeconds().toString();
    let day = date.getDate().toString();
    let month = date.getMonth().toString();
    const year = date.getFullYear().toString();

    day = (day.length < 2) ? `0${day}` : day;
    month = (month.length < 2) ? `0${month}` : month;
    hours = (hours.length < 2) ? `0${hours}` : hours;
    minutes = (minutes.length < 2) ? `0${minutes}` : minutes;
    seconds = (seconds.length < 2) ? `0${seconds}` : seconds;

    const retDate = {
      date: `${year}-${month}-${day}`,
      time: `${hours}:${minutes}:${seconds}`,
    };

    return retDate;
  },
  validateEmail: (email) => {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
  },
  validateCPF: (cpf) => {
    if (cpf == '') {
      return true;
    }

    cpf = cpf.replace(/\./gi, '').replace(/-/gi, '');
    let isValid = true;
    let sum;
    let rest;
    let i;
    i = 0;
    sum = 0;

    if (
        cpf.length != 11 ||
        cpf == '00000000000' ||
        cpf == '11111111111' ||
        cpf == '22222222222' ||
        cpf == '33333333333' ||
        cpf == '44444444444' ||
        cpf == '55555555555' ||
        cpf == '66666666666' ||
        cpf == '77777777777' ||
        cpf == '88888888888' ||
        cpf == '99999999999'
    ) {
        isValid = false;
    }

    for (i = 1; i <= 9; i++) {
        sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    rest = (sum * 10) % 11;

    if (rest == 10 || rest == 11) {
        rest = 0;
    }

    if (rest != parseInt(cpf.substring(9, 10))) {
        isValid = false;
    }

    sum = 0;

    for (i = 1; i <= 10; i++) {
        sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    rest = (sum * 10) % 11;

    if (rest == 10 || rest == 11) {
        rest = 0;
    }
    if (rest != parseInt(cpf.substring(10, 11))) {
        isValid = false;
    }

    return isValid;
  },
  validateCNPJ: (cnpj) => {
    let valida = new Array(6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2);
    let dig1 = new Number();
    let dig2 = new Number();
    let i = 0;

    let exp = /\.|\-|\//g;
    cnpj = cnpj.toString().replace(exp, '');
    let digito = new Number(eval(cnpj.charAt(12) + cnpj.charAt(13)));

    for (i = 0; i < valida.length; i++) {
        dig1 += i > 0 ? cnpj.charAt(i - 1) * valida[i] : 0;
        dig2 += cnpj.charAt(i) * valida[i];
    }
    dig1 = dig1 % 11 < 2 ? 0 : 11 - (dig1 % 11);
    dig2 = dig2 % 11 < 2 ? 0 : 11 - (dig2 % 11);

    return dig1 * 10 + dig2 == digito;
  },
  validateName: (name) => {
    const correctName = (name.length > 2);
    return correctName;
  },
  validateDDD: (ddd) => {
    const correctDDD = (ddd.length === 2);
    return correctDDD;
  },
  validateTelephone: (telephone) => {
    const correctTelephone = ((telephone.length > 7) && (telephone.length < 11));
    return correctTelephone;
  },
  validatePassword: (password) => {
    const correctPassword = (password.length > 4);
    return correctPassword;
  },
};

export default Utils;
