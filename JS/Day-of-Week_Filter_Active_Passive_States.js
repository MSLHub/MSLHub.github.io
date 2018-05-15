
// Change active state of day of week buttons 
	$('#dayAll').addClass( 'ACTIVE' );
	$('#monday').addClass( 'PASSIVE' );
	$('#tuesday').addClass( 'PASSIVE' );
	$('#wednesday').addClass( 'PASSIVE' );
	$('#thursday').addClass( 'PASSIVE' );
	$('#friday').addClass( 'PASSIVE' );

// When user chooses, "dayAll", make it stand-out
$('#dayAll').click(function() {
	$('#dayAll').removeClass( 'PASSIVE' ).addClass( 'ACTIVE' );
	$('#monday').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );
	$('#tuesday').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );
	$('#wednesday').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );
	$('#thursday').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );	
    $('#friday').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );	
});
// When user chooses, "Monday", make it stand-out
$('#monday').click(function() {
	$('#dayAll').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );
	$('#monday').removeClass( 'PASSIVE' ).addClass( 'ACTIVE' );
	$('#tuesday').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );
	$('#wednesday').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );
	$('#thursday').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );	
    $('#friday').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );	
});
// When user chooses, "Tuesday", make it stand-out
$('#tuesday').click(function() {
	$('#dayAll').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );
	$('#monday').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );
	$('#tuesday').removeClass( 'PASSIVE' ).addClass( 'ACTIVE' );
	$('#wednesday').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );
	$('#thursday').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );	
    $('#friday').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );	
});
// When user chooses, "Wednesday", make it stand-out
$('#wednesday').click(function() {
	$('#dayAll').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );
	$('#monday').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );
	$('#tuesday').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );
	$('#wednesday').removeClass( 'PASSIVE' ).addClass( 'ACTIVE' );
	$('#thursday').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );	
    $('#friday').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );	
});
// When user chooses, "Thursday", make it stand-out
$('#thursday').click(function() {
	$('#dayAll').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );
	$('#monday').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );
	$('#tuesday').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );
	$('#wednesday').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );
	$('#thursday').removeClass( 'PASSIVE' ).addClass( 'ACTIVE' );	
    $('#friday').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );	
});
// When user chooses, "friday", make it stand-out
$('#friday').click(function() {
	$('#dayAll').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );
	$('#monday').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );
	$('#tuesday').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );
	$('#wednesday').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );
	$('#thursday').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );
    $('#friday').removeClass( 'PASSIVE' ).addClass( 'ACTIVE' );		
});







