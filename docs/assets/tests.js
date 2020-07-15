'use strict';

define("demo-dynamic-route/tests/test-helper", ["demo-dynamic-route/app", "demo-dynamic-route/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("demo-dynamic-route/tests/unit/instance-initializers/add-route-test", ["demo-dynamic-route/instance-initializers/add-route", "qunit"], function (_addRoute, _qunit) {
  "use strict";

  (0, _qunit.module)('Unit | Instance Initializer | add-route', function (hooks) {
    hooks.beforeEach(function () {
      this.TestApplication = Ember.Application.extend();
      this.TestApplication.instanceInitializer({
        name: 'initializer under test',
        initialize: _addRoute.initialize
      });
      this.application = this.TestApplication.create({
        autoboot: false
      });
      this.instance = this.application.buildInstance();
    });
    hooks.afterEach(function () {
      Ember.run(this.instance, 'destroy');
      Ember.run(this.application, 'destroy');
    }); // Replace this with your real tests.

    (0, _qunit.test)('it works', async function (assert) {
      await this.instance.boot();
      assert.ok(true);
    });
  });
});
define("demo-dynamic-route/tests/unit/routes/new-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | new', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:new');
      assert.ok(route);
    });
  });
});
define("demo-dynamic-route/tests/unit/routes/old-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | old', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:old');
      assert.ok(route);
    });
  });
});
define('demo-dynamic-route/config/environment', [], function() {
  var prefix = 'demo-dynamic-route';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('demo-dynamic-route/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
