Tinytest.add("R - correct export", function(test) {
	// Simply check 'R' is not undefined...
  test.isNotUndefined(R, "R doesn't seem to be correctly exported");
});

Tinytest.add("R - simple replace test", function(test) {
	// Try a simple example
  var greet = R.replace('{name}', R.__, 'Hello, {name}!');
  test.equal(greet('Alice'), 'Hello, Alice!');
});
