import {Message, MessageBox} from 'element-ui'


/**
 * 成功 message 消息提示框
 * @param content
 */
export function successMessage(content) {
  Message.success({
    message: content,
    type: 'success'
  });
}


/**
 *警告 message 消息提示框
 * @param content
 */
export function warningMessage(content) {
  Message.warning({
    message: content,
    type: 'warning'
  });
}


/**
 *警告 message 消息提示框
 * @param content
 */
export function errorMessage(content) {
  Message.error({
    message: content,
    type: 'error'
  });
}


/**
 *警告 message 消息提示框
 * @param content
 */
export function successMessageBox({content = '', confirmButtonText = '确定', title = '提示', cancelButtonText = '取消', cuccessMessage = '',errorMessage = ''}) {
  MessageBox.confirm(content, title, {
    confirmButtonText: confirmButtonText,
    cancelButtonText: cancelButtonText,
    type: 'warning'
  }).then(() => {
    this.successMessage(cuccessMessage)
  }).catch(() => {
    this.errorMessage(errorMessage)
  });
}
