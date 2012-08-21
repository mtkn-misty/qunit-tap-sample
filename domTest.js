
test( "hello dom test", function() {
    $('#qunit-tests').append('<p></p>');
    ok( 1 == $('p', '#qunit-tests').length, "Passed!" );
});
test( "hello dom test2", function() {
    $('#qunit-tests').append('<p></p>');
    ok( 1 === $('p', '#qunit-tests').length, "Passed!" );
});