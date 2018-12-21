/**
 * 倒计时5秒
 */
function countDown() {
  var Time = document.getElementById('time');
  if(Time.innerHTML==="0"){
    window.location.href ="https://www.baidu.com"
  }else{
    Time.innerHTML= Time.innerHTML-1;
  }
};
// setInterval( countDown ,1000) //调用
// 生产短信验证码
function generatedCode() {
  var code = "";//生成的验证码 
  var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < 6; i++) {
    var index = Math.floor(Math.random() * 10);//随机0-35
    code += array[index];
  }
  console.log("生产的验证码",code)
  return code;
};
// generatedCode()
/**
 * 保留两位小数,返回值：数值
 */
function ToFixed(num){
  if(undefined==num||null==num){
    num = NaN;
  }else{
    num = Number(num).toFixed(2)
  }
  return num
}
// console.log( ToFixed(undefined) )
/**
 * 过滤对象是否为空,当前有返回值
 */
function FittleObj(obj){
  for(let key in obj){
    if(null==obj[key]||""==obj[key]|| undefined == obj[key] ){
      obj[key] = "---";
    }
  }
  return obj
}
var obj = {
  "undefined": undefined,
  "null" : null,
  "number": 2000,
  "string": "hello world!"
};
// console.log( FittleObj(test) )

function FittleArray(array){
  for(let i=0;i<array.length;i++){
    for(let key in array[i]){
      if(null==array[i][key]||""==array[i][key]|| undefined == array[i][key] ){
        array[i][key] = "---";
      }
    }
  }
  return array
}

var array = [
  {
    "undefined":undefined,
    "null":null,
    "number": 2000,
    "string": "hello world!"
  },
  {
    "undefined":undefined,
    "null":null,
    "number": 2000,
    "string": "hello world!"
  },
]
console.log( FittleArray(array) );
/**
 * 获取当前月份的前后多少月的月份是几月
 */
function GetMonth(AddMonthCount){
  var dd = new Date();
  dd.setMonth(dd.getMonth() + AddMonthCount);//设置为AddMonthCount后的月份
  var mm = dd.getMonth() + 1;
  return mm +"月"
}
// console.log( GetMonth(2) );//2月后的月份
/**
 * 获取当前日期的前后多少天的日期
 */
function GetDateStr(AddDayCount) {
  var dd = new Date();
  dd.setDate(dd.getDate() + AddDayCount); //获取AddDayCount天后的日期
  var y = dd.getFullYear();
  var m = dd.getMonth() + 1; //获取当前月份的日期
  var d = dd.getDate();
  return y + "-" + m + "-" + d;
}
// console.log(GetDateStr(-1));//获取昨天
// console.log(GetDateStr(0));//获取今天
// console.log(GetDateStr(1));//获取明天

/**
 * 获取当前日期，比如2018-01-01
 */
function getCurrentDate() {
  var yy = new Date().getFullYear(); //获取年
  var mm = new Date().getMonth() + 1; //获取月，从0开始计算要+1
  var dd = new Date().getDate(); //获取日

  var date = yy + "-" + addZero(mm) + "-" + addZero(dd);
  return date;
}
// console.log(getCurrentDate());

/**
 * 对日期或者时间部0
 */
function addZero(num) {
  if (num < 10) {
    num = "0" + num;
  }
  return num;
}
// console.log(addZero(1));

/**
 * 存储localStorage
 * @param {存储对象名} key
 * @param {存储的值} value
 */
function setStore(key, value) {
  if (!key) return; //如果值为空则不保存
  var curTime = new Date().getTime();
  window.localStorage.setItem(
    key,
    JSON.stringify({ data: value, time: curTime })
  );
}
// setStore("name","张三三");// {"data":"张三三","time":1542088361449}

/**
 * 获取localStorage
 * @param {存储对象名，字符串} key
 * @param {超时时间，数值，比如 1000*60*60*24} exp
 */
function getStore(key, exp) {
  var dataObj = JSON.parse(window.localStorage.getItem(key)); //获取存储的数据
  // console.log(dataObj);
  var diff = new Date().getTime() - dataObj.time; // 当前时间和存储时间的差
  if (diff > exp) {
    console.log("登录已过期");
    return; //如果过期返回的是undefined
  }
  var data = dataObj.data;
  return data;
}
// setTimeout(function() {
//   console.log(getStore("name", 950));
// }, 1000);

/**
 * 删除localStorage
 * @param {存储对象名，字符串} key
 *
 */
function removeStore(key) {
  if (!key) return;
  window.localStorage.removeItem(key);
}

// removeStore("pass");

//模拟form表单提交
function postSimulate(url,params) {
  var form = $(`<form action="${url}" method="post" id="formData"></form>`);
  var input;
  $.each(params,function(key,value){
    input = $(" <input type='hidden'/> ");
    input.attr({"name":key});
    input.val(value);
    form.append(input);
  });
  var submit = $(`<input type="submit">`);
  form.append(submit);
  form.appendTo("body").submit().remove();
};