import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{f,i as u}from"./assets/vendor-BbbuE1sJ.js";console.log("Hello");let d="";const y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){console.log(e[0]),e[0]<new Date?u.error({title:"Error",message:"Please choose a date in the future"}):(d=e[0],u.success({title:"OK",message:"Valid date selected"}),o.disabled=!1)}},i=document.querySelector("#datetime-picker"),o=document.querySelector("button"),S=document.querySelector(".js-timer-days"),p=document.querySelector(".js-timer-hours"),E=document.querySelector(".js-timer-minutes"),b=document.querySelector(".js-timer-seconds");o.disabled=!0;f(i,y);function g(e){const s=Math.floor(e/864e5),l=Math.floor(e%864e5/36e5),m=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:s,hours:l,minutes:m,seconds:h}}const t=e=>e.toString().padStart(2,"0");o.addEventListener("click",()=>{o.disabled=!0,i.disabled=!0;const e=setInterval(()=>{const n=d-new Date;if(n<=0){clearInterval(e);return}const{days:r,hours:c,minutes:a,seconds:s}=g(n);S.textContent=t(r),p.textContent=t(c),E.textContent=t(a),b.textContent=t(s)},1e3)});
//# sourceMappingURL=1-timer.js.map
