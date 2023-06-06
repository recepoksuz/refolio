import { createStore } from 'storken'

export const [Storken, { useStorken }] = createStore({
  storkenOptions: {},
  initialValues: {
   accountAdress: "",
   isActive: false
  },
})

export default { Storken, useStorken }