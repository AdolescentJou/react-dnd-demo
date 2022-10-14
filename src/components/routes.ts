import Chess from './Chess';
import ArbitrarilyDrag from './arbitrarilyDrag';
import CardSort from './cardSort';
import CardAssemble from './cardAssemble';
import ListSort from './listSort';
import DragPreviewImg from './dragPreviewImg';
import DragPreviewDom from './dragPreviewDom';
export const routes = [
  {
    url: '/chess',
    title: '官方用例',
    Component: Chess,
  },
  {
    url: '/word',
    title: '任意拖拽',
    Component: ArbitrarilyDrag,
  },
  {
    url: '/cardSort',
    title: '卡片排序',
    Component: CardSort,
  },
  {
    url: '/cardAssemble',
    title: '卡片拼图',
    Component: CardAssemble,
  },
  {
    url: '/listSort',
    title: '列表排序',
    Component: ListSort,
  },
  {
    url: '/dragPreviewImg',
    title: '图片预览',
    Component: DragPreviewImg,
  },
  {
    url: '/dragPreviewDom',
    title: '自定义预览',
    Component: DragPreviewDom,
  },
];
