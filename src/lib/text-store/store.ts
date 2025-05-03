import { create } from 'zustand/react'

interface TextState {
  title: string
  subtitle: string
  name: string
  text: string
  from: string
  position: string
  actions: {
    setText: (key: keyof Omit<TextState, 'actions'>, value: string) => void
  }
}

const useTextStore = create<TextState>()((set) => ({
  title: 'Благодарность',
  subtitle: 'Вручается',
  name: 'Сисси Еве',
  text: 'За самые глубокие заглоты и пухлые губки',
  from: 'Кристина',
  position: 'Королева пик',
  actions: {
    setText: (key, value) => {
      set({ [key]: value })
    },
  },
}))

export const useTextActions = () =>
  useTextStore((state) => state.actions)

export const useTitle = () =>
  useTextStore((state) => state.title)

export const useSubtitle = () =>
  useTextStore((state) => state.subtitle)

export const useName = () =>
  useTextStore((state) => state.name)

export const useText = () =>
  useTextStore((state) => state.text)

export const useFrom = () =>
  useTextStore((state) => state.from)

export const usePosition = () =>
  useTextStore((state) => state.position)

