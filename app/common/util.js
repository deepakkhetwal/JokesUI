var COMMON = COMMON || {};
COMMON = {
	closeGlobalMessageAlert : function()
								{
									$("#globalMessageParent").addClass("hidden");

								},
	showGlobalMessageAlert : function(message)
							{
								$("#globalMessage").html(message);
								$("#globalMessageParent").removeClass("hidden");
							}

}

