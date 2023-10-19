/**
 * @desc 判断是否属于外部链接
 * @param {string} url - 链接
 */
export function isHttpOrHttpsUrl(url: string) {
  let regRule = /(http|https):\/\/([\w.]+\/?)\S*/;
  return regRule.test(url.toLocaleLowerCase());
}
