const R=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}};R();var Z="./assets/UniParse.75cadb2a.avif 66w, ./assets/UniParse.8d145562.webp 66w";function k(t){t.append(v),x.style.bottom=".3rem";let e=0;x.addEventListener("click",()=>{e=!e,e?b.forEach(r=>r.style.right="2.8rem"):b.forEach(r=>r.style.right=0)})}const v=document.createElement("address"),ee=[[h("youtube"),"https://youtube.com/channel/UCvNOch5x46MDaejgQ6SkzUg"],[h("facebook"),"https://facebook.com/UniParse"],[h("instagram"),"https://instagram.com/UniParse"],[h("linkedin"),"https://linkedin.com/in/UniParse"],[h("github"),"https://github.com/TheUniParse"],[h("twitter"),"https://twitter.com/UniParse"]];for(const[t,e]of ee){const r=document.createElement("a");r.target="_blank",r.innerHTML=t,r.href=e,v.append(r)}const x=document.createElement("img");x.srcset=Z;x.alt="uniparse";v.append(x);const b=v.querySelectorAll("svg");b.forEach((t,e)=>t.style.transition=`all 500ms cubic-bezier(.215, .61, .355, 1), right ${(b.length-e)*100+200}ms cubic-bezier(.4,1,.8,1.4), left ${(b.length-e)*100+200}ms cubic-bezier(.4,1,.8,1.4)`);function h(t){const e={github:"<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='64' height='64' viewBox='0 0 64 64' style=' fill:#000000;'><linearGradient id='KpzH_ttTMIjq8dhx1zD2pa_52539_gr1' x1='30.999' x2='30.999' y1='16' y2='55.342' gradientUnits='userSpaceOnUse' spreadMethod='reflect'><stop offset='0' stop-color='#6dc7ff'></stop><stop offset='1' stop-color='#e6abff'></stop></linearGradient><path fill='url(#KpzH_ttTMIjq8dhx1zD2pa_52539_gr1)' d='M25.008,56.007c-0.003-0.368-0.006-1.962-0.009-3.454l-0.003-1.55 c-6.729,0.915-8.358-3.78-8.376-3.83c-0.934-2.368-2.211-3.045-2.266-3.073l-0.124-0.072c-0.463-0.316-1.691-1.157-1.342-2.263 c0.315-0.997,1.536-1.1,2.091-1.082c3.074,0.215,4.63,2.978,4.694,3.095c1.569,2.689,3.964,2.411,5.509,1.844 c0.144-0.688,0.367-1.32,0.659-1.878C20.885,42.865,15.27,40.229,15.27,30.64c0-2.633,0.82-4.96,2.441-6.929 c-0.362-1.206-0.774-3.666,0.446-6.765l0.174-0.442l0.452-0.144c0.416-0.137,2.688-0.624,7.359,2.433 c1.928-0.494,3.969-0.749,6.074-0.759c2.115,0.01,4.158,0.265,6.09,0.759c4.667-3.058,6.934-2.565,7.351-2.433l0.451,0.145 l0.174,0.44c1.225,3.098,0.813,5.559,0.451,6.766c1.618,1.963,2.438,4.291,2.438,6.929c0,9.591-5.621,12.219-10.588,13.087 c0.563,1.065,0.868,2.402,0.868,3.878c0,1.683-0.007,7.204-0.015,8.402l-2-0.014c0.008-1.196,0.015-6.708,0.015-8.389 c0-2.442-0.943-3.522-1.35-3.874l-1.73-1.497l2.274-0.253c5.205-0.578,10.525-2.379,10.525-11.341c0-2.33-0.777-4.361-2.31-6.036 l-0.43-0.469l0.242-0.587c0.166-0.401,0.894-2.442-0.043-5.291c-0.758,0.045-2.568,0.402-5.584,2.447l-0.384,0.259l-0.445-0.123 c-1.863-0.518-3.938-0.796-6.001-0.806c-2.052,0.01-4.124,0.288-5.984,0.806l-0.445,0.123l-0.383-0.259 c-3.019-2.044-4.833-2.404-5.594-2.449c-0.935,2.851-0.206,4.892-0.04,5.293l0.242,0.587l-0.429,0.469 c-1.536,1.681-2.314,3.712-2.314,6.036c0,8.958,5.31,10.77,10.504,11.361l2.252,0.256l-1.708,1.49 c-0.372,0.325-1.03,1.112-1.254,2.727l-0.075,0.549l-0.506,0.227c-1.321,0.592-5.839,2.162-8.548-2.485 c-0.015-0.025-0.544-0.945-1.502-1.557c0.646,0.639,1.433,1.673,2.068,3.287c0.066,0.19,1.357,3.622,7.28,2.339l1.206-0.262 l0.012,3.978c0.003,1.487,0.006,3.076,0.009,3.444L25.008,56.007z'></path><linearGradient id='KpzH_ttTMIjq8dhx1zD2pb_52539_gr2' x1='32' x2='32' y1='5' y2='59.167' gradientUnits='userSpaceOnUse' spreadMethod='reflect'><stop offset='0' stop-color='#1a6dff'></stop><stop offset='1' stop-color='#c822ff'></stop></linearGradient><path fill='url(#KpzH_ttTMIjq8dhx1zD2pb_52539_gr2)' d='M32,58C17.663,58,6,46.337,6,32S17.663,6,32,6s26,11.663,26,26S46.337,58,32,58z M32,8 C18.767,8,8,18.767,8,32s10.767,24,24,24s24-10.767,24-24S45.233,8,32,8z'></path></svg>",twitter:"<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='64' height='64' viewBox='0 0 64 64' style=' fill:#000000;'><linearGradient id='iS8U25XJCb2VBQOwbuAcra_bYzsf9Bmocst_gr1' x1='32' x2='32' y1='9.936' y2='52.195' gradientUnits='userSpaceOnUse'><stop offset='0' stop-color='#1a6dff'></stop><stop offset='1' stop-color='#c822ff'></stop></linearGradient><path fill='url(#iS8U25XJCb2VBQOwbuAcra_bYzsf9Bmocst_gr1)' d='M57.595,16.086c-0.286-0.341-0.762-0.45-1.17-0.271c-0.614,0.271-1.245,0.512-1.891,0.719 c0.824-1.035,1.462-2.216,1.874-3.491c0.127-0.396-0.002-0.827-0.326-1.087c-0.324-0.261-0.774-0.295-1.131-0.083 c-1.777,1.041-3.672,1.788-5.641,2.223C47.244,12.122,44.449,11,41.555,11c-6.169,0-11.189,4.978-11.189,11.097 c0,0.404,0.022,0.81,0.067,1.214c-7.41-0.705-14.289-4.343-19.027-10.103c-0.207-0.252-0.518-0.385-0.85-0.362 c-0.325,0.025-0.618,0.207-0.784,0.488c-0.993,1.679-1.519,3.613-1.519,5.593c0,2.447,0.807,4.78,2.247,6.68 c-0.292-0.123-0.579-0.26-0.859-0.412c-0.311-0.167-0.686-0.161-0.988,0.021c-0.303,0.181-0.488,0.507-0.488,0.859v0.119 c0,3.708,1.868,7.073,4.786,9.104c-0.012-0.002-0.024-0.005-0.036-0.007c-0.35-0.065-0.699,0.062-0.93,0.327 c-0.231,0.265-0.306,0.631-0.198,0.966c1.182,3.648,4.149,6.371,7.769,7.332c-3.003,1.771-6.401,2.697-9.957,2.697 c-0.786,0-1.563-0.046-2.308-0.137c-0.467-0.059-0.906,0.218-1.063,0.657c-0.157,0.44,0.012,0.931,0.407,1.181 C11.478,51.38,17.064,53,22.79,53c18.772,0,29.989-15.119,29.989-29.736c0-0.271-0.005-0.541-0.014-0.81 c1.907-1.423,3.552-3.159,4.896-5.169C57.908,16.915,57.881,16.427,57.595,16.086z M51.167,21.143 c-0.279,0.197-0.438,0.523-0.422,0.865c0.02,0.415,0.034,0.834,0.034,1.256C50.779,36.897,40.31,51,22.79,51 c-3.982,0-7.894-0.84-11.499-2.452c4.226-0.321,8.198-1.85,11.575-4.468c0.335-0.26,0.47-0.702,0.336-1.104 s-0.506-0.677-0.93-0.686c-3.381-0.065-6.404-1.952-7.948-4.835c1.115,0.038,2.203-0.099,3.276-0.393 c0.447-0.123,0.751-0.537,0.735-1c-0.017-0.464-0.35-0.854-0.804-0.945c-3.773-0.752-6.632-3.773-7.244-7.449 c1.122,0.403,2.297,0.631,3.468,0.667c0.459,0.011,0.848-0.271,0.983-0.696c0.136-0.426-0.027-0.89-0.399-1.137 c-2.558-1.698-4.084-4.53-4.084-7.575c0-1.135,0.21-2.25,0.614-3.287c5.319,5.827,12.784,9.361,20.714,9.76 c0.328,0.022,0.617-0.116,0.817-0.357c0.202-0.241,0.278-0.563,0.207-0.868c-0.16-0.685-0.24-1.384-0.24-2.077 c0-5.016,4.122-9.097,9.189-9.097c2.537,0,4.979,1.047,6.7,2.871c0.235,0.248,0.581,0.359,0.917,0.296 c1.385-0.267,2.739-0.671,4.048-1.209c-0.729,1.007-1.665,1.865-2.759,2.514c-0.407,0.242-0.589,0.735-0.436,1.184 c0.153,0.447,0.597,0.73,1.068,0.669c0.952-0.117,1.886-0.292,2.797-0.525C53.06,19.666,52.15,20.449,51.167,21.143z'></path><linearGradient id='iS8U25XJCb2VBQOwbuAcrb_bYzsf9Bmocst_gr2' x1='38.903' x2='38.903' y1='9.936' y2='52.195' gradientUnits='userSpaceOnUse'><stop offset='0' stop-color='#1a6dff'></stop><stop offset='1' stop-color='#c822ff'></stop></linearGradient><path fill='url(#iS8U25XJCb2VBQOwbuAcrb_bYzsf9Bmocst_gr2)' d='M30.772,45.786l0.621,1.9c7.123-2.326,12.824-7.914,15.642-15.33l-1.869-0.711 C43.636,35.671,39.733,42.859,30.772,45.786z'></path><g><linearGradient id='iS8U25XJCb2VBQOwbuAcrc' x1='42' x2='42' y1='17.979' y2='21.528' gradientUnits='userSpaceOnUse'><stop offset='0' stop-color='#6dc7ff'></stop><stop offset='1' stop-color='#e6abff'></stop></linearGradient><circle cx='42' cy='20' r='2' fill='url(#undefined)'></circle></g></svg>",facebook:"<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='64' height='64' viewBox='0 0 64 64' style=' fill:#000000;'><linearGradient id='JOZq0V4XPxMzNaLCE5XPGa_44003_gr1' x1='37.646' x2='37.646' y1='14.5' y2='56.878' gradientUnits='userSpaceOnUse' spreadMethod='reflect'><stop offset='0' stop-color='#6dc7ff'></stop><stop offset='1' stop-color='#e6abff'></stop></linearGradient><path fill='url(#JOZq0V4XPxMzNaLCE5XPGa_44003_gr1)' d='M42,56V38h5.358l0.934-8H42v-4.457c0-2.097-0.131-3.527,2.877-3.527L48,22.014v-6.479 c-1-0.088-2.487-0.285-5.136-0.285c-5.531,0-8.864,3.376-8.864,9.576V30h-7v8h7v18H42z'></path><linearGradient id='JOZq0V4XPxMzNaLCE5XPGb_44003_gr2' x1='32' x2='32' y1='6.833' y2='58.017' gradientUnits='userSpaceOnUse' spreadMethod='reflect'><stop offset='0' stop-color='#1a6dff'></stop><stop offset='1' stop-color='#c822ff'></stop></linearGradient><path fill='url(#JOZq0V4XPxMzNaLCE5XPGb_44003_gr2)' d='M50,57H14c-3.859,0-7-3.141-7-7V14c0-3.859,3.141-7,7-7h36c3.859,0,7,3.141,7,7v36 C57,53.859,53.859,57,50,57z M14,9c-2.757,0-5,2.243-5,5v36c0,2.757,2.243,5,5,5h36c2.757,0,5-2.243,5-5V14c0-2.757-2.243-5-5-5H14z'></path></svg>",linkedin:"<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='64' height='64' viewBox='0 0 64 64' style=' fill:#000000;'><linearGradient id='SUJNhpmDQDF27Y3OfwgfYa_44019_gr1' x1='19' x2='19' y1='24.858' y2='49.041' gradientUnits='userSpaceOnUse' spreadMethod='reflect'><stop offset='0' stop-color='#6dc7ff'></stop><stop offset='1' stop-color='#e6abff'></stop></linearGradient><path fill='url(#SUJNhpmDQDF27Y3OfwgfYa_44019_gr1)' fill-rule='evenodd' d='M22 48L22 26 16 26 16 48 22 48z' clip-rule='evenodd'></path><linearGradient id='SUJNhpmDQDF27Y3OfwgfYb_44019_gr2' x1='19.382' x2='19.382' y1='15.423' y2='23.341' gradientUnits='userSpaceOnUse' spreadMethod='reflect'><stop offset='0' stop-color='#6dc7ff'></stop><stop offset='1' stop-color='#e6abff'></stop></linearGradient><path fill='url(#SUJNhpmDQDF27Y3OfwgfYb_44019_gr2)' fill-rule='evenodd' d='M19.358,23c2.512,0,4.076-1.474,4.076-3.554 c-0.047-2.126-1.564-3.649-4.028-3.649c-2.465,0-4.076,1.475-4.076,3.601c0,2.08,1.563,3.602,3.981,3.602H19.358L19.358,23z' clip-rule='evenodd'></path><linearGradient id='SUJNhpmDQDF27Y3OfwgfYc_44019_gr3' x1='37.386' x2='37.386' y1='14.125' y2='49.525' gradientUnits='userSpaceOnUse' spreadMethod='reflect'><stop offset='0' stop-color='#6dc7ff'></stop><stop offset='1' stop-color='#e6abff'></stop></linearGradient><path fill='url(#SUJNhpmDQDF27Y3OfwgfYc_44019_gr3)' fill-rule='evenodd' d='M26.946,48H34V35.911c0-0.648,0.122-1.295,0.313-1.758 c0.52-1.295,1.877-2.635,3.867-2.635c2.607,0,3.821,1.988,3.821,4.901V48h6V35.588c0-6.657-3.085-9.498-7.826-9.498 c-3.886,0-5.124,1.91-6.072,3.91H34v-4h-7.054c0.095,2-0.175,22-0.175,22H26.946z' clip-rule='evenodd'></path><linearGradient id='SUJNhpmDQDF27Y3OfwgfYd_44019_gr4' x1='32' x2='32' y1='6.5' y2='57.5' gradientUnits='userSpaceOnUse' spreadMethod='reflect'><stop offset='0' stop-color='#1a6dff'></stop><stop offset='1' stop-color='#c822ff'></stop></linearGradient><path fill='url(#SUJNhpmDQDF27Y3OfwgfYd_44019_gr4)' d='M50,57H14c-3.859,0-7-3.141-7-7V14c0-3.859,3.141-7,7-7h36c3.859,0,7,3.141,7,7v36 C57,53.859,53.859,57,50,57z M14,9c-2.757,0-5,2.243-5,5v36c0,2.757,2.243,5,5,5h36c2.757,0,5-2.243,5-5V14c0-2.757-2.243-5-5-5H14z'></path></svg>",instagram:"<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='64' height='64' viewBox='0 0 64 64' style=' fill:#000000;'><linearGradient id='jm_nAfYbxsVmTlYr5N4x9a_43625_gr1' x1='32' x2='32' y1='6.667' y2='57.872' gradientUnits='userSpaceOnUse' spreadMethod='reflect'><stop offset='0' stop-color='#1a6dff'></stop><stop offset='1' stop-color='#c822ff'></stop></linearGradient><path fill='url(#jm_nAfYbxsVmTlYr5N4x9a_43625_gr1)' d='M44,57H20c-7.168,0-13-5.832-13-13V20c0-7.168,5.832-13,13-13h24c7.168,0,13,5.832,13,13v24 C57,51.168,51.168,57,44,57z M20,9C13.935,9,9,13.935,9,20v24c0,6.065,4.935,11,11,11h24c6.065,0,11-4.935,11-11V20 c0-6.065-4.935-11-11-11H20z'></path><linearGradient id='jm_nAfYbxsVmTlYr5N4x9b_43625_gr2' x1='32' x2='32' y1='18.167' y2='45.679' gradientUnits='userSpaceOnUse' spreadMethod='reflect'><stop offset='0' stop-color='#6dc7ff'></stop><stop offset='1' stop-color='#e6abff'></stop></linearGradient><path fill='url(#jm_nAfYbxsVmTlYr5N4x9b_43625_gr2)' d='M32,45c-7.168,0-13-5.832-13-13c0-7.168,5.832-13,13-13c7.168,0,13,5.832,13,13 C45,39.168,39.168,45,32,45z M32,23c-4.962,0-9,4.038-9,9c0,4.963,4.038,9,9,9c4.963,0,9-4.037,9-9C41,27.038,36.963,23,32,23z'></path><linearGradient id='jm_nAfYbxsVmTlYr5N4x9c_43625_gr3' x1='46' x2='46' y1='12.75' y2='23.049' gradientUnits='userSpaceOnUse' spreadMethod='reflect'><stop offset='0' stop-color='#6dc7ff'></stop><stop offset='1' stop-color='#e6abff'></stop></linearGradient><path fill='url(#jm_nAfYbxsVmTlYr5N4x9c_43625_gr3)' d='M46 15A3 3 0 1 0 46 21A3 3 0 1 0 46 15Z'></path></svg>",youtube:"<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='64' height='64' viewBox='0 0 64 64' style=' fill:#000000;'><linearGradient id='PMWUiMSnUf2R_PPJ6rqZea_44112_gr1' x1='32' x2='32' y1='10' y2='54.751' gradientUnits='userSpaceOnUse' spreadMethod='reflect'><stop offset='0' stop-color='#1a6dff'></stop><stop offset='1' stop-color='#c822ff'></stop></linearGradient><path fill='url(#PMWUiMSnUf2R_PPJ6rqZea_44112_gr1)' d='M32,53.001c-6.358,0-12.716-0.195-19.299-0.584c-4.96-0.293-8.961-4.242-9.308-9.187 c-0.521-7.452-0.521-15.009-0.001-22.46c0.348-4.945,4.349-8.895,9.309-9.188c13.167-0.778,25.433-0.778,38.598,0 c4.96,0.293,8.961,4.242,9.308,9.187c0.521,7.452,0.521,15.009,0.001,22.46c-0.348,4.945-4.349,8.895-9.309,9.188l0,0 C44.716,52.806,38.358,53.001,32,53.001z M51.182,50.421l0.059,0.998L51.182,50.421c3.959-0.234,7.153-3.386,7.431-7.331 c0.515-7.358,0.515-14.821-0.001-22.181c-0.276-3.944-3.471-7.096-7.43-7.33c-13.088-0.773-25.275-0.773-38.363,0 c-3.959,0.234-7.153,3.386-7.431,7.331c-0.515,7.358-0.515,14.821,0.001,22.181c0.276,3.944,3.471,7.096,7.43,7.33 C25.906,51.194,38.094,51.194,51.182,50.421z'></path><linearGradient id='PMWUiMSnUf2R_PPJ6rqZeb_44112_gr2' x1='31.72' x2='31.72' y1='24.25' y2='39.252' gradientUnits='userSpaceOnUse' spreadMethod='reflect'><stop offset='0' stop-color='#6dc7ff'></stop><stop offset='1' stop-color='#e6abff'></stop></linearGradient><path fill='url(#PMWUiMSnUf2R_PPJ6rqZeb_44112_gr2)' d='M25 39.84L25 24.16 38.44 32z'></path><linearGradient id='PMWUiMSnUf2R_PPJ6rqZec_44112_gr3' x1='32.212' x2='32.212' y1='10' y2='54.751' gradientUnits='userSpaceOnUse' spreadMethod='reflect'><stop offset='0' stop-color='#1a6dff'></stop><stop offset='1' stop-color='#c822ff'></stop></linearGradient><path fill='url(#PMWUiMSnUf2R_PPJ6rqZec_44112_gr3)' d='M24,41.581V22.419L40.425,32L24,41.581z M26,25.901v12.197L36.456,32L26,25.901z'></path></svg>",whatsapp:"<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='64' height='64' viewBox='0 0 64 64' style=' fill:#000000;'><linearGradient id='fzF5K76u~QPjMIgETt7bMa_43677_gr1' x1='32' x2='32' y1='5.25' y2='58.834' gradientUnits='userSpaceOnUse' spreadMethod='reflect'><stop offset='0' stop-color='#1a6dff'></stop><stop offset='1' stop-color='#c822ff'></stop></linearGradient><path fill='url(#fzF5K76u~QPjMIgETt7bMa_43677_gr1)' d='M6.399,57.699l3.792-13.847c-2.076-3.74-3.17-7.975-3.168-12.272 C7.028,17.641,18.373,6.301,32.312,6.301c6.762,0.003,13.115,2.636,17.889,7.414c4.774,4.778,7.402,11.151,7.4,17.944 C57.595,45.633,46.25,57,32.312,57c-4.024,0-8.073-1.019-11.744-2.95L6.399,57.699z M20.828,51.918l0.346,0.188 C24.645,53.999,28.492,55,32.302,55c12.846,0,23.293-10.471,23.299-23.341c0.002-6.26-2.418-12.13-6.814-16.53 S38.538,8.304,32.312,8.301c-12.836,0-23.283,10.443-23.288,23.279c-0.002,4.089,1.072,8.113,3.107,11.639l0.209,0.361L9.239,54.902 L20.828,51.918z M32.312,53c-3.686,0-7.415-1.06-10.793-3.063l-0.437-0.318l-8.854,2.323l2.382-8.691l-0.244-0.387 c-2.123-3.376-3.243-7.271-3.241-11.269c0.004-11.67,9.513-21.165,21.195-21.165c5.642,0.002,10.961,2.218,14.979,6.239 c4,4.003,6.202,9.345,6.2,15.039C53.495,43.448,43.99,53,32.312,53z M22.583,48.242C25.641,50.047,29.001,51,32.304,51 c10.584,0,19.191-8.654,19.195-19.292c0.002-5.161-1.992-10-5.614-13.625c-3.642-3.644-8.459-5.651-13.565-5.653 c-10.581,0-19.191,8.598-19.195,19.166c-0.002,3.619,1.012,7.146,2.933,10.201l0.715,1.131l-1.698,6.199l6.429-1.687L22.583,48.242z'></path><linearGradient id='fzF5K76u~QPjMIgETt7bMb_43677_gr2' x1='32.305' x2='32.305' y1='17.5' y2='46.527' gradientUnits='userSpaceOnUse' spreadMethod='reflect'><stop offset='0' stop-color='#6dc7ff'></stop><stop offset='1' stop-color='#e6abff'></stop></linearGradient><path fill='url(#fzF5K76u~QPjMIgETt7bMb_43677_gr2)' fill-rule='evenodd' d='M26.12,21.219c-0.464-1.031-0.952-1.052-1.394-1.07 c-0.361-0.015-0.774-0.015-1.187-0.015c-0.413,0-1.084,0.155-1.651,0.775c-0.568,0.62-2.168,2.118-2.168,5.164 c0,3.047,2.219,5.991,2.529,6.405c0.31,0.413,4.284,6.865,10.579,9.347c5.231,2.063,6.296,1.653,7.431,1.549 c1.135-0.103,3.664-1.498,4.18-2.944c0.516-1.446,0.516-2.685,0.361-2.944c-0.155-0.258-0.568-0.413-1.187-0.723 c-0.619-0.31-3.664-1.808-4.232-2.014c-0.568-0.206-0.981-0.31-1.394,0.31c-0.413,0.619-1.599,2.014-1.96,2.427 c-0.361,0.414-0.723,0.465-1.342,0.156c-0.619-0.311-2.614-0.964-4.98-3.074c-1.841-1.641-3.084-3.668-3.445-4.288 c-0.361-0.619-0.039-0.955,0.272-1.264c0.278-0.277,0.619-0.723,0.929-1.085c0.309-0.362,0.412-0.62,0.619-1.033 c0.206-0.414,0.103-0.775-0.052-1.085S26.67,22.443,26.12,21.219z' clip-rule='evenodd'></path></svg>"};return t?e[t]:e}const i={power:`
55 46 40 34 29 29 35   47   29 29 30 35 42  51
42  30 25 21 23 26   44   34 22 20 24 30 36  47
34   16 13 11 10 29   42   29 10 11 13 16 34  48
46  33 27 24 18 22  37  37  22 18 24 27 33
40     26  10         18         10  26   40  60`,standard:`
\`  1 2 3 4 5 6   \\   7 8 9 0 =   \u232B
\u21C4    q w f p b   [   j l u y ' -   \u23CE
alt   a r s t g   ]   m n e i o ;   \u23CE
\u21E7    \u21E7 x c d v   z /   k h , . \u21E7
\u229E      \u2A01 \u{1F4B2}     space    \u2B50 \u2A01 \u2A01 \u2263`,ext:`
.  . . . . . .   .   . . . . .    .
.   \u21C8 \u2297 \u25B4 \u2387 .   .   . \u21F1 \u2191 \u21F2 \u21DE \u21DF   .
.    \u21CA \u25C2 \u25BE \u25B8 \u2263   .   \u21C4 \u2190 \u2193 \u2192 \u23CE .   .
.   . \u21A9 \u21AA \u232B \u2326   . .   \u21EA \u25F4 \u29BA \u25F7 .
.       . .      .        . . . .`,ext2:`
.  . . . . . .   .   . . . . .      .
.   . . . . .   .   . \u2399 \u{1F50A} \u229A \u25FC .   .
.   . . \u{1F50D} . .   .  \u{1F4F1} \u23EE \u{1F509} \u23ED \u23EF \u{1F507}   .
.  . . . . .   . .   \u2600 \u2733 \u2295 \u229D .
.       . .     .     . . . .`,sym:`
\u22C6  \u25AA \u25B8 . . \xBB .   .   \u203A \u2022 . . \u2043  .
. \` [ ] . .   .   .  . ( ) " _  .
.   1 2 3 4 .   \u20AC  \\ 7 8 9 0 :  .
.  . { } 5 =   . .   / 6 < > .
.     . .       .      . . . .`,sym2:`
. \u2152 \xBD  \u2153  \xBC  \u2155  .    .    \xBE  \u2070  .  .  .   .
.  \u{1F4A1} \u26A0\uFE0F  \u2191  \u03C0  \u2248    \u2209   .  .  \u2264  \u2265  \u2026   \xB1   .
.   F1 F2 F3 F4 \u2260    \u2208   .  F7 F8 F9 F10  .   .
.  .  \u2717  \u32BF F5 F11  . .  F12 F6  .  .  .
.      .   .         .         .   .   .   .`},F=i.standard;te();i.shift=Y(i.standard);i.symShift=Y(i.sym,!1);i.standardHtk=i.standard.map(t=>S(t));i.extHtk=i.ext.map(t=>S(t));i.ext2Htk=i.ext2.map(t=>S(t));i.standardRows=V(F);i.standardHtkRows=V(F.split("").map(t=>S(t)).join(""));function te(){Object.entries(i).forEach(([t,e])=>i[t]=e.replace(`
`,"").replaceAll(`
`," ").replaceAll("    "," ").replaceAll("   "," ").replaceAll("  "," ").split(" "))}function V(t){const e=["top","upper","home","lower","bottom"],r=t.replace(`
`,"").replaceAll("    "," ").replaceAll("   "," ").replaceAll("  "," ").split(`
`);return r.forEach((n,o)=>r[o]=n.split(" ")),Object.fromEntries(e.map((n,o)=>[n,r[o]]))}function Y(t,e=!0){return t.map(r=>{if(e&&r==".")return">";switch(r){case"`":return"~";case"1":return"!";case"2":return"@";case"3":return"#";case"4":return"$";case"5":return"%";case"6":return"^";case"7":return"&";case"8":return"*";case"9":return"(";case"0":return")";case"=":return"+";case"-":return"_";case"\\":return"|";case"/":return"?";case"[":return"{";case"]":return"}";case",":return"<";case";":return":";case"'":return'"';default:return r.length==1&&r>="a"&&r<="z"?r.toUpperCase():r}})}function S(t){switch(t){case"\u{1F4B2}":return"F23";case"\u2B50":return"F24";case"\u2297":return"Esc";case"\u238B":return"Esc";case"\u21C4":return"Tab";case"\u23CE":return"Enter";case"\u21EA":return"Capslock";case"\u21E7":return"LShift";case"\u2A01":return"LCtrl";case"\u229E":return"LWin";case"\u2263":return"AppsKey";case"\u232B":return"Bs";case"\u2326":return"Del";case"\u21F1":return"Home";case"\u21F2":return"End";case"\u21DE":return"PgUp";case"\u21DF":return"PgDn";case"\u2191":return"Up";case"\u2193":return"Down";case"\u2192":return"Right";case"\u2190":return"Left";case"\u25B4":return"mouseU";case"\u25BE":return"mouseD";case"\u25B8":return"mouseR";case"\u25C2":return"mouseL";case"\u25F4":return"LButton";case"\u25F7":return"RButton";case"\u29BA":return"MButton";case"\u21A9":return"XButton1";case"\u21AA":return"XButton2";case"\u21C8":return"WheelDown";case"\u21CA":return"WheelUp";case"\u2387":return"speed";case"\u23EF":return"Media_Play_Pause";case"\u25FC":return"Media_Stop";case"\u23ED":return"Media_Next";case"\u23EE":return"Media_Prev";case"\u{1F507}":return"Volume_Mute";case"\u{1F50A}":return"Volume_Up";case"\u{1F509}":return"Volume_Down";case"\u2600":return"brightnessUp";case"\u2733":return"brightnessDown";case"\u{1F50D}":return"Browser_Search";case"\u229A":return"^Numpad0";case"\u2295":return"^NumpadAdd";case"\u229D":return"^NumpadSub";case"\u2399":return"PrintScreen";case"\u{1F4F1}":return'Run( "calc")';case"%":return"`%";case";":return"`;";default:return t}}var re="./assets/pop1.b5fe646f.wav",se="./assets/pop2.5719bcba.wav",oe="./assets/pop3.4711d144.wav";const N=[re,se,oe];N.forEach(t=>new Audio(t));function ne(){const t=document.querySelectorAll("#keyboard button");document.addEventListener("keydown",e=>{const{key:r,code:n}=e;console.log(n,r);const o=[].find.call(t,a=>a.innerText==r||a.className.split(" ").find(s=>s==r||s=="_"+r||s=="space"&&r==" "||s=="LShift"&&r=="Shift"));!o||(new Audio(N[Math.floor(Math.random()*3)]).play(),o.style.borderStyle="inset",o.className.includes("modifier")?o.style.backgroundColor="darkcyan":o.style.backgroundColor="#333",document.addEventListener("keyup",function a({key:s}){r==s&&(document.removeEventListener("keyup",a),o.style.borderStyle="outset",o.className.includes("modifier")?o.style.backgroundColor="#222":o.style.backgroundColor="#666")},{once:!1}))})}const K=document.createElement("div");K.id="keyboard";const ae=[...Object.entries(i.standardRows)],ce=ae.map(([t,e])=>{const r=document.createElement("div");r.id=`${t}_row`,r.className="row";const n=e.map((o,a)=>{const s=document.createElement("button");return s.textContent=o,s.className=le(i.standardHtkRows[t][a]),"\u232B \u21C4 \u23CE alt \u21E7 \u229E \u2A01 \u{1F4B2} space \u2B50 \u2263".split(" ").includes(o)&&s.classList.add("modifier"),s});return r.append(...n),r});K.append(...ce);function le(t){if(+t||t==0)return`_${t}`;switch(t){case"`":return"backtick";case"-":return"hyphon";case"=":return"equal";case"/":return"slash";case"\\":return"backSlash";case"[":return"openBreacket";case"]":return"closeBracket";case"'":return"quate";case"`;":return"semiColon";case",":return"comma";case".":return"period";default:return t}}var ie="./assets/UniParse.b0fbb7ff.zip",de="./assets/msklc.100e6e50.zip";const _=document.createElement("fieldset");_.id="switcher";_.name="layer";const W=document.createElement("legend");W.innerText="layout switcher";_.append(W);const pe="power standard shift ext ext2 sym symShift sym2",fe=pe.split(" ").map(t=>{const e=document.createElement("label");e.id=`label_${t}`;const r=document.createElement("input");return r.type="radio",r.id=`radio_${t}`,r.name="layer",r.value=t,t=="standard"&&r.setAttribute("checked",!0),e.append(r,t),e});_.append(...fe);function ue(){const t=document.querySelectorAll("#keyboard button");_.addEventListener("change",e=>t.forEach((r,n)=>r.textContent=i[e.target.value][n]))}const M=document.createElement("div");M.id="panel";M.append(_);const C=document.createElement("div");C.id="download";M.append(C);const U=document.createElement("a");U.textContent="MsKLC";U.download="msklc.zip";U.href=de;C.append(U);const P=document.createElement("a");P.textContent="AutoHotKey";P.download="autohotkey.zip";P.href=ie;C.append(P);const c="F23",l="F24",$=[-400,2],p={symKey:c,extKey:l};p.intro=`;
;
;   made by UniParse
;   github.com/TheUniParse
;   twitter.com/UniParse
;
;
#Requires AutoHotkey v2.0
ProcessSetPriority 'High'
Persistent
; #Warn  ; Enable warnings to assist with detecting common errors.

SetCapsLockState 'AlwaysOff'

scroll_default_speed := 40
scroll_speed_multiplier := .25

x_slow := 1.5
x_default := 2.8
y_slow := x_slow
y_default := x_default
x := x_default
y := y_default

speed_switcher := 0
move__nth := 0
x_max := speed_switcher ? x_default : 8

;double click or tripleclick  
speed_move := 0
x_double := 1.02
x_triple := 1.05
y_double := x_double
y_triple := x_triple

resetSpeed() {
  global
  x := speed_switcher ? x_slow : x_default
  y := speed_switcher ? y_slow : y_default
}

brightnessJump := 10
CurrentBrightness := GetCurrentBrightNess()
; ChangeBrightness(0)
; minimumBrightness := GetCurrentBrightNess()
; ChangeBrightness(CurrentBrightness)

ChangeBrightness( brightness := 50, timeout := 1 ) {
	For property in ComObjGet( "winmgmts:\\\\.\\root\\WMI" ).ExecQuery("SELECT * FROM WmiMonitorBrightnessMethods" )
		property.WmiSetBrightness( timeout, brightness)
}

GetCurrentBrightNess() {
	For property in ComObjGet( "winmgmts:\\\\.\\root\\WMI" ).ExecQuery( "SELECT * FROM WmiMonitorBrightness" )
		currentBrightness := property.CurrentBrightness	
	return currentBrightness
}


`;p.switchers=`	layer_ext := 0
  layer_ext2 := 0
  layer_sym := 0
  layer_sym2 := 0
  hold_${c} := 0
  press_${c} := 0
  hold_${l} := 0
  press_${l} := 0

  ${c}:: {
    global
    if hold_${c}
      return
    hold_${c} := 1
    if layer_sym
      layer_sym := 0
    If !press_${c} {
      press_${c} := 1
      SetTimer double_${c}_timer, ${$}
      KeyWait('${c}')
      hold_${c} := 0
    } Else if KeyWait('${c}', 'T.${$[1]}') {
      if layer_ext
        layer_ext := 0
      layer_sym := 1
      press_${c} := 0
      hold_${c} := 0
    } else {
      layer_sym2 := 1
      KeyWait('${c}')
      layer_sym2 := 0
      hold_${c} := 0
    }
  }
  double_${c}_timer() {
    global
    press_${c} := 0
  }

  ${l}:: {
    global
    if hold_${l}
      return
    hold_${l} := 1
    if layer_ext
      layer_ext := 0
    If !press_${l} {
      press_${l} := 1
      SetTimer double_${l}_timer, ${$[0]}
      KeyWait('${l}')
      hold_${l} := 0
    } Else if KeyWait('${l}', 'T.${$[1]}') {
      if layer_sym
        layer_sym := 0
      layer_ext := 1
      press_${l} := 0
      hold_${l} := 0
    } else {
      layer_ext2 := 1
      KeyWait('${l}')
      layer_ext2 := 0
      hold_${l} := 0        
    }
  }
  double_${l}_timer() {
    global
    press_${l} := 0
  }`;p.layer_condition={sym:`!layer_sym2 && ((layer_sym && !GetKeyState("${l}", "P")) || (!layer_sym && GetKeyState("${c}", "P") && !GetKeyState("${l}", "P")) || (layer_ext && GetKeyState("${c}", "P")))`,sym1:`GetKeyState("${c}", "P") && GetKeyState("${l}", "P")`,sym2:"layer_sym2",ext:`!layer_ext2 && ((layer_ext && !GetKeyState("${c}", "P")) || (!layer_ext && GetKeyState("${l}", "P") && !GetKeyState("${c}", "P")) || (layer_sym && GetKeyState("${l}", "P")))`,ext2:"layer_ext2"};const z={getWheel:me,getHover:he};function me(t,e,r){return`	press_${e} := 0
  scroll_${e} := 0
  speed_${e} := 0
  *${e}:: {
    global
    if scroll_${e}
      return
    If !press_${e} {
      press_${e} := 1
      SetTimer(speed_${e}_timer, -300)
    } Else
      press_${e} := 2
    SendInput '{Blind}{${r}}'
    if KeyWait('${e}', 'T.2') 
      speed_${e} := 0
    Else{
      scroll_${e} := 1
      scroll_speed := scroll_default_speed
      If speed_${e} {
        scroll_speed *= scroll_speed_multiplier
        speed_${e} := 0
      }
      setTimer(scroll_${e}_timer, scroll_speed)
    }   
  }
  scroll_${e}_timer() {
    global
    if GetKeyState("${e}","P") && (layer_ext || GetKeyState("${t}","P"))
      SendInput '{Blind}{${r}}'
    Else {
      scroll_speed := scroll_default_speed
      scroll_${e} := 0
      setTimer( , 0)
    }
  }
  speed_${e}_timer() {
    global
    if press_${e} = 2
      speed_${e} := 1
    press_${e} := 0
  }
`}function he(t,e,r,n,o){return a(e)+a(n)+a(r)+a(o);function a(s){return`	move_${s} := 0
  press_${s} := 0
  ${s}:: {
    global

    If move_${s}
      return

    if GetKeyState("${d(s)?e:o}","P") || GetKeyState("${d(s)?n:r}","P") || GetKeyState("${m(s)}","P") {
      move_${s} := ++move__nth
      SetTimer(move_${s}_timer, A_MouseDelay)
      
      return
    }

    If !press_${s} {
      press_${s} := 1
      SetTimer(speed_${s}_timer, -300)
    } Else
      press_${s} := 2

    MouseMove(${w(s)},, 'R')

    if KeyWait('${s}', 'T.1')
      speed_move := 0
    Else {
      move_${s} := ++move__nth

      ;triple clicks
      If speed_move {
        x *= x_triple
        y *= y_triple
      }

      SetTimer(move_${s}_timer, A_MouseDelay)
    }
  }

  move_${s}_timer() {
    global

    If GetKeyState("${s}","P") && (layer_ext || GetKeyState("${t}","P")) {
      if (move_${s} != move__nth)
        return

      ;double clicks
      if speed_move && x <= x_max {
        x *= x_double
        y *= y_double
      }

      If !GetKeyState("${d(s)?e:o}","P") && !GetKeyState("${d(s)?n:r}","P")
        MouseMove(${w(s)},, 'R')
      else if GetKeyState("${d(s)?e:o}","P")
        MouseMove(${w(s,1)},, 'R')
      else if GetKeyState("${d(s)?n:r}","P")
        MouseMove(${w(s,2)},, 'R')

      return
    }

    if !GetKeyState("${d(s)?e:o}","P") && !GetKeyState("${d(s)?n:r}","P") && !GetKeyState("${m(s)}","P") {
      resetSpeed()
      speed_move := 0
      move__nth := 0
    } Else if (move_${s} = 1) {
      move__nth--
      if move_${d(s)?e:o} > 1
        move_${d(s)?e:o}--
      if move_${d(s)?n:r} > 1
        move_${d(s)?n:r}--
      if move_${m(s)} > 1
        move_${m(s)}--
    } Else if (move_${s} = 2) {
      move__nth--
      if move_${d(s)?e:o} > 2
        move_${d(s)?e:o}--
      if move_${d(s)?n:r} > 2
        move_${d(s)?n:r}--
      if move_${m(s)} > 2
        move_${m(s)}--
    }

    move_${s} := 0
    SetTimer( , 0)
  }

  speed_${s}_timer() {
    global
    if press_${s} = 2
      speed_move := 1
    press_${s} := 0
  }
`;function d(u){return u==o||u==r}function m(u){switch(u){case o:return r;case r:return o;case n:return e;case e:return n}}function w(u,E=0){if(E){if(E==1)switch(u){case e:case o:return"-x, -y";case r:return"x, -y";case n:return"-x, y"}else if(E==2)switch(u){case e:return"x, -y";case r:case n:return"x, y";case o:return"-x, y"}}else switch(u){case e:return"0, -y";case r:return"x, 0";case n:return"0, y";case o:return"-x, 0"}}}}const f=i.standard.map(t=>t==";"?"`;":t);let J,j,q,D;const Q=`${p.intro}
;config layers \u2699\uFE0F\u2699\uFE0F\u2699\uFE0F\u2699\uFE0F\u2699\uFE0F\u2699\uFE0F\u2699\uFE0F\u2699\uFE0F\u2699\uFE0F\u2699\uFE0F\u2699\uFE0F\u2699\uFE0F\u2699\uFE0F\u2699\uFE0F
${p.switchers}


;extend layer \u{1F31F} \u{1F31F} \u{1F31F} \u{1F31F} \u{1F31F} \u{1F31F} \u{1F31F} \u{1F31F} \u{1F31F} \u{1F31F}
#HotIf ${p.layer_condition.ext}
${A()}#HotIf


;extend2 layer \u{1F31F}\u{1F31F} \u{1F31F}\u{1F31F} \u{1F31F}\u{1F31F} \u{1F31F}\u{1F31F} \u{1F31F}\u{1F31F} \u{1F31F}\u{1F31F}
#HotIf ${p.layer_condition.ext2}
${A("ext2Htk")}#HotIf


;symbol layer \u{1F4B2}  \u{1F4B2}  \u{1F4B2}  \u{1F4B2}  \u{1F4B2}  \u{1F4B2}  \u{1F4B2}  \u{1F4B2}  \u{1F4B2}
#HotIf ${p.layer_condition.sym}
${_e()}#HotIf


;symbol1 layer \u21E7\u{1F4B2} \u21E7\u{1F4B2} \u21E7\u{1F4B2} \u21E7\u{1F4B2} \u21E7\u{1F4B2} \u21E7\u{1F4B2} \u21E7\u{1F4B2} \u21E7\u{1F4B2} \u21E7\u{1F4B2}
#HotIf ${p.layer_condition.sym1}
${be()}#HotIf


;symbol2 layer \u{1F4B2}\u{1F4B2} \u{1F4B2}\u{1F4B2} \u{1F4B2}\u{1F4B2} \u{1F4B2}\u{1F4B2} \u{1F4B2}\u{1F4B2} \u{1F4B2}\u{1F4B2} \u{1F4B2}\u{1F4B2} \u{1F4B2}\u{1F4B2}
#HotIf ${p.layer_condition.sym2}
${ge()}#HotIf


;mouse in extend layer \u{1F31F}\u29BA \u{1F31F}\u29BA \u{1F31F}\u29BA \u{1F31F}\u29BA \u{1F31F}\u29BA \u{1F31F}\u29BA \u{1F31F}\u29BA \u{1F31F}\u29BA
#HotIf ${p.layer_condition.ext}
${z.getHover(p.extKey,q,j,D,J)}
${z.getWheel(p.extKey,"q","wheelUp")}
${z.getWheel(p.extKey,"a","wheelDown")}#HotIf`;function A(t=0){let e="";return i[t?"ext2Htk":"extHtk"].forEach((r,n)=>{if(r!=".")switch(r){case"LButton":case"RButton":case"MButton":case"XButton1":case"XButton2":e+=`	${f[n]}::${r}
`;break;case"Capslock":e+=`	${f[n]}:: {
    SetCapsLockState !GetKeyState("CapsLock","T")
	}
`;break;case"mouseL":J=f[n];break;case"mouseR":j=f[n];break;case"mouseU":q=f[n];break;case"mouseD":D=f[n];break;case"brightnessUp":e+=`	${f[n]}:: {
	global
    ${I(1)}
	}
`;break;case"brightnessDown":e+=`	${f[n]}:: {
	global
    ${I()}
	}
`;break;case"speed":e+=`	${f[n]}:: {
    global
		speed_switcher := !speed_switcher
		resetSpeed()
	}
`;break;default:if(r.includes("mouse")||r.includes("Wheel"))return;e+=`	${f[n]}::${r}
`}}),e}function _e(){let t="";return i.sym.forEach((e,r)=>{e!="."&&(t+=`	${f[r]}::`,t+=+e||"0`\\/=[]".includes(e)?`${e}
`:O(e))}),t}function ge(){let t="";return i.sym2.forEach((e,r)=>{e!="."&&(t+=`	${f[r]}::`,t+=e.startsWith("F")||e.startsWith("^")?`${e}
`:O(e))}),t}function be(){let t="";return i.symShift.forEach((e,r)=>{e!="."&&(t+=`	${f[r]}::${O(e)}`)}),t}function xe(t){switch(t){case"\u26A0\uFE0F":return"U+26a0}{U+fe0f";default:return`U+${t.codePointAt(0).toString(16)}`}}function I(t=0){return t?"ChangeBrightness(CurrentBrightness < 100 - brightnessJump ? CurrentBrightness += brightnessJump : 100)":"ChangeBrightness(CurrentBrightness > brightnessJump ? CurrentBrightness -= brightnessJump : 0)"}function O(t){return t<="~"?` {
		SendText '${t}'
	}
`:` {
		Send '{${xe(t)}}'
	}
`}function L(t){return new Promise(e=>setTimeout(e,t))}const G=document.createElement("div");G.id="ahkCtx";const X=document.createElement("ol");G.append(X);const ye=Q.split(`
`).map(t=>{const e=document.createElement("li");return e.textContent=t,e});X.append(...ye);const y=document.createElement("button");y.id="copyBtn";y.textContent="copy";G.append(y);const g=document.createElement("span");y.prepend(g);let B;y.addEventListener("click",async()=>{await navigator.clipboard.writeText(Q),!B&&(B=!0,g.textContent="copied \u2713",g.style.opacity=1,await L(1500),g.style.opacity=0,await L(500),g.textContent="",B=!1)},{once:!1});const H=document.createElement("main");document.body.append(H);const T=document.createElement("div");T.id="kbdCtx";T.append(K,M);H.append(T,G);k(H);ue();ne();console.log("\u{1F4A1}\u{1F4A1}done\u{1F4A1}\u{1F4A1}");
