var checkbox = document.querySelector( '#show-menu' );
var icon = document.querySelector( '#hamburger-menu' );
var navArea=document.querySelector('.links')
var prod_check = document.querySelector( '#show-features' );
var prod = document.querySelector( '#product-feature' );
var listener = function( e ) {
  if( e.target != checkbox && e.target != icon && e.target != prod && e.target != prod_check && e.target!=navArea) {
    checkbox.checked = false;
    document.removeEventListener( 'click', listener );
  }
};

checkbox.addEventListener( 'click', function(){
  if( this.checked ) 
  {
    document.addEventListener( 'click', listener );
  }
});

