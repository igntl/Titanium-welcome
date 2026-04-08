import { Client, GatewayIntentBits, EmbedBuilder } from 'discord.js';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ]
});

client.on('ready', () => {
  console.log(`🤖 ${client.user.tag} شغال`);
});

client.on('guildMemberAdd', async (member) => {

  const channel = member.guild.channels.cache.get("1483219896069525665");

  if (!channel) return;

  const embed = new EmbedBuilder()
    .setColor("#348017")
    .setDescription(`Welcome to server TITANIUM 

${member}

  نورت السيرفر وشرفتنا بانضمامك
.هنا نعيش جو من المتعة، التفاعل، والإبداع والكل مرحّب فيه
.تأكد إنك تطّلع على القوانين أول، واحرص تكون مشاركتك إيجابية ومحترمة 🤍`)
    .setImage("https://files.catbox.moe/8lrw05.png");

  const role = member.guild.roles.cache.get("1483258920653947093");
  if (role) {
    member.roles.add(role).catch(() => {});
  }

  channel.send({
    embeds: [embed]
  });

});

client.login(process.env.TOKEN);
