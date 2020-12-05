import crypto from 'crypto'



/* md5加密 */
export function md5(value) {
  const md5 = crypto.createHash('md5');
  md5.update(value);
  return md5.digest("hex")
}
