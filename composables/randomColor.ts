import { colors } from "~/constants"

export const useRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)]
}
