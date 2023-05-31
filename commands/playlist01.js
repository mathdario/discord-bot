const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

const exampleEmbed = new EmbedBuilder()
  .setColor("#8a2be2")
  .setAuthor({
    name: "Inazuma Recorder",
    iconURL:
      "https://64.media.tumblr.com/cacf8c09953b6fa34f1aff8ebf756af8/348e8452b2aac5f1-83/s400x600/b2d6da5bd32f8d4058797398a3c61ceb151c57cb.png",
    url: "https://discord.js.org",
  })
  .setThumbnail(
    "https://static.wikia.nocookie.net/genshin-impact/images/7/7f/Emblema_Inazuma.png/revision/latest?cb=20210610232229&path-prefix=pt-br"
  )
  .addFields({
    name: "Playlist:",
    value:
      "https://open.spotify.com/playlist/5TUxgTIxzLbLVh7RUf9V8i?si=d79ad3b1a72840b6",
  })
  .setImage(
    "https://www.pockettactics.com/wp-content/sites/pockettactics/2022/10/genshin-impact-yae-miko.jpg"
  )
  .setTimestamp()
  .setFooter({
    text: "Editora Yae",
    iconURL:
      "https://img-os-static.hoyolab.com/communityWeb/upload/6af7780d02f256144d6423bdee348d58.png",
  });

module.exports = {
  data: new SlashCommandBuilder()
    .setName("playlist01")
    .setDescription("Melhor playlist de estudos [Rock]"),

  async execute(interaction) {
    await interaction.reply({ embeds: [exampleEmbed] });
  },
};
