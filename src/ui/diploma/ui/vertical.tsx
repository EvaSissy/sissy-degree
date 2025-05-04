import { FC } from 'react'
import Border from '@/assets/border-vertical.svg?react'
import Seal from '@/assets/seal.svg?react'
import Sign from '@/assets/sign.svg?react'
import { pictures } from '../config/pictures'

interface Props {
  title: string
  subtitle: string
  name: string
  text: string
  from: string
  position: string
  picture: number
  scale: number
}

export const Vertical: FC<Props> = ({
  title,
  subtitle,
  name,
  text,
  from,
  position,
  picture,
  scale,
}) => {
  return (
    <div
      id="diploma"
      className="relative aspect-210/297 w-full bg-[#000]"
    >
      <div
        className="absolute inset-0 p-64 bg-cover bg-no-repeat text-black"
        style={{
          width: '2100px',
          height: '2970px',
          backgroundImage: `url(${pictures[picture]})`,
          transform: `scale(${scale})`,
          transformOrigin: 'left top'
        }}
      >
        <Border className="absolute inset-10" />
        <div className="w-full flex flex-col items-center">
          <h1 className="text-[180px] text-center font-bold text-shadow-lg text-shadow-white">{title}</h1>
          <h2 className="text-[150px] text-center font-bold text-shadow-lg text-shadow-white">{subtitle}</h2>
          <h3 className="text-[150px] text-center font-bold underline text-shadow-lg text-shadow-white">{name}</h3>
          <p className="text-[100px] text-center text-shadow-lg text-shadow-white">{text}</p>
        </div>
        <span className="text-[100px] max-w-[606px] absolute bottom-105 left-68 underline text-shadow-lg text-shadow-white">{position}</span>
        <span className="text-[100px] max-w-[426px] absolute bottom-105 right-68 underline text-shadow-lg text-shadow-white">{from}</span>
        <Seal className="absolute right-60 bottom-129"/>
        <Sign className="absolute left-182 bottom-98"/>
      </div>
    </div>
  )
}