import { FC } from 'react'
import Border from '@/assets/border-vertical.svg?react'
import Seal from '@/assets/seal.svg?react'
import Sign from '@/assets/sign.svg?react'
import bgSrc from '@/assets/bg-1.png'
import { useName, useSubtitle, useTitle, useText, useFrom, usePosition } from '../../lib/text-store/store.ts'

export const Diploma: FC = () => {
  const title = useTitle()
  const subtitle = useSubtitle()
  const name = useName()
  const text = useText()
  const from = useFrom()
  const position = usePosition()

  const width = Math.min(window.document.body.clientWidth, 576)
  const scale = (width / 2100)

  return (
    <div
      id="diploma"
      className="relative aspect-210/297 w-full bg-[#000]"
    >
      <div
        className="absolute inset-0 p-64"
        style={{
          width: '2100px',
          height: '2970px',
          background: `url(${bgSrc})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          transform: `scale(${scale})`,
          transformOrigin: 'left top'
        }}
      >
        <Border className="absolute top-10 left-10" />
        <div className="w-full flex flex-col items-center">
          <h1 className="text-[180px] text-center font-bold">{title}</h1>
          <h2 className="text-[150px] text-center font-bold">{subtitle}</h2>
          <h3 className="text-[150px] text-center font-bold underline">{name}</h3>
          <p className="text-[100px] text-center">{text}</p>
        </div>
        <span className="text-[100px] max-w-[606px] absolute bottom-105 left-68 underline">{position}</span>
        <span className="text-[100px] max-w-[426px] absolute bottom-105 right-68 underline">{from}</span>
        <Seal className="absolute right-60 bottom-129"/>
        <Sign className="absolute left-182 bottom-98"/>
      </div>
    </div>
  )
}