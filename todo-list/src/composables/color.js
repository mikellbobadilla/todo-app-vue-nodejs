import { computed } from 'vue'

export const color = {
  color: {
    type: String,
    default: 'success',
    validator(value) {
      return ['info', 'warning', 'danger', 'success'].includes(value)
    }
  }
}

export const useColor = props => {
  return computed(() => {
    const options = {
      info: 'info',
      warning: 'warning',
      danger: 'danger',
      success: 'success'
    }
    return options[props.color]
  })
}