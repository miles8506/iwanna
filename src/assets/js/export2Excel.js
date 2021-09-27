/**
 * create by lwj
 * @file 导出export插件封装
 */

import * as styleXLSX from 'xlsx-style'

/**
 * 将 String 转换成 ArrayBuffer 
 * @method 类型转换
 * @param {String} [s] wordBook内容
 * @return {Array} 二进制流数组
 */
function s2ab(s) {
  let buf = null;

  if (typeof ArrayBuffer !== 'undefined') {
    buf = new ArrayBuffer(s.length);
    let view = new Uint8Array(buf);

    for (let i = 0; i != s.length; ++i) {
      view[i] = s.charCodeAt(i) & 0xFF;
    }

    return buf;
  }

  buf = new Array(s.length);

  for (let i = 0; i != s.length; ++i) {

    // 转换成二进制流
    buf[i] = s.charCodeAt(i) & 0xFF;
  }

  return buf;
}

/**
 * 方案一：利用 URL.createObjectURL 下载 （以下选用）
 * 方案二：通过 file-saver 插件实现文件下载
 * @method 文件下载
 * @param {Object} [obj] 导出内容 Blob 对象
 * @param {String} [fileName] 文件名 下载是生成的文件名
 * @return {void}
 */
function saveAs(obj, fileName) {
  let aLink = document.createElement("a");

  if (typeof obj == 'object' && obj instanceof Blob) {
    aLink.href = URL.createObjectURL(obj); // 创建blob地址
  }

  aLink.download = fileName;
  aLink.click();
  setTimeout(function () {
    URL.revokeObjectURL(obj);
  }, 100);
}

/**
 * @method 数据导出excel
 * @param {Object} [worksheets] 工作表数据内容
 * @param {String} [fileName='ExcelFile'] 导出excel文件名
 * @param {String} [type='xlsx'] 导出文件类型
 */
export default function export2Excel({
  worksheets,
  fileName = 'ExcelFile',
  type = 'xlsx'
} = {}) {

  let sheetNames = Object.keys(worksheets);
  let workbook = {
    SheetNames: sheetNames, //保存的工作表名
    Sheets: worksheets
  };

  // excel的配置项
  let wopts = {
    bookType: type,  // 生成的文件类型
    bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
    type: 'binary'
  }

  // attempts to write the workbook
  let wbout = styleXLSX.write(workbook, wopts);
  let wbBlob = new Blob([s2ab(wbout)], {
    type: "application/octet-stream"
  });

  saveAs(wbBlob, fileName + '.' + type);
}
