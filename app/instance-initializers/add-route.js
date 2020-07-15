export function initialize(appInstance) {
  const shouldChooseNew = window.document.location.search.includes('new');
  const chosenRouteName = shouldChooseNew ? 'new' : 'old';
  appInstance.register(
    'route:dynamic',
    appInstance.factoryFor(`route:${chosenRouteName}`)
  );
  appInstance.register(
    'template:dynamic',
    appInstance.lookup(`template:${chosenRouteName}`)
  );
}

export default {
  initialize,
};
