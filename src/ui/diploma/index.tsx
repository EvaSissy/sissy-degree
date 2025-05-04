import { FC } from 'react'
import {
  useName,
  useSubtitle,
  useTitle,
  useText,
  useFrom,
  usePosition,
  usePicture,
} from '../../lib/text-store/store.ts'
import { Vertical } from './ui/vertical.tsx'
import { Horizontal } from './ui/horizontal.tsx'

export const Diploma: FC = () => {
  const title = useTitle()
  const subtitle = useSubtitle()
  const name = useName()
  const text = useText()
  const from = useFrom()
  const position = usePosition()
  const picture = usePicture()

  const width = Math.min(window.document.body.clientWidth - 32, 576)
  const scale = (width / 2100)

  return picture < 5 ?
    <Vertical title={title} subtitle={subtitle} name={name} text={text} from={from} position={position} picture={picture} scale={scale}/>
    :
    <Horizontal title={title} subtitle={subtitle} name={name} text={text} from={from} position={position} picture={picture} scale={scale}/>
}