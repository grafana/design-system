"use strict";(self.webpackChunksaga=self.webpackChunksaga||[]).push([[833],{3926:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>m,default:()=>c,frontMatter:()=>p,metadata:()=>u,toc:()=>k});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=a(1476),s=a(9592),o=["components"],p={title:"Alert",description:"Description for search engines and results",keywords:["keywords","for","search","engines"],hide_title:!0},m="Alert <Badge text='draft' color='orange'></Badge> <a href='https://developers.grafana.com/ui/latest/index.html?path=/story/overlays-alert--examples' target='_blank' className='header-links'>Storybook <Icon name=\"external-link-alt\"/> </a>",u={unversionedId:"Patterns/alert",id:"Patterns/alert",title:"Alert",description:"Description for search engines and results",source:"@site/docs/06-Patterns/alert.mdx",sourceDirName:"06-Patterns",slug:"/Patterns/alert",permalink:"/design-system/Patterns/alert",draft:!1,editUrl:"https://github.com/grafana/design-system/blob/main/docs/06-Patterns/alert.mdx",tags:[],version:"current",frontMatter:{title:"Alert",description:"Description for search engines and results",keywords:["keywords","for","search","engines"],hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Tooltip",permalink:"/design-system/Components/tooltip"},next:{title:"Resources",permalink:"/design-system/resources"}},d={},k=[{value:"Behaviors",id:"behaviors",level:2},{value:"Types",id:"types",level:2},{value:"Message Type",id:"message-type",level:2},{value:"Content",id:"content",level:2},{value:"Main elements",id:"main-elements",level:3},{value:"Formating",id:"formating",level:2},{value:"Anatomy",id:"anatomy",level:3},{value:"Related",id:"related",level:2},{value:"Further Reading &amp; Sources",id:"further-reading--sources",level:3}],g={toc:k},h="wrapper";function c(t){var e=t.components,p=(0,r.Z)(t,o);return(0,l.kt)(h,(0,n.Z)({},g,p,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"alert--storybook--"},"Alert ",(0,l.kt)(i.C,{text:"draft",color:"orange",mdxType:"Badge"})," ",(0,l.kt)("a",{href:"https://developers.grafana.com/ui/latest/index.html?path=/story/overlays-alert--examples",target:"_blank",className:"header-links"},"Storybook ",(0,l.kt)(s.J,{name:"external-link-alt",mdxType:"Icon"})," ")),(0,l.kt)("p",null,"Alerts display important messages in a way that attracts the user's attention without interrupting their task."),(0,l.kt)("h2",{id:"behaviors"},"Behaviors"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Persistent")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"They are usually urgent and intrusive, require immediate attention and require action to be dismissed."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Passive")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"Are informational, report a system issue that does not require any action by users."))))),(0,l.kt)("h2",{id:"types"},"Types"),(0,l.kt)("p",null,"Within Grafana, we have three different types of alerts and they can be used depending on the context and content."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,l.kt)("th",{parentName:"tr",align:null},"Behavior"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"/design-system/Components/alert-inline"},"Inline"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"To notify users of the status of an action. They appear at the top or bottom of the main content area")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null," Passive or Persistent "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"/design-system/Components/alert-toast"},"Toast"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"These temporary window elements are used to display short messages; they appear at the top-right corner of the screen and can be dismissed by clicking the ","[x]"," or it will disappear after a few seconds")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"Passive"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"/design-system/Components/alert-banner"},"Banner"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"It will remain until the user rejects it or until the status that triggered the banner is resolved")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null," Persistent "))))),(0,l.kt)("h2",{id:"message-type"},"Message Type"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Status"),(0,l.kt)("th",{parentName:"tr",align:null},"Usage"),(0,l.kt)("th",{parentName:"tr",align:null},"Action"),(0,l.kt)("th",{parentName:"tr",align:null},"Color"),(0,l.kt)("th",{parentName:"tr",align:null},"Icon"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Informational")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"Provide information to users, and don\u2019t interrupt any current actions")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"Do not require immediate action and can be dismissed by a user clicking the ","[X]"," or passively display until the display timer expires")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"Blue background")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"Info-circle"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Success")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"When any action is successful, it is confirmed when a task is completed as expected")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"Typically do not require further action and can be dismissed automatically or persist in a nonintrusive manner")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"Green background")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"Check"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Warning")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"Informing users that an action is undesirable")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"Often persists until users have taken action to dismiss the notification or taken steps to resolve the issue")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"Yellow background")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"Exclamation-triangle"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Error")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"When an action doesn't happen as expected, usually something has failed and the user is expected to take action")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"Always persists until the user has taken steps to remedy the issue that triggered the notification")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"Red background")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"Exclamation-circle"))))),(0,l.kt)("h2",{id:"content"},"Content"),(0,l.kt)("p",null,"An Alert can contain a single action, dismiss or close actions are optional."),(0,l.kt)("h3",{id:"main-elements"},"Main elements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Icon Status"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Represent the importance of the message through the color and icon for each status."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Alert Copy/Title"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Should be explicit, clear and short that explain the most important part of the information."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Details"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Precise description for the notification, telling users what they need to do."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Button and text links"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Only persistent notifications should contain text links or buttons."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Close Icon"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Appears when the notification can be dismissed by the user.")))),(0,l.kt)("h2",{id:"formating"},"Formating"),(0,l.kt)("h3",{id:"anatomy"},"Anatomy"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Image description",src:a(8923).Z,title:"alerts-anatomy",width:"2880",height:"960"})),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Icon Status"),": Informs user what is the notification status"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Alert Copy/Title"),": Notifying with a quick summary of what the message is about"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Details"),": Short description explaining in more detail what the user has to do"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Action")," (optional): Text link button or default button which allows users to navigate to a page with more details")),(0,l.kt)("h2",{id:"related"},"Related"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"/design-system/Components/alert-banner"},"Banner Notification"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"/design-system/Components/alert-inline"},"Inline Notification"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"/design-system/Components/alert-toast"},"Toast Notification")))),(0,l.kt)("h3",{id:"further-reading--sources"},"Further Reading & Sources"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.nngroup.com/articles/indicators-validations-notifications/"},"NNG \u2014 Indicators, Validations, and Notifications: Pick the Correct Communication Option")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.nngroup.com/articles/errors-forms-design-guidelines/"},"NNG \u2014 How to Report Errors in Forms: 10 Design Guidelines")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.nngroup.com/articles/ten-usability-heuristics/"},"NNG - 10 Usability Heuristics for Users")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.nngroup.com/articles/plain-language-experts/"},"NNG - Plain Language is for Everyone"))))}c.isMDXComponent=!0},8923:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/alerts.anatomy-77121503949b541b84bedc9f7c61b66b.png"}}]);