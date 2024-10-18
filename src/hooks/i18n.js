import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import {initReactI18next, Translation} from 'react-i18next'
i18n.use(LanguageDetector).use(initReactI18next).init({
  debug: true,
  lng: "en",
  resources: {
    en:{
      translation:{
        aboutH2: 'About me',
        p1: 'Non atque optio minus reiciendis voluptas quia suscipit.',
        p2: 'Consectetur ipsa tenetur occaecati illum. Sunt voluptas in ut at iste. Dolores aut magnam aut. Quaerat magnam maxime reprehenderit.',
        p3: 'Qui natus aut nihil nihil minus reprehenderit. Quas quos possimus voluptatum eos vero distinctio eos. Est ab sint et et quo sapiente. Dolore modi voluptate earum maxime nam velit molestias corrupti.',
        p4: 'Sunt explicabo soluta nisi delectus. Ducimus dicta itaque vero doloribus est tempore accusamus voluptas. Nam quo at autem earum debitis eum vitae. Illum tempora quis eius sint. Quia consequatur consequuntur architecto optio adipisci alias veniam. Et sunt ipsa qui alias aspernatur qui. Et vero velit vel et consequatur. Est aliquid et incidunt facilis possimus itaque porro dolor. Molestias nihil est nostrum doloremque voluptas. Magnam animi et magnam unde illo qui sit. Quia sit alias eum.',
      }
    },
    ru:{
      translation:{
        aboutH2: 'Про меня',
        p1: 'Давненько не отдам. Такой славный народ, всё сам-самородок.',
        p2: 'Был с лучком, припекой с равным вниманием; если бы а за куш пятьдесят? Лучше ж пенька? Помилуйте, я опрокинул, — играть! Этак не опрокину.',
        p3: 'И пробовать не покосились, а только одно маленькое, вероятно молодого щенка, и не — подхватила помещица. — была дама: «Пошла, старая попадья!», если случай мне. Щи, моя душа, смерть',
        p4: 'Таких людей — В тюрьме колодники лучше сказать числом? Ведь что они влетели вовсе не в галстук, присев и кузница! — Мне не заставишь перед собою и балыков навезли — Щи, моя душа, смерть люблю тебя! Мижуев, смотри, говорю, что оно держится против того, что ли?» Селифан почувствовал свою голову, приготовляясь слышать, в город. Потом пошли осматривать крымскую суку, которая была совершенно прямым, барабанил прямо на голове не говорил:',
      }
    }
  }
})