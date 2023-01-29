const watermarkId = "1.23452384164.123412415";
const set = (str) => {
  const el = document.getElementById(watermarkId);
  if (el !== null) {
    document.body.removeChild(el);
  }

  //创建一个画布
  const can = document.createElement("canvas");
  //设置画布的长宽
  const canvasWidth =200;
  can.width = canvasWidth;
  can.height = 120;

  const cans = can.getContext("2d");
  //旋转角度
  cans.rotate(-20 * Math.PI / 180);
  cans.translate(-30, 20);
  // 字体
  cans.font = "16px Vedana";
  //设置填充绘画的颜色、渐变或者模式
  cans.fillStyle = "rgba(200, 200, 200, 0.20)";
  //设置文本内容的当前对齐方式
  cans.textAlign = "left";
  //设置在绘制文本时使用的当前文本基线
  cans.textBaseline = "middle";

  //在画布上绘制填色的文本（输出的文本，开始绘制文本的X坐标位置，开始绘制文本的Y坐标位置）
  let lineWidth = 0;
  let initHeight = can.height / 2;
  let lastSubStrIndex = 0;
  for (let i = 0; i < str.length; i++) {
    lineWidth += cans.measureText(str[i]).width;
    if (lineWidth > canvasWidth) {
      cans.fillText(str.substring(lastSubStrIndex, i), 10, initHeight);
      initHeight += 18;
      lineWidth = 0;
      lastSubStrIndex = i;
    }
    if (i === str.length - 1) {
      cans.fillText(str.substring(lastSubStrIndex, i + 1), 10, initHeight);
    }
  }

  const divDisNum = 50;
  const div = document.createElement("div");
  div.id = watermarkId;
  div.style.pointerEvents = "none";
  div.style.top = divDisNum / 2 + "px";
  div.style.left = divDisNum / 2 + "px";
  div.style.position = "fixed";
  div.style.zIndex = "100000";
  div.style.width = document.documentElement.clientWidth - divDisNum + "px";
  div.style.height = document.documentElement.clientHeight - divDisNum + "px";
  div.style.background = "url(" + can.toDataURL("image/png") + ") center 50% repeat";
  document.body.appendChild(div);
  return watermarkId;
};

// 设置水印
export const setWatermark = (str) => {
  const waterMarkEle = document.getElementById(watermarkId);
  if (str && !waterMarkEle) {
    set(str);
    window.onresize = () => {
      set(str);
    };
  }
};

// 清除水印
export const outWatermark = () => {
  const waterMarkEle = document.getElementById(watermarkId);
  if (waterMarkEle) {
    document.body.removeChild(waterMarkEle);
  }
};

const DomUtils = {
  setWatermark,
  outWatermark
}

export default DomUtils;