import smokeTest from '../../Fixtures';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faLightbulb, faStar as farStar,
  faCheckCircle,
faTimesCircle } from '@fortawesome/free-regular-svg-icons'

import {
  faClipboardList,
  faStar as fasStar,
  faCheck,
  faTimes,
  faTasks,
  faHourglassHalf,
  faCommentSlash,
  faEdit
} from '@fortawesome/free-solid-svg-icons'

library.add(
    faLightbulb, // header
    faClipboardList, // dashboard icon
    fasStar, // solid star for upvotes
    farStar, // star outline for upvotes
    faCheck,
    faTimes,
    faTasks,
    faCheckCircle,
    faHourglassHalf,
    faTimesCircle,
    faCommentSlash,
    faEdit
  )

smokeTest('App', <App/>);