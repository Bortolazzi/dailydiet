import { TouchableOpacityProps } from 'react-native'

export type MealItemProps = TouchableOpacityProps & {
  label: string
  time: string
  isSuccess?: boolean
}

export type StatusProps = {
  isSuccess?: boolean
}