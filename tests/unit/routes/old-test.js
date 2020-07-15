import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | old', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:old');
    assert.ok(route);
  });
});
