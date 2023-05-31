const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

// inside a command, event listener, etc.
const exampleEmbed = new EmbedBuilder()
  .setColor("#8a2be2")
  .setTitle("Principais Comandos do Git")
  .setURL(
    "https://www.freecodecamp.org/portuguese/news/10-comandos-do-git-que-todo-desenvolvedor-deveria-conhecer/"
  )
  .setAuthor({
    name: "Inazuma Recorder",
    iconURL:
      "https://64.media.tumblr.com/cacf8c09953b6fa34f1aff8ebf756af8/348e8452b2aac5f1-83/s400x600/b2d6da5bd32f8d4058797398a3c61ceb151c57cb.png",
    url: "https://discord.js.org",
  })
  .setDescription(
    "Um bot que vai te ajudar a não esquecer os principais comando usados no Git."
  )
  .setThumbnail(
    "https://static.wikia.nocookie.net/genshin-impact/images/7/7f/Emblema_Inazuma.png/revision/latest?cb=20210610232229&path-prefix=pt-br"
  )
  .addFields(
    { name: "Comandos:", value: "\u200B" },
    {
      name: "$ git clone",
      value:
        "Git clone é uma comando para baixar o código-fonte existente de um repositório remoto (como, por exemplo, o Github).",
    },
    {
      name: "$ git branch",
      value:
        "Podemos usar o comando git branch para criar, listar e excluir as branches.",
    },
    {
      name: "$ git checkout",
      value:
        "Usamos git checkout, na maioria dos casos, para trocar de uma branch para outra. Também podemos usar o comando para fazer o checkout de arquivos e commits.",
    },
    {
      name: "$ git status",
      value:
        "O comando git status nos dá todas as informações necessárias sobre a branch atual.",
    },
    {
      name: "$ git add .",
      value:
        "Precisamos usar o comando git add para incluir as alterações de um ou vários arquivos em nosso próximo commit. (no caso o 'git add .' inclui todas as alterações feitas.",
    },
    {
      name: "$ git commit",
      value:
        "Quando chegamos a determinado ponto em desenvolvimento, queremos salvar nossas alterações (talvez após uma tarefa ou resolução de problema específica). Git commit é como definir um ponto de verificação no processo de desenvolvimento. Você pode voltar a esse ponto mais tarde, se necessário. Também precisamos escrever uma mensagem breve para explicar o que desenvolvemos ou alteramos no código-fonte.",
    },
    {
      name: "$ git push",
      value:
        "Após fazer o commit de suas alterações, a próxima coisa a fazer é enviar suas alterações ao servidor remoto. Git push faz o upload dos seus commits no repositório remoto.",
    },
    {
      name: "$ git pull",
      value:
        "O comando git pull é usado para obter as atualizações de um repositório remoto. Esse comando é uma combinação de git fetch e git merge, o que significa que, quando usamos git pull, ele recebe as atualizações do repositório remoto (git fetch) e aplica imediatamente as alterações mais recentes em seu espaço de trabalho local (git merge).",
    },
    {
      name: "$ git revert",
      value:
        "Às vezes, precisamos desfazer as alterações que fizemos. Existem várias maneiras de se desfazer as alterações em nosso espaço de trabalho local ou remotamente (dependendo do que você necessita), mas devemos usar esses comandos com cuidado para evitar exclusões indesejadas. Uma maneira segura de desfazer nossos commits é usando git revert. Para ver nosso histórico de commits, primeiro, precisamos usar git log -- oneline.",
    },
    {
      name: "$ git merge",
      value:
        "Quando você concluir o desenvolvimento em sua branch e quando tudo funcionar bem, a etapa final é fazer o merge (mesclar ou unir, em português) da branch com a branch pai (dev ou master/main, em geral). Isso é feito com o comando git merge. Git merge, basicamente, integra sua branch com o recurso e todos os seus commits na branch de desenvolvimento (dev) ou na branch principal (master ou main). É importante lembrar que, primeiro, você precisa estar na branch específica na qual você quer fazer o merge de sua branch com o recurso.",
    }
  )
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
    .setName("git")
    .setDescription("Relembrar comandos do Git"),

  async execute(interaction) {
    await interaction.reply({ embeds: [exampleEmbed] });
  },
};
