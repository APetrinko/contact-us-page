(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{58:function(e,t,c){},77:function(e,t,c){},88:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),n=c(22),i=c.n(n),l=c(35),o=c(5),r=(c(58),c(77),c(6)),j=c(39),d=c.n(j),b=c(1),m=function(e){var t=e.to,c=e.text,a=Object(o.l)();return Object(b.jsx)(l.b,{to:t,className:d()("navigation__link",{"navigation__link--active":a.pathname==="/".concat(t)}),children:c})},h=[{to:"/",text:"Home"},{to:"features",text:"Features"},{to:"blog",text:"Blog"},{to:"shop",text:"Shop"},{to:"about",text:"About"},{to:"Contact",text:"Contact"}],u=Object(a.memo)((function(e){var t=e.setIsOpen;return Object(b.jsxs)("nav",{className:"navigation",children:[Object(b.jsx)("ul",{className:"navigation__list",children:h.map((function(e){return Object(b.jsx)("li",{className:"navigation__item",children:Object(b.jsx)(m,{to:e.to,text:e.text})},e.to)}))}),Object(b.jsx)("div",{className:"navigation__user",children:Object(b.jsxs)("ul",{className:"navigation__user__list",children:[Object(b.jsx)("button",{type:"button",onClick:function(){return t(!1)},className:"link__icon",children:Object(b.jsx)("li",{className:"navigation__user__item cartNav",children:Object(b.jsx)("img",{src:"",alt:"user"})})}),Object(b.jsx)("button",{type:"button",onClick:function(){return t(!1)},className:"link__icon",children:Object(b.jsx)("li",{className:"navigation__user__item cartNav",children:Object(b.jsx)("img",{src:"",alt:"user"})})})]})})]})})),O=Object(a.memo)((function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(!1),i=Object(r.a)(n,2),l=i[0],o=i[1],j=Object(a.useState)(!1),m=Object(r.a)(j,2),h=m[0],O=m[1],x=window.innerWidth;return Object(a.useEffect)((function(){x<640?o(!0):O(!0)}),[]),Object(b.jsxs)("header",{className:d()("header",{header__mobile:c&&l}),children:[Object(b.jsxs)("div",{className:"nav",children:[Object(b.jsx)("div",{className:"nav__link",children:Object(b.jsx)("a",{href:"/",className:"nav__link--logo",children:Object(b.jsx)("h1",{className:d()("nav__link--logo-el",{open:c}),children:"Logo Here"})})}),l&&Object(b.jsx)("div",{className:"nav__link--menu nav__link--menu-open",onClick:function(){return s(!c)},"aria-hidden":"true",children:Object(b.jsx)("img",{className:"nav__link--menu-logo",src:c?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABqSURBVHgBtdNBCsAgDETR0JN4/0t5lCkFA10Yk19SQXCReWpEkzTXHAbHk/G8rYUo9kLk0KBYmCFYWlvByhueCnELdgF96GOEcSTAUuSyP0fL1Vqa3fL8lcK0hhxdHf/siFEkwhxCyAabN74LHn/aTpP5AAAAAElFTkSuQmCC":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAASCAYAAABB7B6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI+SURBVHgBrVRJjiIxEHRtdNfCNsAgpDlw4MSVD/AJvsA3eBAvmVcMc+KKxKoC7IkwmahgutV9wFJgOymHnRmZaczj+AO4FyBQwljmoIJXDOVyfrNYLELMCfAGpP1+P8dcAPXnudvtevR6vUJsCp5JR6MROWLhDPU2evImh5qNRuMH5k69Xu9g7sm6i/k/0C7/8UxLLnufTqfkDCP+YBOsVqvkcDjQi1oURbXz+ZyUZZnI5VxzjtM0TS6XSyz2GN9G1toYNnIFrVbLnE4n1+l07Hw+9yEKJ5MJiTLgr3mNyLmEPKqGKAVWL7ogkwtCVTsSg0IFCvI8N/v93phK+mVZFiCc3n3a+U0QBG63212xvwBnwTU0T+kJgf1BHPI2ITfVb5ScxLTzG5A7iG3a7bY+5n4oFA8Yppp4ED9fjFeTuLr2HkH04Hg8WqwVfHkps8+G+20aw6IorHMuBO6kDIE85jdsv/QAyM0Ho1AHYpLgsN7OGNJdax6rkWHQvTVfjMFg4NbrtTzZ3VJ1NptFEiJmE7OAAc61Ylm9iG/T3AqKhfUT6JMPWvThtS9IoGmeskiHvlCFN1UPzE0n31JAlsBL3VMTh7BZiHzZbrdXeFDCA+pgH5qbhOszm09lVGpts9loIvjHQGgnQldTtERUbFglE+6HoqG4aFwG7eS+x0uZ+w4vV+2eh/d6uVw6883hq304HL6bmzaqBWOuDY9r3+zYUaXZfb/9s/2yZ43HY58IiHMmCVCXSwmKy3atfSj4B+IyAU4rbK+5AAAAAElFTkSuQmCC",alt:"menu-open"})})]}),(l&&c||h)&&Object(b.jsx)(u,{setIsOpen:s})]})})),x=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(O,{}),Object(b.jsx)(o.a,{})]})},A=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"Features Page"})})},v=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"Home Page"})})},_=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"Blog Page"})})},p=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"Shop Page"})})},N=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"About Page"})})},g=c(124),f=c(122),k=Object(a.memo)((function(e){var t=e.firstName,c=e.lastName,a=e.phoneNumber,s=e.email,n=e.setFirstName,i=e.setLastName,l=e.setPhoneNumber,o=e.setEmail;return Object(b.jsx)(g.a,{component:"",sx:{"& .MuiTextField-root":{m:1,width:"95%","& label.Mui-focused":{color:"black",fontWeight:600},"& .MuiInput-underline:after":{borderBottomColor:"black"}}},noValidate:!0,autoComplete:"off",children:Object(b.jsxs)("div",{className:"fields",children:[Object(b.jsxs)("div",{className:"fields__full-name",children:[Object(b.jsx)("div",{className:"fields__full-name__first-name",children:Object(b.jsx)(f.a,{id:"standard-required",label:"First Name",variant:"standard",value:t,onChange:function(e){n(e.target.value)}})}),Object(b.jsx)("div",{children:Object(b.jsx)(f.a,{id:"standard-required",label:"Last Name",variant:"standard",value:c,onChange:function(e){i(e.target.value)}})})]}),Object(b.jsxs)("div",{className:"fields__contacts",children:[Object(b.jsx)("div",{className:"fields__contacts-email",children:Object(b.jsx)(f.a,{id:"standard-required",label:"Email",type:"email",variant:"standard",value:s,onChange:function(e){o(e.target.value)}})}),Object(b.jsx)("div",{children:Object(b.jsx)(f.a,{id:"standard-required",label:"Phone Number",type:"tel",variant:"standard",value:a,onChange:function(e){l(e.target.value)}})})]})]})})})),C=function(e){var t=e.selected,c=e.setSelected,a=function(e){c(e.target.value)};return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{className:"title",children:"Select Subject?"}),Object(b.jsxs)("div",{className:"checkboxes",children:[Object(b.jsx)("div",{className:"round",children:Object(b.jsxs)("label",{htmlFor:"option",className:"label",children:[Object(b.jsx)("input",{type:"checkbox",id:"option",name:"option",value:"option1",checked:"option1"===t,onChange:a}),"General Inquiry"]})}),Object(b.jsx)("div",{className:"round",children:Object(b.jsxs)("label",{htmlFor:"option2",className:"label",children:[Object(b.jsx)("input",{type:"checkbox",id:"option2",name:"option",value:"option2",checked:"option2"===t,onChange:a}),"General Inquiry"]})}),Object(b.jsx)("div",{className:"round",children:Object(b.jsxs)("label",{htmlFor:"option3",className:"label",children:[Object(b.jsx)("input",{type:"checkbox",id:"option3",name:"option",value:"option3",checked:"option3"===t,onChange:a}),"General Inquiry"]})}),Object(b.jsx)("div",{className:"round",children:Object(b.jsxs)("label",{htmlFor:"option4",className:"label",children:[Object(b.jsx)("input",{type:"checkbox",id:"option4",name:"option",value:"option4",checked:"option4"===t,onChange:a}),"General Inquiry"]})})]})]})},S=Object(a.memo)((function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(""),i=Object(r.a)(n,2),l=i[0],o=i[1],j=Object(a.useState)(""),d=Object(r.a)(j,2),m=d[0],h=d[1],u=Object(a.useState)(""),O=Object(r.a)(u,2),x=O[0],A=O[1],v=Object(a.useState)(""),_=Object(r.a)(v,2),p=_[0],N=_[1],S=Object(a.useState)(""),B=Object(r.a)(S,2),w=B[0],y=B[1],I=Object(a.useCallback)((function(){s(""),o(""),h(""),A(""),N(""),y("")}),[]),F=function(e){null===e||void 0===e||e.preventDefault(),console.log(c,m,x,w),I()};return Object(b.jsxs)("form",{onSubmit:F,children:[Object(b.jsx)(k,{firstName:c,lastName:l,phoneNumber:m,email:x,setFirstName:s,setLastName:o,setPhoneNumber:h,setEmail:A}),Object(b.jsx)(C,{selected:p,setSelected:N}),Object(b.jsx)(g.a,{component:"",sx:{"& .MuiTextField-root":{m:1,width:"100%","& label.Mui-focused":{color:"black",fontWeight:600},"& .MuiInput-underline:after":{borderBottomColor:"black"}}},noValidate:!0,autoComplete:"off",children:Object(b.jsx)(f.a,{id:"standard-multiline-flexible",label:"Message",placeholder:"Write your message",multiline:!0,maxRows:4,variant:"standard",value:w,onChange:function(e){return y(e.target.value)}})}),Object(b.jsx)("div",{className:"button-container",children:Object(b.jsx)("button",{type:"submit",onClick:F,className:"submit",children:"Send Message"})})]})})),B=c.p+"static/media/insta.5c596bec.svg",w=c.p+"static/media/twitter.65c07fe8.svg",y=c.p+"static/media/discord.0de10150.svg",I=Object(a.memo)((function(){return console.log("render contact"),Object(b.jsxs)("section",{className:"contact",children:[Object(b.jsxs)("div",{className:"contact__header",children:[Object(b.jsx)("h1",{className:"contact__title",children:"Contact Us"}),Object(b.jsx)("p",{className:"contact__subtitle",children:"Any question or remarks? Just write us a message!"})]}),Object(b.jsxs)("div",{className:"contact__field",children:[Object(b.jsxs)("div",{className:"contact__info",children:[Object(b.jsxs)("div",{className:"contact__info__header",children:[Object(b.jsx)("h2",{className:"contact__info__title",children:"Contact Information"}),Object(b.jsx)("p",{className:"contact__info__subtitle",children:"Say something to start a live chat!"})]}),Object(b.jsxs)("div",{className:"contact__contacts",children:[Object(b.jsxs)("div",{className:"contact__contacts__phone",children:[Object(b.jsx)("img",{src:"",alt:""}),Object(b.jsx)("a",{href:"tel: +10123456789",className:"contact__contacts__phone-number",children:"+1012 3456 789"})]}),Object(b.jsxs)("div",{className:"contact__contacts__mail",children:[Object(b.jsx)("img",{src:"",alt:""}),Object(b.jsx)("a",{href:"mailto: demo@gmail.com",className:"contact__contacts__mail-link",children:"demo@gmail.com"})]}),Object(b.jsxs)("div",{className:"contact__contacts__adress",children:[Object(b.jsx)("img",{src:"",alt:""}),Object(b.jsx)("a",{href:"/",className:"contact__contacts__adress-street",children:"132 Dartmouth Street Boston, Massachusetts 02156 United States"})]})]}),Object(b.jsxs)("div",{className:"contact__social-media",children:[Object(b.jsx)("div",{className:"contact__twitter",children:Object(b.jsx)("a",{href:"https://twitter.com/",children:Object(b.jsx)("img",{src:w,alt:""})})}),Object(b.jsx)("div",{className:"contact__instagram",children:Object(b.jsx)("a",{href:"https://instagram.com",children:Object(b.jsx)("img",{src:B,alt:""})})}),Object(b.jsx)("div",{className:"contact__discord",children:Object(b.jsx)("a",{href:"https://discord.com",children:Object(b.jsx)("img",{src:y,alt:""})})})]})]}),Object(b.jsx)("div",{className:"contact__inputs",children:Object(b.jsx)(S,{})})]})]})}));i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(l.a,{children:Object(b.jsx)(o.d,{children:Object(b.jsxs)(o.b,{path:"/",element:Object(b.jsx)(x,{}),children:[Object(b.jsx)(o.b,{index:!0,element:Object(b.jsx)(v,{})}),Object(b.jsx)(o.b,{path:"features",element:Object(b.jsx)(A,{})}),Object(b.jsx)(o.b,{path:"blog",element:Object(b.jsx)(_,{})}),Object(b.jsx)(o.b,{path:"shop",element:Object(b.jsx)(p,{})}),Object(b.jsx)(o.b,{path:"about",element:Object(b.jsx)(N,{})}),Object(b.jsx)(o.b,{path:"contact",element:Object(b.jsx)(I,{})})]})})})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.0d5e29b6.chunk.js.map