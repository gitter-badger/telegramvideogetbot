[![GitHub issues](https://img.shields.io/github/issues/nuxdie/telegramvideogetbot.svg)](https://github.com/nuxdie/telegramvideogetbot/issues)
[![GitHub forks](https://img.shields.io/github/forks/nuxdie/telegramvideogetbot.svg)](https://github.com/nuxdie/telegramvideogetbot/network)
[![GitHub stars](https://img.shields.io/github/stars/nuxdie/telegramvideogetbot.svg)](https://github.com/nuxdie/telegramvideogetbot/stargazers)
[![GitHub license](https://img.shields.io/github/license/nuxdie/telegramvideogetbot.svg)](https://github.com/nuxdie/telegramvideogetbot/blob/master/LICENSE)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/nuxdie/telegramvideogetbot.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fnuxdie%2Ftelegramvideogetbot)

<p align="center"><img width="261" alt="noun_1138482_cc" src="https://user-images.githubusercontent.com/3918844/39073793-4f72a4a8-44ef-11e8-8b7e-f9c14dd45542.png"></p>

# Video_note download link bot for Telegram
Bot that drops the link to the media from telegram

### Screenshot with sample bot workflow
<img width="461" alt="screen shot 2018-04-20 at 9 51 38 pm" src="https://user-images.githubusercontent.com/3918844/39071440-626f77d2-44e7-11e8-8f5e-76f585e0bcf8.png">

## How to run Docker version
You can find the prebuilt Docker image here: [nuxdie/telegramvideogetbot](https://hub.docker.com/r/nuxdie/telegramvideogetbot/). It's ready to run like this:
```bash
docker run -e BOT_TOKEN=<your-telegram-bot-token-here> nuxdie/telegramvideogetbot:latest
```

## How to run Node.js version
First clone this project or fork and then run:
```bash
npm install
BOT_TOKEN=<your-telegram-bot-token-here> npm start
```

## How to contribute to the project
See [CONTRIBUTING.md](CONTRIBUTING.md) for info on how you can contribute
to the project.
