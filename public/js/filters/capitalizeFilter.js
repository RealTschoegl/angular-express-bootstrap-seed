myApp.filter('capitalize', function() {
    return function(input) {
        return input.replace(/\b./g, function(m){ return m.toUpperCase(); });
    }
});