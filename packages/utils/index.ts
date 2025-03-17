// 把驼峰转换为横杠
export const toLine = (value: string) => {
  return value.replace(/(A-Z)g/, '-$1').toLowerCase()
}
