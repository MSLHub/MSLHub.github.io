// Change active state of filterable buttons 

// By default, "View All" is the active button
$('#buttonAll').addClass( 'ACTIVE' );
$('#buttonNone').addClass( 'PASSIVE' );
$('#button1').addClass( 'PASSIVE' );
$('#button2').addClass( 'PASSIVE' );
$('#button3').addClass( 'PASSIVE' );
$('#button4').addClass( 'PASSIVE' );

// When user chooses, "buttonAll", make it stand-out
$('#buttonAll').click(function() {
	$('#buttonAll').removeClass( 'PASSIVE' ).addClass( 'ACTIVE' );
	$('#buttonNone').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );
	$('#button1').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );
	$('#button2').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );
	$('#button3').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );
	$('#button4').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );	
});

// When user chooses, "buttonNone", make it stand-out
$('#buttonNone').click(function() {
	$('#buttonNone').removeClass( 'PASSIVE' ).addClass( 'ACTIVE' );
	$('#buttonAll').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );
	$('#button1').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );
	$('#button2').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );
	$('#button3').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );
	$('#button4').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );	
});

// When user chooses, "button1", make it stand-out
$('#button1').click(function() {
	$('#buttonAll').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );
	$('#buttonNone').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );
	$('#button1').removeClass( 'PASSIVE' ).addClass( 'ACTIVE' );
	$('#button2').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );
	$('#button3').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );
	$('#button4').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );	
});

// When user chooses, "button2", make it stand-out
$('#button2').click(function() {
	$('#buttonAll').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );
	$('#buttonNone').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );
	$('#button1').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );
	$('#button2').removeClass( 'PASSIVE' ).addClass( 'ACTIVE' );
	$('#button3').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );
	$('#button4').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );	
});

// When user chooses, "button3", make it stand-out
$('#button3').click(function() {
	$('#buttonAll').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );
	$('#buttonNone').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );
	$('#button1').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );
	$('#button2').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );
	$('#button3').removeClass( 'PASSIVE' ).addClass( 'ACTIVE' );
	$('#button4').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );	
});

// When user chooses, "button4", make it stand-out
$('#button4').click(function() {
	$('#buttonAll').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );
	$('#buttonNone').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );
	$('#button1').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );
	$('#button2').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );
	$('#button3').removeClass( 'ACTIVE' ).addClass( 'PASSIVE' );
	$('#button4').removeClass( 'PASSIVE' ).addClass( 'ACTIVE' );	
});

