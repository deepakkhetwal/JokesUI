function closeGlobalMessageAlert()
{
	$("#globalMessageParent").addClass("hidden");

}

function showGlobalMessageAlert(message)
{
	$("#globalMessage").html(message);
	$("#globalMessageParent").removeClass("hidden");
}
