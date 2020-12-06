import crypto from 'crypto'


/* md5加密 */
export function md5(value) {
  const md5 = crypto.createHash('md5');
  md5.update(value);
  return md5.digest("hex")
}

export function startLoading({app,text = 'Loading',spinner = 'el-icon-loading',background = 'rgba(0, 0, 0, 0.7)'}) {
  const loading = app.$loading({
    lock: app,
    text: text,
    spinner: spinner,
    background: background
  });
  return loading
}
