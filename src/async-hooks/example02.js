// init async hook
function init(asyncId, type, triggerAsyncId, resource) {
    debug(asyncId)
}
// two functions with async/await
const computeAnswer = async () => { 123 };

(async () => {
    await computeAnswer()
})();