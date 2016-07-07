
    angular.module('LetrestApp').controller("LayoutController", function($timeout, K, LetRestService, CollapsablePanel, Messages) {

		//Layout configuration, Show/Hide/Pin Navigation
		this.navigation = new CollapsablePanel({pinned: false, collapsed: true});

		this.messages = new Messages();
	});


    angular.module('LetrestApp').factory("Messages", function($timeout, K) {
		return function() {
			var ME = this;

			var list = [];

			ME.getMessages = function() {
				return list;
			};
			ME.addMessage = function(msg) {
				list.push(msg);
			};
			ME.removeMessage = function(msg) {
				var i = ME.getMessages().indexOf(msg);

		    	if ( i != -1 ) {
		    		ME.getMessages().splice(i,1);
		    	}
			};
			ME.showSuccess = function(message) {
				ME.showAlert(message,'success');
			};
			ME.showAlert = function(message, type) {
				console.log('showMessage:(['+message+'], ['+type+'])');
		        var message = {msg:message, type:type};

		        ME.addMessage(message);

		        if(type=='success') {
		        	$timeout(function() {
		            	ME.removeMessage(message);
		            }, K.MESSAGES_TIMEOUT);
		        }
			};
		};
	});


	angular.module('LetrestApp').factory("CollapsablePanel", function(Util,LetRestSecurityService) {
		return function(opts) {
			if ( opts.collapsed ) opts.pinned = false;

			this.pinned = Util.coalesce(opts.pinned,false);
			this.collapsed = Util.coalesce(opts.collapsed,true);

      this.isHidden = function(){
        return LetRestSecurityService.hasUser();
      };

			this.isCollapsed = function() {
				return this.collapsed;
			};

			this.isPinned = function() {
				return this.pinned;
			};

			this.show = function() {
				this.collapsed = false;
			};
			this.hide = function() {
				if ( this.pinned ) return;
				this.collapsed = true;
			};
			this.toggle = function() {
				this.collapsed = !this.collapsed;
			};
			this.togglePin = function() {
				this.pinned = !this.pinned;
			};
		};

	});
