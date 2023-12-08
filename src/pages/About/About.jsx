import { useEffect } from 'react';
import cn from 'classnames/bind';

import { MainWrapper } from '../../components/MainWrapper/MainWrapper';
import { TextBlock } from '../../components/TextBlock/TextBlock';
import { LinkWrapper } from '../../components/LinkWrapper/LinkWrapper';
import { getStore } from '../../utils/getStore';
import { scrollToTop } from '../../utils/scrollToTop';

import { ROUTES } from '../../constants';
import styles from './styles.module.css';

const cx = cn.bind(styles);

const DESCRIPTION = {
  first: [
    'Ясный ум, чуткое сердце, легкость движения, а самое главное - мир и спокойствие внутри, благодаря которым тело, дух и разум соединяются в гармоничное целое - вот, пожалуй, краткое описание наших устремлений. К этим целям ведет множество путей, и каждый может найти что-то свое. Мы щедро делимся знаниями и методиками, всегда рады учиться новому.',
    'Мы активно исследуем традицию Хуньюань Тайцзицюань, основанную Учителем Фэн Чжицяном, это наша базовая практика. В ней бережно и эффективно соединяются движение, внимание и дыхание. Организм задействуется на разных уровнях, благодаря этому эффект от занятий глубокий, мощный и долговременный. В разные годы нам посчастливилось заниматься у Фэн Чжицяна, Пань Хоучэна и Чжан Юфэя. С 2013 года мы развиваем направление, которое представляет Чэнь Сян, прямой ученик Фэна и наставник Борисовой Наташи. Каждый год мы встречаемся в Поднебесной и учимся чему-то новому.',
  ],
  second: [
    'Прекрасным дополнением к практике Хуньюань Тайцзицюань стало близкое знакомство с Остеопатией (Биодинамическое направление) и Дзогчен (Чогьял Намкай Норбу). Остеопатия учит смирению, внутренней тишине, спокойствию и доверию естественным силам Природы. Дзогчен открывает широкий спектр методов для самонаблюдения, направляя к обнаружению изначального состояния, истинной природы ума. Многие аспекты этих двух учений так или иначе проявляются на наших занятиях.',
  ],
};

const CIGUN = {
  title: 'Цигун и Нэйгун',
  first: [
    'Цигун (气功 qìgōng) сформировался в современном виде полвека назад, и сейчас известен в основном как китайская оздоровительная гимнастика. В старых традиционных школах можно встретить названия Яншэн, Даоинь, Туна, Ляндань и т.д. Все это разные имена для методов самосовершенствования и саморегуляции.',
    'На нашем сайте Вы чаще встретите термин Нэйгун (内功 nèigōng). Это напоминание о том,что внешнее движение - лишь форма, заметная глазу стороннего наблюдателя, а то, что мы делаем внутри самих себя - важнее. Именно внутренняя работа сознания даёт мощный импульс для развития и глубинных изменений в человеке.',
  ],
  second: [
    'Практика Нэйгун позволяет укрепить тело, очистить и прояснить ум, уравновесить психо-эмоциональные проявления. Это отражается на самочувствии, настроении и творческом потенциале человека. Нэйгун формирует культуру здорового движения, помогает освоить полезные привычки, учит не бороться с болезнями, а правильно укреплять и взращивать здоровье.',
    'Нэйгун и Цигун могут стать верными спутниками и помощниками в любых обстоятельствах. Мы сами выбираем, чем заняться в отведенное судьбой время, и сами выстраиваем качество своей жизни.',
  ],
};

const TAICHI = {
  title: 'Тайцзи и Тайцзицюань',
  first: [
    'Тайцзи (太极 tàijí) - универсальный принцип баланса и взаимодействия всего живого на планете. Тайцзицюань (太极拳 tàijíquán) - кулачное искусство, основанное на этом принципе. Когда мы занимаемся тайцзицюань, то постигаем не только мягкое, но и жесткое, мы учимся применять принцип Тайцзи и в «гражданских» науках, и в «военных». Фэн Чжицян учил, что в первую очередь мы заботимся о восстановлении своего здоровья, но всегда помним также о тренировке навыков самозащиты.',
    'Практика тайцзицюань позволяет совершенствовать тело и дух, внешнее и внутреннее, укреплять и развивать себя во многих аспектах от простых двигательных навыков до тончайших способов сосредоточения ума. Тайцзицюань - не цель, это путь. Отправная точка опоры и равновесия. Это баланс, благодаря которому мы можем двигаться куда угодно.',
  ],
  second: [
    'Тайцзицюань помогает обрести внутреннюю силу, которая нужна каждому из нас. Силу на занятие любимым делом, на заботу о родных и близких, на движение к мечте. Силу на то, чтобы идти путем отзывчивости, терпения, нравственности и любви. Силу на то, чтобы в наше нелегкое время оставаться Человеком. Это возможность быть собой и двигаться вперёд, раскрыть свою собственную Природу и следовать зову Сердца в любых обстоятельствах.',
    'Учитель Фэн Чжицян говорил: «Будь счастлив - это часть тренировки Тайцзи»',
  ],
};

const HUNUAN = {
  title: 'Хуньюань Тайцзи',
  first: [
    'Чэнь Ши Синьи Хуньюань Тайцзи (далее упоминаемый как Хуньюань Тайцзи) - это превосходный стиль боевых искусств, созданный грандмастером Фэн Чжицяном. Система сложилась в 1980-е годы и стала широко известна в мире в 1990-е.',
    'Хуньюань Тайцзи является объединением Тайцзии Синьи (心意 xīnyì). Тайцзицюань сосредоточен на сплетении всего тела в единое целое через внешние и внутренние спирали. Синьицюань сосредоточен на развитии «Шести Гармоний» снаружи и внутри (тело и ум-намерение).',
    'В этой школе подчеркивается взращивание, собирание, движение и перемещение Ци. В практике Ум-намерение преобладает над Ци,а Ци преобладает над Ли (физической силой). Во внешнем аспекте тренируются сухожилия, кости и мышцы. Во внутреннем аспекте Хуньюань тренирует Цзин (精 jīng), Ци (气 qì) и Шэнь (神 shén). На основе сильной внутренней Ци мы запасаем и сохраняем истинную Изначальную Ци.',
  ],
  second: [
    'Практикующий использует естественное дыханиеи Ум-намерение, направляет и перемещает Ци в соответствии с трактами и сосудами. Через расслабление, спокойствие и сосредоточение поток силы открывает три сустава, наполняет четыре конечности, доходит до четырех окончаний, приводит в движение пять элементов. Культивируется единое зерно Хуньюань Ци, дополняющее Прежденебесную и Посленебесную Ци. Ценность содержится в духе. Цель - это культивирование жизненной силы и боевая подготовка.',
    'Хуньюань Тайцзицюань основан на Нэйгун (внутренняя работа), структурирован через одиночные техники (Цюаньфа), формы с оружием и без него. Функциональность подтверждается через Туйшоу (推手 tuīshǒu ) и Саньшоу (свободный спарринг).',
  ],
};

export const About = () => {
  const { setIsShopPage } = getStore;

  useEffect(() => {
    setIsShopPage(false);
    scrollToTop();
  }, []);

  return (
    <div className={cx('about')}>
      <div className={cx('image-wrapper')}></div>
      <MainWrapper type="sub">
        <div className={cx('text-wrapper')}>
          <p className={cx('description')}>
            Мы объединяем всех, кому нравится быть здоровыми и счастливыми, кому интересно исследовать себя и окружающий
            мир. Нам и нашим друзьям важно жить в гармонии с Природой, с другими людьми, а главное - с самими собой.
            Среди нас тайцзишники и цигунисты, остеопаты, врачи, учителя, художники, музыканты и просто хорошие люди.
          </p>

          <TextBlock contentFirst={DESCRIPTION.first} contentSecond={DESCRIPTION.second} />
          <TextBlock isBorder={true} title={CIGUN.title} contentFirst={CIGUN.first} contentSecond={CIGUN.second} />
          <TextBlock isBorder={true} title={TAICHI.title} contentFirst={TAICHI.first} contentSecond={TAICHI.second} />
          <TextBlock isBorder={true} title={HUNUAN.title} contentFirst={HUNUAN.first} contentSecond={HUNUAN.second} />

          <footer className={cx('footer')}>
            <div className={cx('footer__paragraph')}>
              Подробнее про мастеров, школу и методы Хуньюань вы можете найти в разделе{' '}
              <LinkWrapper
                className={cx('link')}
                isInline={true}
                linkText="Библиотека"
                linkUrl={ROUTES.library}
                type="nav"
              />
            </div>
            <div className={cx('footer__paragraph')}>
              Подробнее о том, у кого можно учиться и о наших занятиях - в разделе{' '}
              <LinkWrapper
                className={cx('link')}
                isInline={true}
                linkText="Преподаватели"
                linkUrl={ROUTES.teachers}
                type="nav"
              />
            </div>
          </footer>
        </div>
      </MainWrapper>
    </div>
  );
};
