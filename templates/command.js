/**
 *  This is a sample for command modules in /home/utopium/wwou-staff/commands/*.js
**/

const Discord = require('discord.js'),
      db = require('quick.db'),
      moment = require('moment')

const config = require('/home/utopium/wwou-staff/util/config'),
      fn = require('/home/utopium/wwou-staff/util/fn')

const userData = new db.table("USERDATA"),
      guildData = new db.table("GUILDDATA"),
      modCases = new db.table("MODCASES")

module.exports = {
  name: "command",
  usage: "command <req args> [opt args]",
  description: "A Sample Command.",
  aliases: ["cmd"],                                // optional
  category: "Utility",
  guildPerms: ["BAN_MEMBERS", "KICK_MEMBERS"],     // optional, array of Discord.PermissionResolvable | Used when command is limited to Discord.GuildMember with these permissions
  botStaffOnly: true,                              // required for true, optional for false | Used when command is limited to bot staff or command is work in progress
  run: async (client, message, args, shared) => {
    // ...
    // command code
    // ...
    
    return;
  }
}