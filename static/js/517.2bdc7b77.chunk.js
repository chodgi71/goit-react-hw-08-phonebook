"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[517],{5517:function(n,e,t){t.r(e),t.d(e,{default:function(){return on}});var r=t(9439),i=t(2791),a=t(9434),o=t(9529),l=t(7462),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 01-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 00-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 00285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z"}}]},name:"phone",theme:"outlined"},s=t(3717),u=function(n,e){return i.createElement(s.Z,(0,l.Z)({},n,{ref:e,icon:c}))};var d,f,p,h,x,m,g,Z,b=i.forwardRef(u),j=t(6200),v=t(2639),w=t(2293),y=t(168),C=t(3517),P=(0,C.ZP)(j.Z)(d||(d=(0,y.Z)(["\n  max-width: 320px;\n\n  margin-left: auto;\n  margin-right: auto;\n\n  padding: 8px 12px;\n"]))),k=(0,C.ZP)(j.Z.Item)(f||(f=(0,y.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),z=t(3409),L=t(3329),_=function(){var n=j.Z.useForm(),e=(0,r.Z)(n,1)[0],t=(0,a.I0)();return(0,L.jsxs)(P,{form:e,name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:function(){var n=e.getFieldsValue();t((0,z.uK)(n)),e.resetFields()},children:[(0,L.jsx)(j.Z.Item,{name:"name",rules:[{required:!0,message:"Please input Name!"}],children:(0,L.jsx)(v.Z,{prefix:(0,L.jsx)(o.Z,{className:"site-form-item-icon"}),placeholder:"Name"})}),(0,L.jsx)(j.Z.Item,{name:"number",rules:[{required:!0,message:"Please input Number!"}],children:(0,L.jsx)(v.Z,{prefix:(0,L.jsx)(b,{}),type:"tel",placeholder:"Number"})}),(0,L.jsx)(k,{children:(0,L.jsx)(w.ZP,{type:"primary",htmlType:"submit",className:"login-form-button",children:"Add contact"})})]})},N=C.ZP.li(p||(p=(0,y.Z)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  padding: 8px 12px;\n\n  font-size: 18px;\n  line-height: 1.2;\n  letter-spacing: 0.01;\n"]))),A=C.ZP.button(h||(h=(0,y.Z)(["\n  display: inline-block;\n  position: relative;\n  height: 32px;\n\n  padding: 4px 15px;\n\n  color: #fff;\n  background-color: #1677ff;\n  border-radius: 6px;\n  border: 1px solid transparent;\n  background-image: none;\n  box-shadow: 0 2px 0 rgba(5, 145, 255, 0.1);\n  outline: none;\n\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.6;\n  white-space: nowrap;\n  text-align: center;\n\n  cursor: pointer;\n  user-select: none;\n  touch-action: manipulation;\n  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n"]))),F=function(n){var e=n.name,t=n.number,r=n.id,i=n.onClear,o=(0,a.I0)(),l=function(n){o((0,z.GK)(n)),i()};return(0,L.jsxs)(N,{children:[e,": ",t,(0,L.jsx)(A,{onClick:function(){return function(n){l(n)}(r)},children:"Remove"})]})},I=C.ZP.ul(x||(x=(0,y.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n\n  padding-top: 16px;\n  padding-bottom: 16px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),S=t(43),E=(0,C.ZP)(S.Z)(m||(m=(0,y.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 60%;\n\n  transform: translate(-50%, -50%);\n"]))),M=function(){return(0,L.jsx)(E,{size:"large"})},R=function(n){var e=n.filter,t=n.onClear,r=(0,a.v9)(z.Af),i=(0,a.v9)(z.Y),o=Array.isArray(r)?r.filter((function(n){var t=n.name.toLowerCase(),r=n.number.toLowerCase();return!e||(t.includes(e)||r.includes(e))})):[];return r&&Array.isArray(r)?(0,L.jsx)(I,{children:i?(0,L.jsx)(M,{}):(0,L.jsxs)(L.Fragment,{children:[0===o.length&&(0,L.jsx)("div",{children:"Nothing Found"}),o.map((function(n){var e=n.name,r=n.number,i=n.id;return(0,L.jsx)(F,{id:i,name:e,number:r,onClear:t},i)}))]})}):null},V=C.ZP.div(g||(g=(0,y.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n"]))),B=(0,C.ZP)(v.Z)(Z||(Z=(0,y.Z)(["\n  display: block;\n  width: 320px;\n\n  margin-bottom: 24px;\n"]))),Y={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"}}]},name:"close",theme:"outlined"},q=function(n,e){return i.createElement(s.Z,(0,l.Z)({},n,{ref:e,icon:Y}))};var K,T,G,D,H,J,O,Q=i.forwardRef(q),U=function(n){var e=n.onChange,t=n.filterValue,r=n.onClear;return(0,L.jsxs)(V,{children:[(0,L.jsx)(B,{placeholder:"Filter your contacts",onChange:e,value:t}),(0,L.jsx)(w.ZP,{icon:(0,L.jsx)(Q,{}),onClick:r,"aria-label":"Clear filter input"})]})},W=t(1149),X=C.ZP.section(K||(K=(0,y.Z)(["\n  padding-top: 48px;\n  padding-bottom: 68px;\n"]))),$=C.ZP.h1(T||(T=(0,y.Z)(["\n  font-weight: 500;\n  font-size: 32px;\n  line-height: 1.2;\n  letter-spacing: 0.04em;\n  text-align: center;\n  margin-bottom: 24px;\n"]))),nn=C.ZP.div(G||(G=(0,y.Z)(["\n  width: 400px;\n"]))),en=C.ZP.div(D||(D=(0,y.Z)(["\n  width: 650px;\n"]))),tn=C.ZP.div(H||(H=(0,y.Z)(["\n  width: 400px;\n  height: 550px;\n  margin-left: auto;\n  margin-right: auto;\n  overflow-y: scroll;\n"]))),rn=C.ZP.p(J||(J=(0,y.Z)(["\n  font-size: 28px;\n  font-weight: 500;\n  text-align: center;\n\n  line-height: 1.2;\n  letter-spacing: 0.03em;\n\n  margin-bottom: 12px;\n"]))),an=C.ZP.div(O||(O=(0,y.Z)(["\n  display: flex;\n"]))),on=function(){var n=(0,a.I0)(),e=(0,i.useState)(""),t=(0,r.Z)(e,2),o=t[0],l=t[1],c=function(){l("")};return(0,i.useEffect)((function(){n((0,z.CL)())}),[n]),(0,L.jsx)(X,{children:(0,L.jsx)(W.P,{children:(0,L.jsxs)(an,{children:[(0,L.jsxs)(nn,{children:[(0,L.jsx)($,{children:"You can add contacts!"}),(0,L.jsx)(_,{})]}),(0,L.jsxs)(en,{children:[(0,L.jsx)(rn,{children:"Your contacts:"}),(0,L.jsx)(U,{onChange:function(n){var e=n.currentTarget.value.trim();l(e)},filterValue:o,onClear:c}),(0,L.jsx)(tn,{children:(0,L.jsx)(R,{filter:o,onClear:c})})]})]})})})}},9529:function(n,e,t){t.d(e,{Z:function(){return c}});var r=t(7462),i=t(2791),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"},o=t(3717),l=function(n,e){return i.createElement(o.Z,(0,r.Z)({},n,{ref:e,icon:a}))};var c=i.forwardRef(l)}}]);
//# sourceMappingURL=517.2bdc7b77.chunk.js.map