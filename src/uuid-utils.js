

/**
   * 生成一个36位（标准的UUID格式） uuid
   */
 export const  uuid = () => {
  const str = 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx';
  const chars = '0123456789abcdef';
  const len = chars.length;
  return str.replace(/x/g, (match) => {
    return chars.charAt(Math.floor(Math.random() * len));
  });
}

/**
 * 生成一个 32 位 uuid
 */
export const  uuid32 = () => {
  return UUIDUtils.uuid().replace(/-/g, '');
}

const UUIDUtils = {
  uuid,
  uuid32
}

export default UUIDUtils