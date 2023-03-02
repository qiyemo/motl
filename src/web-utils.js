/**
 * 读文本
 * 
 * @param {*} text 
 */
export const speakText = (text) => {
  let synth = window.speechSynthesis;
  let msg = new SpeechSynthesisUtterance();
  msg.text = text; // 文字内容:
  msg.lang = 'zh-CN'; // 使用的语言:中文
  msg.volume = 10; // 声音音量：3
  msg.rate = 1; // 语速：1
  msg.pitch = 1; // 音高：2
  synth.speak(msg); // 播放
}

/**
 * 播放声音
 * 
 * @param {*} src 
 * @returns 
 */
export const playAudio = (src, audio = new Audio()) => {
  audio.pause();
  audio.src = src;
  audio.play();
  return audio;
}

/**
 * 在浏览器中，根据文件 url 下载文件
 * 
 * @param {*} url 
 * @returns 
 */
export const download = (url) => {
  if (!url) {
    return '';
  }

  const startIndex = url.lastIndexOf('/') + 1;
  const a = document.createElement('a');
  a.download = url.substring(startIndex);
  a.href = url;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

const WebUtils = {
  speakText,
  playAudio,
  download
}

export default WebUtils;