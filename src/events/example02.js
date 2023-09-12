
import EventEmitter from 'events';

const myEmitters = {};
const addEmitter = (name) => { myEmitters[name] = new EventEmitter(); };

/*****************************************************************/
addEmitter('profile');
myEmitters.profile.on('event', (profile) => { console.log('[launchEventProfile] profile object', profile); });
const launchEventProfile = (firstName, lastName) => {
    myEmitters.profile.emit('event', { firstName, lastName });
};
launchEventProfile('Jhon', 'Doe');
/*****************************************************************/


/*****************************************************************/
// Define Event wait 1 second and lanuch.
addEmitter('article');
myEmitters.article.on('event12', (article) => { console.log('[launchEventArticle] article object', article); });
const launchEventArticle = (title, excerpt) => {
    myEmitters.article.emit('event12', { title, excerpt });
};
launchEventArticle( 'Title article', 'Excerpt article');
/*****************************************************************/