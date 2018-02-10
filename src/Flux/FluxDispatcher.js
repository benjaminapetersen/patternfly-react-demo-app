// yarn add flux
import { Dispatcher } from 'flux';

// source:
// https://github.com/facebook/flux/blob/master/src/Dispatcher.js
//  - A flux dispatcher is a lot like pubsub, with just a few
//    differences.  Primarily, all stores subscribe to all events.
export default new Dispatcher;
