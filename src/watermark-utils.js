const watermarkId = '1.23452384164.123412415';
const DEFAULT_BASE_SIZE = 14;
const DEFAULT_POSITION = 'bottom-right';

const set = (str) => {
  const el = document.getElementById(watermarkId);
  if (el !== null) {
    document.body.removeChild(el);
  }

  //创建一个画布
  const can = document.createElement('canvas');
  //设置画布的长宽
  const canvasWidth = 200;
  can.width = canvasWidth;
  can.height = 120;

  const cans = can.getContext('2d');
  //旋转角度
  cans.rotate((-20 * Math.PI) / 180);
  cans.translate(-30, 20);
  // 字体
  cans.font = '16px Vedana';
  //设置填充绘画的颜色、渐变或者模式
  cans.fillStyle = 'rgba(200, 200, 200, 0.20)';
  //设置文本内容的当前对齐方式
  cans.textAlign = 'left';
  //设置在绘制文本时使用的当前文本基线
  cans.textBaseline = 'middle';

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
  const div = document.createElement('div');
  div.id = watermarkId;
  div.style.pointerEvents = 'none';
  div.style.top = divDisNum / 2 + 'px';
  div.style.left = divDisNum / 2 + 'px';
  div.style.position = 'fixed';
  div.style.zIndex = '100000';
  div.style.width = document.documentElement.clientWidth - divDisNum + 'px';
  div.style.height = document.documentElement.clientHeight - divDisNum + 'px';
  div.style.background =
    'url(' + can.toDataURL('image/png') + ') center 50% repeat';
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
};

const imgToCanvas = (img) => {
  let canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;
  let ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  return canvas;
};

/**
 *
 * @param {*} canvas
 * @param {*} height 水印高度
 * @param {*} width 水印宽度
 * @returns
 */
const calcFontColor = (canvas, height = 0, width = 0, options = {}) => {
  const { position = DEFAULT_POSITION } = options;

  const ctx = canvas.getContext('2d');
  const xOffset = position === 'bottom-left' ? 0 : canvas.width - width;

  console.log('xOffset ', xOffset);
  const yOffset = canvas.height - height;
  const imageData = ctx.getImageData(xOffset, yOffset, width, height);
  const data = imageData.data;
  // Calculate the dominant color of the image
  let rSum = 0;
  let gSum = 0;
  let bSum = 0;
  let count = 0;
  for (let i = 0; i < data.length; i += 4) {
    // Skip transparent pixels
    if (data[i + 3] === 0) continue;

    // Sum up the RGB values
    rSum += data[i];
    gSum += data[i + 1];
    bSum += data[i + 2];

    // Increment the pixel count
    count++;
  }
  // Calculate the average RGB values
  const rAvg = Math.round(rSum / count);
  const gAvg = Math.round(gSum / count);
  const bAvg = Math.round(bSum / count);
  // Calculate the grayscale value of the dominant color
  const gray = Math.round(0.299 * rAvg + 0.587 * gAvg + 0.114 * bAvg);
  // Set the watermark color according to the grayscale value
  let watermarkColor;
  if (gray > 192) {
    watermarkColor = 'black';
  } else {
    watermarkColor = 'white';
  }
  return watermarkColor;
};

const watermark = (canvas, text, type = 'image/jpeg', options) => {
  const {
    baseSize = DEFAULT_BASE_SIZE,
    position = DEFAULT_POSITION,
    minSize = baseSize,
  } = options;

  console.log('baseSize ', baseSize);
  return new Promise((resolve, reject) => {
    let ctx = canvas.getContext('2d');

    const baseFontSize = baseSize;
    console.log('canvas.height ', canvas.height);
    const coefficient = canvas.height / 1080;
    let fontSize = baseFontSize * coefficient;
    if (fontSize < minSize) {
      fontSize = minSize;
    }

    // 设置填充字号和字体，样式
    ctx.font = `${fontSize}px 宋体`;

    // 设置右对齐
    ctx.textAlign = position === 'bottom-left' ? 'left' : 'right';

    const lines = text.split('\n'); // 倒序行
    lines.reverse();

    const lineHeight = 1.5 * fontSize;

    console.log('fontSize ', fontSize);

    const bottom = fontSize;
    const height = bottom + (lines.length - 1) * lineHeight;
    let maxLine = lines[0];
    for (const line of lines) {
      if (line.length > maxLine.length) {
        maxLine = line;
      }
    }
    const width = maxLine.length * fontSize;
    // ctx.fillStyle = '#FFC82C';
    ctx.fillStyle = calcFontColor(canvas, height, width, { position });

    // 在指定位置绘制文字，这里指定距离右下角20坐标的地方
    const x = position === 'bottom-left' ? fontSize : canvas.width - fontSize;

    for (let i = 0; i < lines.length; i++) {
      ctx.fillText(lines[i], x, canvas.height - bottom - i * lineHeight);
    }
    canvas.toBlob((blob) => resolve(blob), type);
  });
};

export const imgWatermark = async (file, text, options = {}) => {
  const img = await blobToImg(file);
  const canvas = imgToCanvas(img);
  const blob = await watermark(canvas, text, file.type, options);
  return new File([blob], file.name, { type: file.type });
};
/** 图片加水印 end */

const WatermarkUtils = {
  imgWatermark,
};

export default WatermarkUtils;
