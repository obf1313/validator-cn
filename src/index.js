/**
 * @description 验证纳税人识别号是否规范
 * @param str 
 * @returns boolean
 */
function isTFN(str = '') {
  const buyerTaxpayerIdReg = /^[A-Z0-9]+$/;
  // 长度判断
  if (![15, 17, 18, 20].includes(str.length) || !buyerTaxpayerIdReg.test(str)) {
    return false;
  }
  return true;
}

/**
 * @description 验证邮箱
 * @param str 
 * @returns boolean
 */
function isEmail(str = '') {
  const emailReg = /^([a-zA-Z0-9]+[-_\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/;
  return emailReg.test(str);
}

/**
 * @description 验证手机号
 * @param {*} str 
 * @returns boolean
 */
function isPhone(str = '') {
  const phoneReg = /^1(3|4|5|6|7|8|9)\d{9}$/;
  return phoneReg.test(str);
}

/**
 * @description 验证身份证号
 * @param {*} str 
 * @returns boolean
 */
function isIdNumber(str = '') {
  const idNumberReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  return idNumberReg.test(str);
}

/**
 * @description 验证 URL
 * @param {*} str 
 * @returns boolean
 */
function isURL(str = '') {
  const URLReg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
  return URLReg.test(str);
}

/**
 * @descriptor 验证密码：仅由英文字母，数字以及下划线组成
 * @param {*} str 
 * @returns boolean
 */
function isPassword(str = '') {
  const passwordReg = /^[_a-zA-Z0-9]+$/;
  return passwordReg.test(str);
}

/**
 * @descriptor 包含空格及其他空白字符
 * @param {*} str 
 * @returns 
 */
function hasWhiteSpace(str = '') {
  const whiteSpaceReg = /^[^\s]*$/;
  return whiteSpaceReg.test(str);
}

export {
  isTFN,
  isEmail,
  isPhone,
  isIdNumber,
  isURL,
  isPassword,
  hasWhiteSpace
};