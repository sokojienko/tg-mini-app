import { Telegraf, Markup } from "telegraf";
import { message } from "telegraf/filters";

const token = "6989214410:AAEminh_1WoYQoDPS_6pxCMViAJ-VuyQjr4";

const bot = new Telegraf(token);
const webAppUrl = "https://angular-tel-mini-app.web.app";
const feedbackUrl = "/feedback";

bot.command("start", (ctx) => {
  ctx.reply(
    "Добро пожаловать в бот, нажмите кнопку ниже, чтобы запустить приложение!",
    Markup.keyboard([
      Markup.button.webApp("Open App", webAppUrl),
      Markup.button.webApp("Feedback", webAppUrl + feedbackUrl),
    ])
  );
});

bot.on(message("web_app_data"), async (ctx) => {
  const data = ctx.webAppData.data.json();
  ctx.reply(`Ваше сообщение: ${data?.feedback}` ?? "empty");
});

bot.launch();
