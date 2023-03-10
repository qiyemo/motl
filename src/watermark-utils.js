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


/** 图片加水印 start */
const blobToImg = (blob) => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.addEventListener('load', () => {
      let img = new Image();
      img.src = reader.result;
      img.addEventListener('load', () => resolve(img));
    });

    
    reader.readAsDataURL(blob);
  });
}

const imgToCanvas = (img) => {
  let canvas = document.createElement('canvas')
  canvas.width = img.width
  canvas.height = img.height
  let ctx = canvas.getContext('2d')
  ctx.drawImage(img, 0, 0)
  return canvas
 }

 const watermark = (canvas, text, type = 'image/jpeg') => {
  return new Promise((resolve, reject) => {
    let ctx = canvas.getContext('2d');

    const baseFontSize = 12;
    const coefficient = canvas.height / 1080;
    let fontSize = baseFontSize * coefficient;
    if (fontSize < 12) {
      fontSize = 12;
    }

    // 设置填充字号和字体，样式
    ctx.font = `${fontSize}px 宋体`;
    ctx.fillStyle = '#FFC82C';
    // 设置右对齐
    ctx.textAlign = 'right';
    // 在指定位置绘制文字，这里指定距离右下角20坐标的地方

    const lines = text.split('\n'); // 倒序行
    lines.reverse();

    const lineHeight = 1.5 * fontSize;

    for (let i = 0; i < lines.length; i++) {
      ctx.fillText(
        lines[i],
        canvas.width - fontSize,
        canvas.height - fontSize - i * lineHeight
      );
    }
    canvas.toBlob((blob) => resolve(blob), type);
  });
}; 

 export const imgWatermark = async (file, text) => {

  const img = await blobToImg(file);
  const canvas = imgToCanvas(img);
  const blob = await watermark(canvas, text, file.type);
  return new File([blob], file.name, {type: file.type});
 }
 /** 图片加水印 end */

 const WatermarkUtils = {
  imgWatermark
 }

 export default WatermarkUtils;