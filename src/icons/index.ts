import { addCollection } from '@iconify/vue'
import fluentSubset from './fluent-subset.json'

// Register Fluent filled icons collection offline so no network requests are needed
addCollection(fluentSubset as any)

export { Icon } from '@iconify/vue'
