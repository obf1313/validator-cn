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

/**
 * @descriptor 是否包含 emoji
 * @param str 
 * @returns boolean
 */
function hasEmoji(str = '') {
  const emojiReg = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\ufe0f|\u200d|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
  return emojiReg.test(str);
}

export {
  isTFN,
  isEmail,
  isPhone,
  isIdNumber,
  isURL,
  isPassword,
  hasWhiteSpace,
  hasEmoji
};