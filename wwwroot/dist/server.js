!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t){e.exports=require("express-msteams-host")},function(e,t){e.exports=require("debug")},function(e,t){e.exports=require("botbuilder-dialogs")},function(e,t){e.exports=require("botbuilder")},function(e,t,n){e.exports=n(5)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(6),i=n(7),r=n(8),s=n(9),a=n(0),c=n(1),u=n(10),d=n(11),l=c("msteams");l("Initializing Microsoft Teams Express hosted App..."),n(12).config(),d.setup(process.env.APPINSIGHTS_INSTRUMENTATIONKEY).start();const p=n(13),f=o(),v=process.env.port||process.env.PORT||3007;f.use(o.json({verify:(e,t,n,o)=>{e.rawBody=n.toString()}})),f.use(o.urlencoded({extended:!0})),f.set("views",r.join(__dirname,"/")),f.use(s("tiny")),f.use(u()),f.use("/scripts",o.static(r.join(__dirname,"web/scripts"))),f.use("/assets",o.static(r.join(__dirname,"web/assets"))),f.use(a.MsTeamsApiRouter(p)),f.use(a.MsTeamsPageRouter({root:r.join(__dirname,"web/"),components:p})),f.use("/",o.static(r.join(__dirname,"web/"),{index:"index.html"})),f.set("port",v),i.createServer(f).listen(v,()=>{l("Server running on "+v)})},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("http")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("morgan")},function(e,t){e.exports=require("compression")},function(e,t){e.exports=require("applicationinsights")},function(e,t){e.exports=require("dotenv")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.nonce={},function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(14))},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s},i=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function s(e){try{c(o.next(e))}catch(e){r(e)}}function a(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){e.done?i(e.value):new n((function(t){t(e.value)})).then(s,a)}c((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const r=n(0),s=n(1),a=n(2),c=n(3),u=n(15),d=n(16),l=n(17);s("msteams");let p=class extends c.TeamsActivityHandler{constructor(e){super(),this._botv4MessageExtension=new d.default,this.conversationState=e,this.dialogState=e.createProperty("dialogState"),this.dialogs=new a.DialogSet(this.dialogState),this.dialogs.add(new u.default("help")),this.onMessage(e=>i(this,void 0,void 0,(function*(){switch(e.activity.type){case c.ActivityTypes.Message:let t=c.TurnContext.removeRecipientMention(e.activity);if(t=t.toLowerCase(),t.startsWith("hello")){const t=c.CardFactory.adaptiveCard(l.default);yield e.sendActivity({attachments:[t]})}else if(t.startsWith("help")){const t=yield this.dialogs.createContext(e);yield t.beginDialog("help")}else yield e.sendActivity("I'm terribly sorry, but my master hasn't trained me to do anything yet...")}return this.conversationState.saveChanges(e)}))),this.onConversationUpdate(e=>i(this,void 0,void 0,(function*(){if(e.activity.membersAdded&&0!==e.activity.membersAdded.length)for(const t in e.activity.membersAdded)if(e.activity.membersAdded[t].id===e.activity.recipient.id){const t=c.CardFactory.adaptiveCard(l.default);yield e.sendActivity({attachments:[t]})}}))),this.onMessageReaction(e=>i(this,void 0,void 0,(function*(){const t=e.activity.reactionsAdded;t&&t[0]&&(yield e.sendActivity({textFormat:"xml",text:`That was an interesting reaction (<b>${t[0].type}</b>)`}))})))}teamsCreateConversation(e,t,n){return i(this,void 0,void 0,(function*(){const o={isGroup:!0,channelData:{channel:{id:t}},activity:n},i=e.adapter.createConnectorClient(e.activity.serviceUrl),r=yield i.conversations.createConversation(o);return[c.TurnContext.getConversationReference(e.activity),r.activityId]}))}};o([r.MessageExtensionDeclaration("botv4MessageExtension")],p.prototype,"_botv4MessageExtension",void 0),p=o([r.BotDeclaration("/api/messages",new c.MemoryStorage,process.env.MICROSOFT_APP_ID,process.env.MICROSOFT_APP_PASSWORD),r.PreventIframe("/botv4Bot/aboutBotv4Bot.html")],p),t.Botv4Bot=p},function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function s(e){try{c(o.next(e))}catch(e){r(e)}}function a(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){e.done?i(e.value):new n((function(t){t(e.value)})).then(s,a)}c((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const i=n(2);class r extends i.Dialog{constructor(e){super(e)}beginDialog(e,t){return o(this,void 0,void 0,(function*(){return e.context.sendActivity("I'm just a friendly but rather stupid bot, and right now I don't have any valuable help for you!"),yield e.endDialog()}))}}t.default=r},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s},i=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function s(e){try{c(o.next(e))}catch(e){r(e)}}function a(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){e.done?i(e.value):new n((function(t){t(e.value)})).then(s,a)}c((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const r=n(1),s=n(0),a=n(3),c=r("msteams");let u=class{onFetchTask(e,t){return i(this,void 0,void 0,(function*(){return Promise.resolve({type:"continue",value:{title:"Input form",url:`https://${process.env.HOSTNAME}/botv4MessageExtension/action.html?name={loginHint}&tenant={tid}&group={groupId}&theme={theme}`,height:"medium"}})}))}onSubmitAction(e,t){return i(this,void 0,void 0,(function*(){const e=a.CardFactory.adaptiveCard({type:"AdaptiveCard",body:[{type:"TextBlock",size:"Large",text:t.data.email},{type:"Image",url:`https://randomuser.me/api/portraits/thumb/women/${Math.round(100*Math.random())}.jpg`}],$schema:"http://adaptivecards.io/schemas/adaptive-card.json",version:"1.2"});return Promise.resolve({type:"result",attachmentLayout:"list",attachments:[e]})}))}onQuerySettingsUrl(e){return i(this,void 0,void 0,(function*(){return Promise.resolve({title:"botv4 Message Extension Configuration",value:`https://${process.env.HOSTNAME}/botv4MessageExtension/config.html?name={loginHint}&tenant={tid}&group={groupId}&theme={theme}`})}))}onSettings(e){return i(this,void 0,void 0,(function*(){const t=e.activity.value.state;return c("New setting: "+t),Promise.resolve()}))}};u=o([s.PreventIframe("/botv4MessageExtension/config.html"),s.PreventIframe("/botv4MessageExtension/action.html")],u),t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(18);t.default=o},function(e){e.exports={$schema:"http://adaptivecards.io/schemas/adaptive-card.json",type:"AdaptiveCard",version:"1.2",body:[{type:"TextBlock",spacing:"medium",size:"default",weight:"bolder",text:"Welcome to botv4",wrap:!0,maxLines:0},{type:"TextBlock",size:"default",isSubtle:!0,text:"Hello, nice to meet you!",wrap:!0,maxLines:0}],actions:[{type:"Action.OpenUrl",title:"Learn more about Yo Teams",url:"https://aka.ms/yoteams"},{type:"Action.OpenUrl",title:"botv4",url:"https://botv4.azurewebsites.net"}]}}]);
//# sourceMappingURL=server.js.map