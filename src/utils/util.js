// 通用函数

function formatTime(date) {

  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();

  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':');
}

function formatNumber(n) {
  console.log(n);
  n = n.toString();
  return n[1] ? n : '0' + n;
}

// 格式化时间戳
function getTime(timestamp) {
  var time = arguments[0] || 0;
  var t, y, m, d, h, i, s;
  t = time ? new Date(time * 1000) : new Date();
  y = t.getFullYear(); // 年
  m = t.getMonth() + 1; // 月
  d = t.getDate(); // 日
  h = t.getHours(); // 时
  i = t.getMinutes(); // 分
  s = t.getSeconds(); // 秒

  // 定义时间格式
  var res = new Array();

  res['Y'] = y;
  res['m'] = (m < 10 ? '0' + m : m);
  res['d'] = (d < 10 ? '0' + d : d);
  res['H'] = (h < 10 ? '0' + h : h);
  res['i'] = (i < 10 ? '0' + i : i);
  res['s'] = (s < 10 ? '0' + s : s);

  return res;
  /* return y
      + '-'
      + (m < 10 ? '0' + m : m)
      + '-'
      + (d < 10 ? '0' + d : d)
      + ' '
      + (h < 10 ? '0' + h : h)
      + ':'
      + (i < 10 ? '0' + i : i)
      + ':'
      + (s < 10 ? '0' + s : s); */
}

function formatLocation(longitude, latitude) {
  if (typeof longitude === 'string' && typeof latitude === 'string') {
    longitude = parseFloat(longitude)
    latitude = parseFloat(latitude)
  }

  longitude = longitude.toFixed(2)
  latitude = latitude.toFixed(2)

  return {
    longitude: longitude.toString().split('.'),
    latitude: latitude.toString().split('.')
  }
}

//滚动条在Y轴上的滚动距离
function getScrollTop() {
  var scrollTop = 0,
    bodyScrollTop = 0,
    documentScrollTop = 0;
  if (document.body) {
    bodyScrollTop = document.body.scrollTop;
  }
  if (document.documentElement) {
    documentScrollTop = document.documentElement.scrollTop;
  }
  scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
  return scrollTop;
}

//文档的总高度
function getScrollHeight() {
  var scrollHeight = 0,
    bodyScrollHeight = 0,
    documentScrollHeight = 0;
  if (document.body) {
    bodyScrollHeight = document.body.scrollHeight;
  }
  if (document.documentElement) {
    documentScrollHeight = document.documentElement.scrollHeight;
  }
  scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
  return scrollHeight;
}

//浏览器视口的高度
function getWindowHeight() {
  var windowHeight = 0;
  if (document.compatMode == "CSS1Compat") {
    windowHeight = document.documentElement.clientHeight;
  } else {
    windowHeight = document.body.clientHeight;
  }
  return windowHeight;
}

/**
 * 获取格式化日期
 * 20161002
 */
function getFormatDate(str) {
  // 拆分日期为年 月 日
  var YEAR = str.substring(0, 4),
    MONTH = str.substring(4, 6),
    DATE = str.slice(-2);

  // 拼接为 2016/10/02 可用于请求日期格式
  var dateDay = YEAR + "/" + MONTH + "/" + DATE;

  // 获取星期几
  var week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
    day = new Date(dateDay).getDay();

  // 获取前一天日期 根据今天日期获取前一天的日期
  // var dateBefore = new Date( new Date( dateDay ) - 1000 * 60 * 60 * 24 ).toLocaleDateString();
  // var dateBefore = dateBefore.split('/');
  // if( dateBefore[1] < 10 ) {
  //     dateBefore[1] = '0' + dateBefore[1];
  // }
  // if( dateBefore[2] < 10 ) {
  //     dateBefore[2] = '0' + dateBefore[2];
  // }
  // dateBefore = dateBefore.join('');

  return {
    "dateDay": MONTH + "月" + DATE + "日 " + week[day]
  }
}


/**
 * 判断是否已经滚动到底部，返回true表示已经到底部
 */
function isScrollBottom() {
  let top = document.documentElement.scrollTop || document.body.scrollTop; // 滚动条在Y轴上的滚动距离
  let vh =
    document.compatMode == "CSS1Compat" ?
    document.documentElement.clientHeight :
    document.body.clientHeight; // 浏览器视口的高度
  let height = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight
  ); // 文档的总高度
  if (top + vh >= height) {
    return true;
  }
  return false;
}
module.exports = {
  formatTime: formatTime,
  getTime: getTime,
  formatLocation: formatLocation,
  getScrollTop: getScrollTop,
  getScrollHeight: getScrollHeight,
  getWindowHeight: getWindowHeight,
  isScrollBottom: isScrollBottom,
}
