
const is = (name, suffixs) => {
  if(!name){
    return false;
  }
  const suffixIndex = name.lastIndexOf('.');
  if(suffixIndex < 0){
    return false;
  }
  const suffix = name.substring(suffixIndex);
  if(suffixs.includes(suffix.toLowerCase())){
    return true;
  }
  return false;
}

/**
 * 是图片
 * @param name 
 * @returns 
 */
 export const isImg = (name) => {
  const imgSuffixs = ['.jpg','.jpeg','.png','.gif'];
  const ret = is(name, imgSuffixs);
  return ret;
}

/**
 * 是 PDF
 * @param name 
 * @returns 
 */
 export const isPdf = (name) => {
  const pdfSuffixs = ['.pdf'];
  return is(name, pdfSuffixs);
}

const FileUtils = {
  isImg,
  isPdf
}

export default FileUtils;