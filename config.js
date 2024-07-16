//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Islamabad,Pakistan";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://taha16511:4uPo1wMZxKzrqobP@cluster0.dvlwfxx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "923103443197";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "923103443197";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUJHZ2xYR2ZSL0QvbmcxWEdnenJzbjZkcFJteXhzblZZcUozY0wvb1lFaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVWJ6NFhFYW5TY3JKd2xwZXJzOGlLUlc4V1pOMnRqMXpHUjUvS3diaHhscz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyRU1ZTHJ1UVROZnhtUUNjdkExTWQ0SVNSeGlNMHp6UVNiMHcydVpET21BPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjWi9yZ0pqbUpkTU1pZnViU2VVK1RmbG5YNy92RUVkRjZOZUhKMXlXc0h3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJNd3NFdTQ5Z25yNUhRR0JJdkpWZklVcEtqY3dHSzlSSGhUMktkejhIMHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZZbUxSbGZQOXRDdkdZVzhxdFZjRldyMDFVWXd2OHBkWTBQYy94UHg3bkE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV05oMzZkeEsrK0laTmFTNTJkRU1talhRZTJuQnBaZDdSOFpCSDJsYmtuYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSXE0c1Qyc3V5WXduTDR6aXNlRnVJeUpMUlJOanBVUjNDSCtpZlMrVnZ6OD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFzT3FFclpRaTVmbmZJSmdGdy90ckVlbisvbTVUSG1DblZWU1ZaR05pOThzcDV2T1dlS3RBZUdYcnF6RmhneWd6b3Q4OGFUa3dtaUJYVk10Tm9Zd0FRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM1LCJhZHZTZWNyZXRLZXkiOiJFUlVma05qMUJwaDgrQ3hOVUttamVXdkRGSmRDbzJOKzdITVRlWmRzMVBBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzEwMzQ0MzE5N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI2ODQ3QTIzNDUwQURGRkFGMUZGQUMyNDM2NzNCQTNBQyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIxMTE0NzE4fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJfYVphRDA4bFN2UzdGd0llUWZCWjJnIiwicGhvbmVJZCI6Ijk1M2Q3MTJkLWI2MDItNGE2ZC04OGNlLWJjMWJmMWNjYjRmMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMakJ1MmZONmQxQjIxbitTTU9udzdWODZZd1k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidzErRlVEZm8xMWs2L1ZKd3dJLzEwZnNHbWdNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik1BR0tQUUVBIiwibWUiOnsiaWQiOiI5MjMxMDM0NDMxOTc6MTNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiLiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSzNqa3JNQ0VNdkEyTFFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZnFpbTIrdDJxWVl4dnJzcTRscVhQZUFVYXVMZ3h5M0QvZ2lreFd5OVUzYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRDNaTzJjbDdBNGxZaFZELzB1azhjVmVmK2wveUF5d0wxL0dSMnYzV2NpOUhWNHBzL2tKZWJEY3pEejVTQndXTi94aDNuOFZHMHFmK2RBRGJrQW9nRHc9PSIsImRldmljZVNpZ25hdHVyZSI6IndpN1VKdWhHeXhlYWQzTDdUZUMwbExxa2FGM2gybHVva1dLMG9qaUp5UTJ1Z0Y3akR2dFd2eVVkaEE1RUVoUFM5K09pc1lybTRlNTVrLzhlMlR1NUJ3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMTAzNDQzMTk3OjEzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlg2b3B0dnJkcW1HTWI2N0t1SmFsejNnRkdyaTRNY3R3LzRJcE1Wc3ZWTjMifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjExMTQ3MTQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTkRZIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
