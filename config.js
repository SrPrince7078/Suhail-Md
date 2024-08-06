const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923258531970";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_23_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDY3LFxuICAgICAgICA1OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTksXG4gICAgICAgIDk1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDk4LFxuICAgICAgICA3MixcbiAgICAgICAgMjExLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjIwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTgzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTUwLFxuICAgICAgICA3MCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgNDEsXG4gICAgICAgIDAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTgyLFxuICAgICAgICA1NixcbiAgICAgICAgNDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTczLFxuICAgICAgICA5NixcbiAgICAgICAgMTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgODAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjMxLFxuICAgICAgICAzMixcbiAgICAgICAgMzIsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTksXG4gICAgICAgIDE2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2LFxuICAgICAgICA0NixcbiAgICAgICAgMjUwLFxuICAgICAgICA3NixcbiAgICAgICAgMTU3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgNTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjIxLFxuICAgICAgICA4NixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDExLFxuICAgICAgICAxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjMyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDUzLFxuICAgICAgICAzNixcbiAgICAgICAgMTY4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTAxLFxuICAgICAgICA3MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDksXG4gICAgICAgIDM0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTg2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDc3LFxuICAgICAgICAxMixcbiAgICAgICAgODcsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDg4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzksXG4gICAgICAgIDMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTEzLFxuICAgICAgICA1MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTA2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjI2LFxuICAgICAgICA1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzIsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDksXG4gICAgICAgIDgsXG4gICAgICAgIDc4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDUsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI3KzFIMG9qaDVtckhOZjJYZytwS3p5cEw4dkFUbjlCYkZobi9PVUV5WG9vPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJiSjlrWnVxSlNhNlZHSENjTENQNjBRXCIsXG4gIFwicGhvbmVJZFwiOiBcImUyMDA4ZWQwLThlMDgtNDNkYS1hNTAwLTUzMDdhNjBlM2RkMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDksXG4gICAgICAxNTYsXG4gICAgICAxNjksXG4gICAgICAyMzgsXG4gICAgICA0NCxcbiAgICAgIDEwNyxcbiAgICAgIDExOCxcbiAgICAgIDUyLFxuICAgICAgMTA5LFxuICAgICAgMTA2LFxuICAgICAgNjQsXG4gICAgICA1NCxcbiAgICAgIDIyMSxcbiAgICAgIDMsXG4gICAgICAxMTAsXG4gICAgICA5NyxcbiAgICAgIDE1MCxcbiAgICAgIDIwOSxcbiAgICAgIDE3MSxcbiAgICAgIDUxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNixcbiAgICAgIDE5NixcbiAgICAgIDEyMSxcbiAgICAgIDE5NixcbiAgICAgIDIzNyxcbiAgICAgIDE5OCxcbiAgICAgIDE1NyxcbiAgICAgIDExMCxcbiAgICAgIDMyLFxuICAgICAgNDgsXG4gICAgICAyMzEsXG4gICAgICAxMDgsXG4gICAgICA0NCxcbiAgICAgIDYwLFxuICAgICAgMTIwLFxuICAgICAgMTMwLFxuICAgICAgMTA4LFxuICAgICAgMjExLFxuICAgICAgMTk5LFxuICAgICAgMTY5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk4zQ1hKUTNBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNTg1MzE5NzA6NjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjExNDAyNzMwNDg4MjM1OTo2MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNdXdzN0lDRUltUHlMVUdHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlc1ZUNZM1VmbU80Rko3UUlLeFYxV2lZNlE2SnpJdDZRbUNxWklHYXBkeWs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUjY1VTR5cmxYbzBtclUwMjU4dG9Ob2Nqa3VDWnkwTjltK3lua0wzLzJZdFJGZkFTRlc3cnZwMDFHUmpxZFpaVWM3UUVKNjQ4RDY5aXh4aEd1ZytFREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQWFhMUg1OWhJWVBkMTVndmprbHZFU3JubjBhRVg2QVVVejlNTzdETGo4S3hDNDBnYU1vT3N4ZmlPbHQ5L3hIVmRqTGZEbkU2MW9uenpCOHhqU3BiaEE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjU4NTMxOTcwOjYwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA0MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyOTQzMzcyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSXFCXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJcUIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJQaG1JT011N0ZQRmRucW92SWo3U0pjSDdrcENMb3dEcWgxZnpOaEpHcnVVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY0MjU3MDMxNSxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyOTQzMzMxMjg1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ƤƦƖƝƇЄ",
  ownername:process.env.OWNER_NAME|| "ƤƦƖƝƇЄ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "ƤƦƖƝƇЄ"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
