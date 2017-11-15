/* @flow */

import { combineReducers } from 'redux'
import events from '../reducers/events'
import eventsTable from '../reducers/eventsTable'
import user from '../reducers/user'
import snackbar from '../reducers/snackbar'

import { routerReducer as router } from 'react-router-redux'

const rootReducer = combineReducers({
  events,
  eventsTable,
  user,
  snackbar,
  router,
})

export default rootReducer
