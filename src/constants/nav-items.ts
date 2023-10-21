export const navItems = [
  {
    name: 'Főételek',
    items: [
      {
        name: 'Milánói makaróni',
        path: '/foetelek/milanoi-makaroni',
        image: '/images/milanoi-makaroni.jpg',
        description:
          'Ízletes, fűszeres, pardicsomos darált hús áldentére főzöt makaróni ágyon, érlelt reszelt parmezán sajtal díszítve.',
      },
      {
        name: 'Roston csirkemell, rizs, tzatziki',
        path: '/foetelek/roston-csirkemell',
        image: '/images/roston-csirkemell.jpg',
        description:
          'A ropogós roston sült csirkemell, illatos rizs és friss tzatziki harmonikus kombinációja. Az aranyló csirkehús és a puha rizs találkozása, melyet friss tzatziki saláta koronáz meg.',
      },
      {
        name: 'Kijevi csirkemell',
        path: '/foetelek/kijevi-csirkemell',
        image: '/images/kijevi-csirkemell.png',
        description:
          'A kijevi csirkemell egy híres és ízletes étel. Ez az étel egy különleges csirkemell töltelékéből áll, amelyet ropogós bundába burkolnak, majd sütnek.',
      },
    ],
  },
  {
    name: 'Desszertek',
    items: [
      {
        name: 'Vörös bársony torta',
        path: '/desszertek/voros-barsony-torta',
        image: '/images/voros-barsony-torta.jpg',
        description:
          'A red velvet, vagyis a vörös bársony tökéletes elnevezése a süteménynek, mert nemcsak a színére utal, de tésztájának puha, selymes állagára is.',
      },
      {
        name: 'Joghurt',
        path: '/desszertek/joghurt',
        image: '/images/joghurt.png',
        description:
          'A joghurt egy tejtermék, amelyet erjesztett tejből készítenek. Ez a finom és tápláló étel évszázadok óta része az emberi étrendnek, és számos kultúrában készül és fogyasztják.',
      },
      {
        name: 'Almás pite',
        path: '/desszertek/almas-pite',
        image: '/images/almas-pite.jpg',
        description:
          'Arany barnára sült, gondosan elkészítet, omlós tésztában illatos, fahéjas, édes és egyben savanykás alma reszeléket ízlelhetünk!',
      },
    ],
  },
] as const;
