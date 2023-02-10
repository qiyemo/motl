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

const WebUtils = {
  speakText,
  playAudio
}

export default WebUtils;