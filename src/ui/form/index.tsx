import { FC } from 'react'
import {
  useFrom,
  useName,
  usePosition,
  useSubtitle,
  useText,
  useTextActions,
  useTitle,
} from '../../lib/text-store/store.ts'
import { toPng } from 'html-to-image'
import bgSrc from '@/assets/bg-1.png'

export const Form: FC = () => {
  const { setText } = useTextActions()

  const title = useTitle()
  const subtitle = useSubtitle()
  const name = useName()
  const text = useText()
  const from = useFrom()
  const position = usePosition()

  const handleClick = () => {
    setText('text', text)

    const diploma = document.getElementById('diploma')

    if(diploma) {
      toPng(diploma, {
        style: {
          background: `url(${bgSrc}), #000`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        },
        cacheBust: true
      })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }

  return (
    <div className="flex flex-col gap-4 bg-[#000] border border-[#FD15AB] rounded-2xl w-full p-4">
      <label className="flex gap-2 flex-col">
        <span>Заголовок</span>
        <input className="bg-white rounded-2xl p-2 !outline-none focus:border focus:border-[#FD15AB]" value={title} onChange={(e) => setText('title', e.target.value)}/>
      </label>
      <label className="flex gap-2 flex-col">
        <span>Подзаголовок</span>
        <input className="bg-white rounded-2xl p-2 !outline-none focus:border focus:border-[#FD15AB]" value={subtitle} onChange={(e) => setText('subtitle', e.target.value)}/>
      </label>
      <label className="flex gap-2 flex-col">
        <span>Кому</span>
        <input className="bg-white rounded-2xl p-2 !outline-none focus:border focus:border-[#FD15AB]" value={name} onChange={(e) => setText('name', e.target.value)}/>
      </label>
      <label className="flex gap-2 flex-col">
        <span>Текст</span>
        <textarea className="bg-white rounded-2xl p-2 !outline-none focus:border focus:border-[#FD15AB]" value={text} onChange={(e) => setText('text', e.target.value)}/>
      </label>
      <label className="flex gap-2 flex-col">
        <span>Должность</span>
        <input className="bg-white rounded-2xl p-2 !outline-none focus:border focus:border-[#FD15AB]" value={position} onChange={(e) => setText('position', e.target.value)}/>
      </label>
      <label className="flex gap-2 flex-col">
        <span>От кого:</span>
        <input className="bg-white rounded-2xl p-2 !outline-none focus:border focus:border-[#FD15AB]" value={from} onChange={(e) => setText('from', e.target.value)}/>
      </label>
      <button className="bg-white rounded-2xl p-2" onClick={handleClick}>
        Скачать
      </button>
    </div>
  )
}