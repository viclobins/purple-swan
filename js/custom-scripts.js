$( document ).on( "pageinit", function( event ) {
	
	/*LOGIN*/
	$( "#username-number" ).textinput({ wrapperClass: "username-number" });
	$( "#password" ).textinput({ wrapperClass: "password" });
	
	$("#password").keyup(function(){
		if ($(this).val().length >= 7 ) {
			$( "#loginBtn" ).button( "enable" );
		} else {
			$( "#loginBtn" ).button( "disable" );
		}
	});
	
	$( ".login-btn .ui-btn-active" ).text('Logging In');
	$( ".login-btn .ui-btn-active" ).append('<img src="img/loader.png" class="loginLoader">');
	
	
	$('.noticeClose').click(function(){
		$('.goldNotice').slideUp('fast');
	});
	/*LOGIN END*/
	
	/*SEARCH*/
	$('.searchFiltersForm .ui-controlgroup span img').remove();
	$('.searchFiltersForm .ui-controlgroup span').append('<img src="img/icons/arrow-down-grey.png" class="arrowDown">');
	$('#selectByStatus').bind('change', function(e) {
		$('.arrowDown').remove();
		$('.searchFiltersForm .ui-controlgroup span').append('<img src="img/icons/arrow-down-grey.png" class="arrowDown">');
	});
	$('#selectByLocale').bind('change', function(e) {
		$('.arrowDown').remove();
		
		$('.searchFiltersForm .ui-controlgroup span').append('<img src="img/icons/arrow-down-grey.png" class="arrowDown">');
		if( $('#selectByLocale').val() == 'local') {
		  $('.distanceSliderWrapper').show();
		}
		else{
		  $('.distanceSliderWrapper').hide();
		}
		
		if( $('#selectByLocale').val() == 'country') {
		  $('.selectCountryWrapper').show();
		}
		else{
		  $('.selectCountryWrapper').hide();
		}         
	 });
	/*SEARCH END*/
	
	/*SIGNUP*/
	$("#password").keyup(function(){
		if ($(this).val().length >= 7 ) {
			$( "#nextBtn" ).button( "enable" );
		} else {
			$( "#nextBtn" ).button( "disable" );
		}
	});
	
	$('.page-signup-step2 .optionSelect-btn').click(function(){
		$('.page-signup-step2 .optionSelect-btn').removeClass('optionActive-btn');
		$(this).addClass('optionActive-btn');
		return false;
	});
	/*SIGNUP END*/
	
	/*PROFILE*/
	$('.profileFaveInactive img').attr('src', 'img/icons/favourites-grey.png');
	
	$('.photoScrolls').scroll(function(){
        if($(this).scrollLeft()>5){
            $(".arrow-left").hide();
        } else {
            $(".arrow-left").show();
        }
    });
	
	
	$('.postsShare').click(function() {
		$('.shareWrapper').slideUp( "fast" );
		var thirdParent = $(this).parents().eq(3);
		$(thirdParent).find('.shareWrapper').slideToggle( "fast" );
		$('.shareLinks').removeClass('psShareActive fbShareActive twitterShareActive');
		$('.shareConfirm').addClass('ui-state-disabled');
	});
	$('.shareCloseBtn').click(function(){
		$(this).parent().slideUp( "fast" );
		$('.shareLinks').removeClass('psShareActive fbShareActive twitterShareActive');
		$('.shareConfirm').addClass('ui-state-disabled');
	});
	$('.psShare').click(function(){
		$('.shareLinks').removeClass('psShareActive fbShareActive twitterShareActive');
		$(this).addClass('psShareActive');
		$('.shareConfirm').removeClass('ui-state-disabled');
		return false;
	});
	$('.fbShare').click(function(){
		$('.shareLinks').removeClass('psShareActive fbShareActive twitterShareActive');
		$(this).addClass('fbShareActive');
		$('.shareConfirm').removeClass('ui-state-disabled');
		return false;
	});
	$('.twitterShare').click(function(){
		$('.shareLinks').removeClass('psShareActive fbShareActive twitterShareActive');
		$(this).addClass('twitterShareActive');
		$('.shareConfirm').removeClass('ui-state-disabled');
		return false;
	});
	
	$('.locationBtn').click(function(){
		$(this).toggleClass('locationBtnActive');
	});
	/*PROFILE END*/
	
	/*EDIT PROFILE*/
	$('#myWallSwitch').bind('change', function(e) {
		if( $('#myWallSwitch').val() == 'on') {
		  $('.myWallOptions').slideDown();
		}
		else{
		  $('.myWallOptions').slideUp();
		}
	 });
	 
	$('#page-myWallOptionOne .optionSelect-btn').click(function(){
		$('#page-myWallOptionOne .optionSelect-btn').removeClass('optionActive-btn');
		$(this).addClass('optionActive-btn');
		return false;
	});
	$('#page-myWallOptionTwo .optionSelect-btn').click(function(){
		$('#page-myWallOptionTwo .optionSelect-btn').removeClass('optionActive-btn');
		$(this).addClass('optionActive-btn');
		return false;
	});
	
	$("#password-confirm").keyup(function(){
		if ($(this).val().length >= 7 ) {
			$( "#saveBtn" ).button( "enable" );
		} else {
			$( "#saveBtn" ).button( "disable" );
		}
	});
	
	$( ".saveBtn .ui-btn-active" ).text('Saving');
	$( ".saveBtn .ui-btn-active" ).append('<img src="img/loader.png" class="loginLoader">');
	
	$('#page-accountsettings .optionSelect-btn').click(function(){
		$('#page-accountsettings .optionSelect-btn').removeClass('optionActive-btn');
		$(this).addClass('optionActive-btn');
		return false;
	});
	
	
	$('#page-expiredsubscription .optionSelect-btn').click(function(){
		$('#page-expiredsubscription .optionSelect-btn').removeClass('optionActive-btn');
		$(this).addClass('optionActive-btn');
		return false;
	});
	/*EDIT PROFILE END*/
	
	/*INTRODUCE*/
	$('.introduceBtn').click(function(){
		$(this).remove();
		$('.introCopyGold').slideDown(500);
		$('.introCopy').slideUp(300);
	});
	/*INTRODUCE END*/
	
	/*PHOTOS*/
	$(window).resize(function() {
		$('#page-singlephoto div.ui-dialog-contain').height($(window).height());
	});
	
	$(window).trigger('resize');
	/*PHOTOS END*/
	
});

/*TEXTAREA FIX*/
(function ($, undefined) {

    $.widget("mobile.textinput", $.mobile.textinput, {
		options: {
			autogrow:true,
            autoGrowPadding: 0,
            keyupTimeoutBuffer: 100
		},
        
        _updateHeight: function () {
            var paddingTop, paddingBottom, paddingHeight, scrollHeight, clientHeight,
            borderTop, borderBottom, borderHeight, height,
            scrollTop = this.window.scrollTop();
            this.keyupTimeout = 0;

            // IE8 textareas have the onpage property - others do not
            if (!("onpage" in this.element[0])) {
                this.element.css({
                    "height": 0,
                        "min-height": 0,
                        "max-height": 0
                });
            }

            scrollHeight = this.element[0].scrollHeight;
            clientHeight = this.element[0].clientHeight;
            borderTop = parseFloat(this.element.css("border-top-width"));
            borderBottom = parseFloat(this.element.css("border-bottom-width"));
            borderHeight = borderTop + borderBottom;
            height = scrollHeight + borderHeight + this.options.autoGrowPadding;

            if (clientHeight === 0) {
                paddingTop = parseFloat(this.element.css("padding-top"));
                paddingBottom = parseFloat(this.element.css("padding-bottom"));
                paddingHeight = paddingTop + paddingBottom;

                height += paddingHeight;
            }

            this.element.css({
                "height": height,
                    "min-height": "",
                    "max-height": ""
            });

            this.window.scrollTop(scrollTop);
        },

    });

})(jQuery);
/*TEXTAREA FIX END*/


/*FILTERABLE SEARCH*/
$.mobile.document
    // "filter-menu-menu" is the ID generated for the listview when it is created
    // by the custom selectmenu plugin. Upon creation of the listview widget we
    // want to prepend an input field to the list to be used for a filter.
    .on( "listviewcreate", "#selectCountry-menu", function( e ) {
        var input,
            listbox = $( "#selectCountry-listbox" ),
            form = listbox.jqmData( "filter-form" ),
            listview = $( e.target );
        // We store the generated form in a variable attached to the popup so we
        // avoid creating a second form/input field when the listview is
        // destroyed/rebuilt during a refresh.
        if ( !form ) {
            input = $( "<input data-type='search'></input>" );
            form = $( "<form></form>" ).append( input );
            input.textinput();
            $( "#selectCountry-listbox" )
                .prepend( form )
                .jqmData( "filter-form", form );
        }
        // Instantiate a filterable widget on the newly created listview and
        // indicate that the generated input is to be used for the filtering.
        listview.filterable({ input: input });
    })
    // The custom select list may show up as either a popup or a dialog,
    // depending how much vertical room there is on the screen. If it shows up
    // as a dialog, then the form containing the filter input field must be
    // transferred to the dialog so that the user can continue to use it for
    // filtering list items.
    //
    // After the dialog is closed, the form containing the filter input is
    // transferred back into the popup.
    .on( "pagebeforeshow pagehide", "#selectCountry-dialog", function( e ) {
        var form = $( "#selectCountry-listbox" ).jqmData( "filter-form" ),
            placeInDialog = ( e.type === "pagebeforeshow" ),
            destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#selectCountry-listbox" );
        form
            .find( "input" )
            // Turn off the "inset" option when the filter input is inside a dialog
            // and turn it back on when it is placed back inside the popup, because
            // it looks better that way.
            .textinput( "option", "inset", !placeInDialog )
            .end()
            .prependTo( destination );
    });
/*FILTERABLE SEARCH END*/


/*SWIPEUPDOWN*/
(function() {
    var supportTouch = $.support.touch,
            scrollEvent = "touchmove scroll",
            touchStartEvent = supportTouch ? "touchstart" : "mousedown",
            touchStopEvent = supportTouch ? "touchend" : "mouseup",
            touchMoveEvent = supportTouch ? "touchmove" : "mousemove";
    $.event.special.swipeupdown = {
        setup: function() {
            var thisObject = this;
            var $this = $(thisObject);
            $this.bind(touchStartEvent, function(event) {
                var data = event.originalEvent.touches ?
                        event.originalEvent.touches[ 0 ] :
                        event,
                        start = {
                            time: (new Date).getTime(),
                            coords: [ data.pageX, data.pageY ],
                            origin: $(event.target)
                        },
                        stop;

                function moveHandler(event) {
                    if (!start) {
                        return;
                    }
                    var data = event.originalEvent.touches ?
                            event.originalEvent.touches[ 0 ] :
                            event;
                    stop = {
                        time: (new Date).getTime(),
                        coords: [ data.pageX, data.pageY ]
                    };

                    // prevent scrolling
                    if (Math.abs(start.coords[1] - stop.coords[1]) > 10) {
                        event.preventDefault();
                    }
                }
                $this
                        .bind(touchMoveEvent, moveHandler)
                        .one(touchStopEvent, function(event) {
                    $this.unbind(touchMoveEvent, moveHandler);
                    if (start && stop) {
                        if (stop.time - start.time < 1000 &&
                                Math.abs(start.coords[1] - stop.coords[1]) > 30 &&
                                Math.abs(start.coords[0] - stop.coords[0]) < 75) {
                            start.origin
                                    .trigger("swipeupdown")
                                    .trigger(start.coords[1] > stop.coords[1] ? "swipeup" : "swipedown");
                        }
                    }
                    start = stop = undefined;
                });
            });
        }
    };
    $.each({
        swipedown: "swipeupdown",
        swipeup: "swipeupdown"
    }, function(event, sourceEvent){
        $.event.special[event] = {
            setup: function(){
                $(this).bind(sourceEvent, $.noop);
            }
        };
    });

})();
/*SWIPEUPDOWN END*/