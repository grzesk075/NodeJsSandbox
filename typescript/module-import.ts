import MyLoggable from './module-export';
import MyLogger from './module-export';
let myLogger = new MyLogger();

myLogger.log('Hello ts modules');

let myLoggable: MyLoggable = myLogger;
