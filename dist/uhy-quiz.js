var UHYQuiz=(()=>{var G=Object.defineProperty;var le=Object.getOwnPropertyDescriptor;var ue=Object.getOwnPropertyNames;var ce=Object.prototype.hasOwnProperty;var de=(t,o)=>{for(var s in o)G(t,s,{get:o[s],enumerable:!0})},pe=(t,o,s,l)=>{if(o&&typeof o=="object"||typeof o=="function")for(let c of ue(o))!ce.call(t,c)&&c!==s&&G(t,c,{get:()=>o[c],enumerable:!(l=le(o,c))||l.enumerable});return t};var he=t=>pe(G({},"__esModule",{value:!0}),t);var Fe={};de(Fe,{default:()=>ke,destroyAll:()=>Z,init:()=>te,restartAll:()=>ee});var ye={startId:"q_age",nodes:{q_age:{id:"q_age",type:"yesno",prompt:"Are you 24 years or older?",yes:"out_auto_independent_24plus",no:"q_current_hs"},q_current_hs:{id:"q_current_hs",type:"yesno",prompt:"Are you currently in public high school?",yes:"q_identified_hs_current",no:"q_graduated_recent"},q_identified_hs_current:{id:"q_identified_hs_current",type:"yesno",prompt:"Have you been identified as an [tooltip:unaccompanied:not living with a parent or guardian] homeless youth by a high school counselor, McKinney-Vento [helplink:liaison:https://schoolhouseconnection.org/homeless-education-directory:Find your liaison], or other high school staff?",yes:"out_hs_determination_letter",no:"q_hs_staff_know"},q_hs_staff_know:{id:"q_hs_staff_know",type:"yesno",prompt:"Does a McKinney-Vento homeless [helplink:liaison:https://schoolhouseconnection.org/homeless-education-directory:Find your liaison] or do other high school staff know you are [tooltip:unaccompanied:you don't live with your parents] and homeless?",yes:"out_hs_become_identified",no:"q_live_with_parents"},q_graduated_recent:{id:"q_graduated_recent",type:"yesno",prompt:"Did you graduate from a public high school in the last year?",yes:"q_identified_hs_grad",no:"q_live_with_parents"},q_identified_hs_grad:{id:"q_identified_hs_grad",type:"yesno",prompt:"While you were in high school, were you identified as an [tooltip:unaccompanied:not living with a parent or guardian] homeless youth by a high school counselor, McKinney-Vento [helplink:liaison:https://schoolhouseconnection.org/homeless-education-directory:Find your liaison], or other high school staff?",yes:"out_hs_determination_letter",no:"q_live_with_parents"},q_live_with_parents:{id:"q_live_with_parents",type:"yesno",prompt:"Do you live with your parents?",yes:"out_fafsa_parent",no:"q_temp_since_july"},q_temp_since_july:{id:"q_temp_since_july",type:"yesno",prompt:`Since July 1 of the previous school year, have you had to stay somewhere temporarily because you didn't have anywhere else to go?

For example:
\u2022 Staying with friends or relatives because you lost housing or couldn't afford rent
\u2022 "Couch surfing" or moving from place to place
\u2022 Living in residence halls/dorms but you would otherwise have no safe place to go`,yes:"q_can_someone_confirm",no:"q_not_meant_for_living"},q_not_meant_for_living:{id:"q_not_meant_for_living",type:"yesno",prompt:`Since July 1 of the previous school year, have you stayed in a place not meant for people to live?

For example:
\u2022 A motel or hotel because you had no other housing
\u2022 A trailer park, campground, car, park, or abandoned building`,yes:"q_can_someone_confirm",no:"q_at_risk"},q_at_risk:{id:"q_at_risk",type:"yesno",prompt:`Are you at risk of losing your housing soon or not having a safe place to stay?

For example:
\u2022 Being told you can't stay where you are much longer
\u2022 Having a pending eviction
\u2022 Not knowing where you'll sleep next week or next month`,yes:"q_pay_all_expenses",no:"q_dep_support_from_parents"},q_pay_all_expenses:{id:"q_pay_all_expenses",type:"yesno",prompt:"Do you pay for all of your own expenses, including your housing? (Only answer \u201CYes\u201D if you do not receive any financial support from anyone.)",yes:"q_can_someone_confirm",no:"q_dep_support_from_parents"},q_can_someone_confirm:{id:"q_can_someone_confirm",type:"yesno",prompt:`Can any of the following individuals confirm your situation?
\u2022 A high school McKinney-Vento [helplink:liaison:https://schoolhouseconnection.org/homeless-education-directory:Find your liaison] or their designee (e.g., a school counselor)
\u2022 The director (or designee) of a shelter, drop-in center, or other program serving individuals experiencing homelessness
\u2022 The director (or designee) of a TRIO or GEAR UP program
\u2022 Financial aid administrator at current college/university or your previous college/university who previously made a determination`,yes:"out_third_party_determination",no:"q_still_staying_temp"},q_still_staying_temp:{id:"q_still_staying_temp",type:"yesno",prompt:`As of today, are you staying in one of the following situations?

\u2022 Staying with friends or relatives (like an aunt or uncle) because you lost housing or couldn't afford rent
\u2022 "Couch surfing" or moving from place to place
\u2022 Living in residence halls/dorms but would otherwise have no place to go
\u2022 A motel or hotel because you had no other housing
\u2022 A trailer park, campground, car, park, or abandoned building
\u2022 At risk of losing your housing soon`,yes:"out_faa_determination_uhy",no:"q_dep_support_from_parents"},q_dep_support_from_parents:{id:"q_dep_support_from_parents",type:"yesno",prompt:"Do you receive any financial support from either of your parents?",yes:"out_dependent_parent_info",no:"q_dep_contact_with_parents"},q_dep_contact_with_parents:{id:"q_dep_contact_with_parents",type:"yesno",prompt:"Do you have contact with your parents?",yes:"out_likely_dependent_contact_faa",no:"q_dep_abuse_or_unknown"},q_dep_abuse_or_unknown:{id:"q_dep_abuse_or_unknown",type:"yesno",prompt:`Do any of the following apply?
\u2022 You do not know where your parents are or how to contact them
\u2022 You left home due to an abusive or unsafe situation
\u2022 Your parents are incarcerated or institutionalized`,yes:"out_may_qualify_dependency_override",no:"out_likely_dependent_contact_faa"},out_auto_independent_24plus:{id:"out_auto_independent_24plus",type:"outcome",title:"You are automatically considered an independent student",body:"Because you are 24 or older, you are automatically considered an independent student for FAFSA purposes. You should submit the FAFSA without parental information. Only use your own information (and your spouse\u2019s, if you are currently married).",actions:[{label:"Go to FAFSA.gov",href:"https://studentaid.gov/h/apply-for-aid/fafsa"}]},out_fafsa_parent:{id:"out_fafsa_parent",type:"outcome",title:"Complete the FAFSA with parental information",body:"Based on your answers, you are considered a dependent student and should submit the FAFSA including your parents\u2019 information.",actions:[{label:"Go to FAFSA.gov",href:"https://studentaid.gov/h/apply-for-aid/fafsa"}]},out_hs_determination_letter:{id:"out_hs_determination_letter",type:"outcome",title:"Request a determination letter from your high school",body:"You were identified as an unaccompanied homeless youth by your high school. Contact your McKinney-Vento [helplink:liaison:https://schoolhouseconnection.org/homeless-education-directory:Find your liaison] or high school counselor and request a written determination letter stating that you are (or were) an unaccompanied homeless youth. First, submit the FAFSA as an independent student, without parent information, and then give this documentation to your financial aid office.",actions:[{label:"Find your McKinney-Vento liaison",href:"https://schoolhouseconnection.org/homeless-education-directory"},{label:"Sample determination letters",href:"https://schoolhouseconnection.org/article/sample-form-letters-to-determine-independent-student-status-of-unaccompanied-homeless-youth-for-the-fafsa"},{label:"Go to FAFSA.gov",href:"https://studentaid.gov/h/apply-for-aid/fafsa"}]},out_hs_become_identified:{id:"out_hs_become_identified",type:"outcome",title:"Talk to your high school about being identified under McKinney-Vento",body:"Because your high school staff know about your homelessness, contact your McKinney-Vento [helplink:liaison:https://schoolhouseconnection.org/homeless-education-directory:Find your liaison] or school counselor to be formally identified as homeless under the McKinney-Vento Act. Once identified, you can request a determination letter as an unaccompanied homeless youth to give to your financial aid office.",actions:[{label:"Find your McKinney-Vento liaison",href:"https://schoolhouseconnection.org/homeless-education-directory"},{label:"Sample determination letters",href:"https://schoolhouseconnection.org/article/sample-form-letters-to-determine-independent-student-status-of-unaccompanied-homeless-youth-for-the-fafsa"},{label:"Go to FAFSA.gov",href:"https://studentaid.gov/h/apply-for-aid/fafsa"}]},out_third_party_determination:{id:"out_third_party_determination",type:"outcome",title:"Ask a program or liaison to provide a determination",body:"Someone who knows your situation (such as a McKinney-Vento [helplink:liaison:https://schoolhouseconnection.org/homeless-education-directory:Find your liaison], shelter or program director, TRIO/GEAR UP staff, or a financial aid administrator) can provide a written determination that you are an unaccompanied homeless youth. First, submit the FAFSA as an independent student, without parent information, and then give this documentation to your financial aid office.",actions:[{label:"Sample determination letters",href:"https://schoolhouseconnection.org/article/sample-form-letters-to-determine-independent-student-status-of-unaccompanied-homeless-youth-for-the-fafsa"},{label:"Go to FAFSA.gov",href:"https://studentaid.gov/h/apply-for-aid/fafsa"}]},out_faa_determination_uhy:{id:"out_faa_determination_uhy",type:"outcome",title:"Request a determination from your financial aid office",body:"Because you are in a homeless or at-risk-of-homelessness situation and don\u2019t have another person who can document it, contact your school\u2019s financial aid office and request a determination as an unaccompanied homeless youth. They may ask you some questions or request a written statement from you about your situation.",actions:[{label:"Go to FAFSA.gov",href:"https://studentaid.gov/h/apply-for-aid/fafsa"},{label:"How to answer FAFSA questions",href:"https://schoolhouseconnection.org/article/how-to-answer-fafsa-questions-about-homelessness"}]},out_dependent_parent_info:{id:"out_dependent_parent_info",type:"outcome",title:"You are a dependent student for FAFSA",body:"You are considered a dependent student for FAFSA purposes and will need to report your parents\u2019 information on the FAFSA.",actions:[{label:"Go to FAFSA.gov",href:"https://studentaid.gov/h/apply-for-aid/fafsa"},{label:"How to answer FAFSA questions",href:"__FAFSA_GUIDE_URL__"}]},out_likely_dependent_contact_faa:{id:"out_likely_dependent_contact_faa",type:"outcome",title:"You will most likely be considered a dependent student",body:"Based on your answers, you will most likely be considered a dependent student and will need to include your parents\u2019 information on the FAFSA. If you have unusual circumstances that prevent you from reporting parent information, contact your school's financial aid office and explain your situation.",actions:[{label:"Go to FAFSA.gov",href:"https://studentaid.gov/h/apply-for-aid/fafsa"},{label:"How to answer FAFSA questions",href:"https://schoolhouseconnection.org/article/how-to-answer-fafsa-questions-about-homelessness"}]},out_may_qualify_dependency_override:{id:"out_may_qualify_dependency_override",type:"outcome",title:"You may qualify for a dependency override",body:`Answer "yes" to the question on the FAFSA asking if any unusual circumstances prevent you from reporting parent information. This will let you submit the FAFSA as an independent student. You will need to follow up with your school's financial aid office. They will need a statement from you about your circumstances, and will likely need signed statements from people who know you and can confirm your situation.

Note that the following circumstances on their own do not qualify for a dependency override:

\u2022 You do not live with your parents
\u2022 You are financially self-sufficient
\u2022 Your parents do not claim you on their taxes
\u2022 Your parents are not helping with college expenses
\u2022 Your parents do not want to provide their information or they refuse to submit the FAFSA`,actions:[{label:"Go to FAFSA.gov",href:"https://studentaid.gov/h/apply-for-aid/fafsa"},{label:"How to answer FAFSA questions",href:"__FAFSA_GUIDE_URL__"}]}}},j=ye;var fe={links:{FAFSA:"https://studentaid.gov/h/apply-for-aid/fafsa",TEMPLATE_LIAISON:"https://docs.google.com/document/d/1i7Z4b-eQwXLOHdEkzQXGTFDqq_pqxiBmPcNyqc4w48o/edit?tab=t.0",TEMPLATE_PROGRAM:"https://docs.google.com/document/d/1i7Z4b-eQwXLOHdEkzQXGTFDqq_pqxiBmPcNyqc4w48o/edit?tab=t.0",TEMPLATE_TRIO:"https://docs.google.com/document/d/1i7Z4b-eQwXLOHdEkzQXGTFDqq_pqxiBmPcNyqc4w48o/edit?tab=t.0",TEMPLATE_FAA:"https://docs.google.com/document/d/1i7Z4b-eQwXLOHdEkzQXGTFDqq_pqxiBmPcNyqc4w48o/edit?tab=t.0",FAFSA_GUIDE_URL:"https://schoolhouseconnection.org/article/how-to-answer-fafsa-questions-about-homelessness"},i18n:{locale:"en-US"}},V=fe;function P(t){if(!t)return()=>{};let o=Array.from(t.querySelectorAll("button"));if(o.length===0)return()=>{};let s=l=>{if(!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(l.key))return;l.preventDefault();let c=o.indexOf(document.activeElement);if(c===-1){o[0].focus();return}let _=l.key==="ArrowLeft"||l.key==="ArrowUp"?-1:1,x=(c+_+o.length)%o.length;o[x].focus()};return t.addEventListener("keydown",s),()=>{t.removeEventListener("keydown",s)}}function H(t){if(!t)return;let o=t.querySelector("[data-uhyq-focus]");o&&o.focus()}function Q(t,o){if(!t||typeof o!="function")return()=>{};let s=l=>{l.key==="Escape"&&o(l)};return t.addEventListener("keydown",s),()=>{t.removeEventListener("keydown",s)}}function R(t,o){t&&(t.textContent="",window.requestAnimationFrame(()=>{t.textContent=o}))}var me=`
  <div class="uhyq-fallback" role="note">
    <p><strong>This tool needs JavaScript.</strong> If the interactive quiz does not load, visit SchoolHouse Connection for <a href="https://schoolhouseconnection.org" target="_blank" rel="noopener noreferrer">resources for unaccompanied homeless youth</a>.</p>
  </div>
`;function _e(t,o){if(!t)return"#";let s={__FAFSA_URL__:o.FAFSA,__TEMPLATE_LIAISON__:o.TEMPLATE_LIAISON,__TEMPLATE_PROGRAM__:o.TEMPLATE_PROGRAM,__TEMPLATE_TRIO__:o.TEMPLATE_TRIO,__TEMPLATE_FAA__:o.TEMPLATE_FAA,__FAFSA_GUIDE_URL__:o.FAFSA_GUIDE_URL};return s[t]?s[t]:t}function K(t,o){let s=t.nodes[o];if(!s||s.type!=="yesno")return 0;let l=t.nodes[s.yes],c=t.nodes[s.no],_=null;return l&&l.type==="yesno"&&(_=s.yes),c&&c.type==="yesno"&&(_?_=s.yes:_=s.no),1+(_?K(t,_):0)}function be(t,o){return o?`${t}:${o}`:t}function X({container:t,tree:o,config:s,callbacks:l={},initialPathSegments:c=[]}){let _=s?.links??{},x=typeof l.onStep=="function"?l.onStep:()=>{},T=typeof l.onOutcome=="function"?l.onOutcome:()=>{},N=t.innerHTML.trim()||me;t.innerHTML="";let m=document.createElement("div");m.className="uhyq-root",m.setAttribute("role","application"),m.setAttribute("aria-label","Interactive unaccompanied homeless youth determination tool");let w=document.createElement("div");w.className="uhyq-progress",w.setAttribute("role","status");let h=document.createElement("div");h.className="uhyq-card",h.setAttribute("aria-live","polite");let g=document.createElement("div");g.className="uhyq-sr-only",g.setAttribute("aria-live","polite"),g.setAttribute("aria-atomic","true");let L=document.createElement("div");L.className="uhyq-controls";let b=document.createElement("button");b.type="button",b.className="uhyq-btn uhyq-btn-secondary",b.textContent="Back",b.setAttribute("aria-label","Go to previous question"),b.disabled=!0;let v=document.createElement("button");v.type="button",v.className="uhyq-btn uhyq-btn-secondary",v.textContent="Restart",v.setAttribute("aria-label","Restart quiz"),L.append(b,v),m.append(w,h,L,g),t.appendChild(m);let p={currentId:o.startId,history:[],pathSegments:[]},E=null,z=Q(m,()=>{window.confirm("Restart the quiz? Your answers will be cleared.")&&I()});function M(){E&&(E(),E=null)}function Y(e){if(!e)return"";if(e.includes(`

`))return e.split(`

`).map(n=>Y(n.trim())).join("");if(e.includes(`
\u2022`)||e.trim().startsWith("\u2022")){let n=e.split(`
`),i=n.findIndex(u=>u.trim().startsWith("\u2022")),r="";if(i>0){let u=n.slice(0,i).join(" ").trim();u&&(r+=`<p>${u}</p>`)}let d=n.slice(i).flatMap(u=>u.split("\u2022")).map(u=>u.trim()).filter(Boolean);return r+=`<ul class="uhyq-bullet-list">${d.map(u=>`<li>${u}</li>`).join("")}</ul>`,r}return`<p>${e}</p>`}function O(e){return typeof e!="string"||!e.includes(`
`)?e:Y(e.trim())}function ne(e){return typeof e!="string"?e:e.replace(/\[tooltip:([^:]+):([^\]]+)\]/g,(n,i,r)=>{let a=`<svg class="uhyq-tooltip-icon" role="button" tabindex="0" aria-label="More information about ${i}" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>`;return`${i}<span class="uhyq-tooltip-wrapper">${a}<span class="uhyq-tooltip-text" role="tooltip">${r}</span></span>`})}function U(e){return typeof e!="string"?e:e.replace(/\[helplink:([^:]+):(https?:\/\/[^:\s]+):([^\]]+)\]/g,(n,i,r,a)=>{let d=`<span class="uhyq-helplink-wrapper"><a href="${r}" target="_blank" rel="noopener noreferrer" class="uhyq-helplink" aria-label="${a}"><svg class="uhyq-helplink-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg></a><span class="uhyq-helplink-tooltip">${a}</span></span>`;return`${i}${d}`})}function ie(e){M(),h.innerHTML="";let n=document.createElement("h2");n.id=`${e.id}-prompt`;let i=e.prompt,r="";if(e.prompt.includes(`
\u2022`)){let f=e.prompt.split(/\n(?=•)/);i=f[0],r=f.slice(1).join(`
`)}else if(e.prompt.includes(`

`)){let f=e.prompt.split(`

`);i=f[0],r=f.slice(1).join(`

`)}if(i.includes("[tooltip:")||i.includes("[helplink:")||i.includes(`
`)){let f=i;f.includes("[tooltip:")&&(f=ne(f)),f.includes("[helplink:")&&(f=U(f)),f.includes(`
`)&&(f=f.split(`
`).join("<br>")),n.innerHTML=f}else n.textContent=i;let a=null;r&&(a=document.createElement("div"),a.className="uhyq-body",a.innerHTML=O(r));let d=document.createElement("div");d.className="uhyq-choices",d.setAttribute("role","group"),d.setAttribute("aria-labelledby",n.id);let u={value:"yes",label:"Yes",nextId:e.yes,segmentValue:"yes"},y={value:"no",label:"No",nextId:e.no,segmentValue:"no"},q=document.createElement("button");q.type="button",q.className="uhyq-btn",q.dataset.answer="yes",q.dataset.uhyqFocus="true",q.textContent=u.label,q.addEventListener("click",()=>S(u));let k=document.createElement("button");k.type="button",k.className="uhyq-btn",k.dataset.answer="no",k.textContent=y.label,k.addEventListener("click",()=>S(y)),d.append(q,k),a?h.append(n,a,d):h.append(n,d),E=P(d),H(h),R(g,e.prompt),x({id:e.id,index:p.history.length+1})}function re(e){M(),h.innerHTML="";let n=document.createElement("h2");n.id=`${e.id}-prompt`,n.textContent=e.prompt;let i=document.createElement("div");i.className="uhyq-choices",i.setAttribute("role","group"),i.setAttribute("aria-labelledby",n.id),(e.options||[]).forEach((r,a)=>{let d={value:r.id||r.label,label:r.label,nextId:r.next,segmentValue:r.id||r.label},u=document.createElement("button");u.type="button",u.className="uhyq-btn",a===0&&(u.dataset.uhyqFocus="true"),u.textContent=r.label,u.addEventListener("click",()=>S(d)),i.appendChild(u)}),h.append(n,i),E=P(i),H(h),R(g,e.prompt),x({id:e.id,index:p.history.length+1})}function se(e){M(),h.innerHTML="";let n=document.createElement("h2");n.textContent=e.title;let i=document.createElement("div");i.className="uhyq-body";let r=O(e.body);r.includes("[helplink:")&&(r=U(r)),i.innerHTML=r;let a=document.createElement("div");a.className="uhyq-outcome-actions",(e.actions||[]).forEach(d=>{let u=_e(d.href,_),y=document.createElement("a");y.className="uhyq-btn uhyq-btn-secondary uhyq-link-button",y.href=u,y.target="_blank",y.rel="noopener noreferrer",y.textContent=d.label,a.appendChild(y)}),a.children.length&&a.firstElementChild?.setAttribute("data-uhyq-focus","true"),h.append(n,i,a),R(g,e.title),T({id:e.id,title:e.title}),b.disabled=p.history.length===0,H(h)}let A=null;function Ee(e){clearTimeout(A);let n=m.querySelector(".uhyq-alert");n||(n=document.createElement("div"),n.className="uhyq-alert",m.insertBefore(n,L)),n.textContent=e,A=window.setTimeout(()=>{n&&n.remove()},4e3)}function D(e){if(e.type!=="yesno"){w.textContent="You're all set";return}let n=p.history.filter(a=>{let d=o.nodes[a.id];return d&&d.type==="yesno"}).length,i=n+1,r=n+K(o,e.id);w.textContent=`Question ${i} of ${r}`}function S(e){let n=o.nodes[p.currentId];if(!n||!e||!e.nextId)return;let i=e.segmentValue??e.value??null;p.history.push({id:n.id,answer:i}),p.pathSegments.push(be(n.id,i)),p.currentId=e.nextId,C()}function ae(){if(!p.history.length)return;let e=p.history.pop();p.pathSegments.pop(),p.currentId=e.id,C()}function I(){p.currentId=o.startId,p.history=[],p.pathSegments=[],A&&clearTimeout(A);let e=m.querySelector(".uhyq-alert");e&&e.remove(),C()}function $(e){if(!(!Array.isArray(e)||!e.length)){I();for(let n of e){if(typeof n!="string"||!n.length)break;let i,r;if(n.includes(":")?[i,r]=n.split(":"):(i=n.slice(0,-1),r=n.slice(-1)),!i)break;let a=o.nodes[p.currentId];if(!a||a.id!==i)break;if(a.type==="buttonGroup"){let y=(a.options||[]).find(q=>(q.id||q.label)===r);if(!y||!y.next)break;S({value:y.id||y.label,nextId:y.next,segmentValue:y.id||y.label});continue}if(a.type!=="yesno")break;let d=r==="y"?"yes":r==="n"?"no":r==="yes"||r==="no"?r:null;if(!d)break;let u=a[d];if(!u||(S({value:d,nextId:u,segmentValue:d}),o.nodes[p.currentId]?.type!=="yesno"&&o.nodes[p.currentId]?.type!=="buttonGroup"))break}}}function C(){let e=o.nodes[p.currentId];if(!e){h.innerHTML=N,b.disabled=!0,w.textContent="Sorry, this quiz is unavailable right now.";return}e.type==="yesno"?(D(e),ie(e),b.disabled=p.history.length===0):e.type==="buttonGroup"?(w.textContent="Select your role to begin",re(e),b.disabled=p.history.length===0):(D(e),se(e))}return b.addEventListener("click",ae),v.addEventListener("click",()=>{window.confirm("Restart the quiz? Your answers will be cleared.")&&I()}),C(),c.length&&$(c),{destroy(){M(),z&&(z(),z=null),A&&clearTimeout(A),t.innerHTML=N},restart:I,applyPath:$}}var J=`.uhyq-card h2 p {
  margin: 0 0 0.75rem;
}

.uhyq-card h2 ul {
  margin: 0 0 0.75rem 1.25rem;
  padding: 0;
  list-style: disc;
}

.uhyq-card h2 ul:last-child {
  margin-bottom: 0;
}

.uhyq-card h2 li {
  margin: 0.35rem 0;
  line-height: 1.45;
}
.uhyq-root {
  font-family: "Inter", "Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif;
  background: #faf5fa;
  color: #000000;
  border: 1px solid rgba(138, 47, 137, 0.2);
  border-radius: 16px;
  box-shadow: 0 12px 24px rgba(138, 47, 137, 0.15);
  padding: 24px;
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.uhyq-root * {
  box-sizing: border-box;
}

.uhyq-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.uhyq-hidden {
  display: none !important;
}

.uhyq-progress {
  font-size: 0.95rem;
  font-weight: 600;
  color: #000000;
}

.uhyq-card {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.uhyq-card h2 {
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.3;
  color: #000000;
}

.uhyq-body {
  font-size: 0.95rem;
  line-height: 1.5;
}

.uhyq-actions,
.uhyq-choices {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.uhyq-btn {
  appearance: none;
  background-color: #8a2f89;
  color: #ffffff;
  border: none;
  border-radius: 999px;
  padding: 12px 20px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;
  outline: none;
}

.uhyq-btn:hover,
.uhyq-btn:focus-visible {
  background-color: #6e2568;
}

.uhyq-btn:focus-visible {
  box-shadow: 0 0 0 3px rgba(243, 146, 0, 0.6);
}

.uhyq-btn-secondary {
  background-color: #f39200;
  color: #ffffff;
  border: 2px solid #d98200;
}

.uhyq-btn-secondary:hover,
.uhyq-btn-secondary:focus-visible {
  background-color: #d98200;
}

.uhyq-controls {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}

.uhyq-controls .uhyq-btn {
  flex: 1 1 150px;
}

.uhyq-fallback {
  padding: 16px;
  border: 1px dashed rgba(138, 47, 137, 0.4);
  border-radius: 12px;
  background: #fff7e6;
  color: #000000;
  font-size: 0.95rem;
}

.uhyq-alert {
  background: #fdf2fa;
  border-left: 4px solid #8a2f89;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 0.95rem;
}

.uhyq-link-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-decoration: none;
}

.uhyq-link-button::after {
  content: "\\2197";
  font-size: 0.85em;
}

.uhyq-outcome-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.uhyq-muted {
  font-size: 0.85rem;
  color: #000000;
}

/* Tooltip styles */
.uhyq-tooltip-wrapper {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  margin-left: 4px;
  line-height: 0;
}

.uhyq-tooltip-icon {
  display: inline-block;
  width: 16px;
  height: 16px;
  padding: 0;
  color: #f39200;
  stroke: #f39200;
  cursor: help;
  border: none;
  outline: none;
  transition: color 0.2s ease, stroke 0.2s ease, transform 0.1s ease;
  box-sizing: content-box;
  vertical-align: middle;
}

.uhyq-tooltip-icon:hover,
.uhyq-tooltip-icon:focus {
  color: #d98200;
  stroke: #d98200;
  transform: scale(1.1);
}

.uhyq-tooltip-icon:focus-visible {
  border-radius: 4px;
  box-shadow: 0 0 0 2px rgba(243, 146, 0, 0.4);
}

.uhyq-tooltip-text {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: calc(100% + 4px);
  left: 50%;
  transform: translateX(-50%) translateY(-4px);
  background-color: #8a2f89;
  color: #ffffff;
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  white-space: nowrap;
  z-index: 1000;
  pointer-events: none;
  transition: opacity 0.15s ease-in-out, visibility 0.15s ease-in-out, transform 0.15s ease-in-out;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  max-width: 280px;
}

.uhyq-tooltip-text::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 6px solid transparent;
  border-bottom-color: #8a2f89;
}

.uhyq-tooltip-wrapper:hover .uhyq-tooltip-text,
.uhyq-tooltip-icon:hover + .uhyq-tooltip-text,
.uhyq-tooltip-icon:focus + .uhyq-tooltip-text {
  visibility: visible;
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

/* Help link styles */
.uhyq-helplink {
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  margin-left: 4px;
  color: #f39200;
  text-decoration: none;
  transition: color 0.2s ease, transform 0.1s ease;
}

.uhyq-helplink:hover,
.uhyq-helplink:focus {
  color: #d98200;
}

.uhyq-helplink:focus-visible {
  outline: 2px solid rgba(243, 146, 0, 0.4);
  outline-offset: 2px;
  border-radius: 50%;
}

.uhyq-helplink-icon {
  display: inline-block;
  width: 16px;
  height: 16px;
  cursor: pointer;
  stroke: #f39200;
  transition: stroke 0.2s ease, transform 0.1s ease;
}

.uhyq-helplink:hover .uhyq-helplink-icon,
.uhyq-helplink:focus .uhyq-helplink-icon {
  stroke: #d98200;
  transform: scale(1.1);
}

.uhyq-helplink-wrapper {
  position: relative;
  display: inline-block;
  vertical-align: middle;
}

.uhyq-helplink-tooltip {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: calc(100% + 4px);
  left: 50%;
  transform: translateX(-50%) translateY(-4px);
  background-color: #f39200;
  color: #ffffff;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  line-height: 1.4;
  white-space: nowrap;
  z-index: 1000;
  pointer-events: none;
  transition: opacity 0.15s ease-in-out, visibility 0.15s ease-in-out, transform 0.15s ease-in-out;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.uhyq-helplink-tooltip::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 6px solid transparent;
  border-bottom-color: #f39200;
}

.uhyq-helplink-wrapper:hover .uhyq-helplink-tooltip,
.uhyq-helplink:focus + .uhyq-helplink-tooltip {
  visibility: visible;
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

@media (max-width: 480px) {
  .uhyq-root {
    padding: 20px;
    border-radius: 12px;
  }

  .uhyq-controls {
    flex-direction: column;
  }
}

@media (prefers-reduced-motion: reduce) {
  .uhyq-btn {
    transition: none;
  }
}

@media print {
  .uhyq-root {
    box-shadow: none;
    border: 1px solid #000;
  }

  .uhyq-controls,
  .uhyq-progress {
    display: none !important;
  }

  .uhyq-outcome-actions {
    display: block;
  }

  .uhyq-link-button::after {
    content: " (" attr(href) ")";
  }
}
`;var W="uhyq-style",qe=`
  <div class="uhyq-fallback" role="note">
    <p><strong>This tool needs JavaScript.</strong> If the quiz does not load, visit SchoolHouse Connection for <a href="https://schoolhouseconnection.org" target="_blank" rel="noopener noreferrer">resources for unaccompanied homeless youth</a>.</p>
  </div>
`,F=new Map;function we(){if(typeof document>"u"||document.getElementById(W))return;let t=document.createElement("style");t.id=W,t.textContent=J,document.head.appendChild(t)}function B(t,o){if(!o)return t;let s=Array.isArray(t)?[...t]:{...t};return Object.keys(o).forEach(l=>{let c=o[l];c&&typeof c=="object"&&!Array.isArray(c)?s[l]=B(s[l]||{},c):s[l]=c}),s}function xe(t){return B({},t)}function ve(t){if(typeof t!="string"||!t.startsWith("#"))return[];let s=new URLSearchParams(t.slice(1)).get("path");return s?decodeURIComponent(s).split("-").map(c=>c.trim()).filter(Boolean):[]}function Ae(t){t&&(t.innerHTML.trim()||(t.innerHTML=qe))}function Z(){F.forEach(t=>{t&&typeof t.destroy=="function"&&t.destroy()}),F.clear()}function ee(){F.forEach(t=>{t&&typeof t.restart=="function"&&t.restart()})}function te(t={}){if(typeof document>"u")return[];let{selector:o="[data-uhy-quiz]",configOverrides:s={},onStep:l,onOutcome:c}=t;we();let _=B(xe(V),s),x=ve(window.location.hash),T=Array.from(document.querySelectorAll(o));return T.length?T.map((m,w)=>{if(F.has(m)){let g=F.get(m);return g.restart(),g}Ae(m);let h=X({container:m,tree:j,config:_,callbacks:{onStep:l,onOutcome:c},initialPathSegments:w===0?x:[]});return F.set(m,h),h}):(console.warn("UHYQuiz: no containers found for selector",o),[])}var oe={init:te,destroyAll:Z,restartAll:ee};typeof window<"u"&&(window.UHYQuiz=oe);var ke=oe;return he(Fe);})();
