/* Open Picture Window */
function ald_OpenPictureWindow(theURL, winName, features, myWidth, myHeight, isCenter, myTitle)
{
	var ald_opw = null;
	var settings;
	settings = 'width='+myWidth+',height='+myHeight;
	
	if(!myTitle) myTitle = "Brought to you by Open Picture Window Plugin";
	
	if(isCenter)		// Position in center of window
	{
		var myLeft = (screen.width) ? (screen.width-myWidth)/2 : 0;
		var myTop = (screen.height) ? (screen.height-myHeight)/2 : 0;
		
		settings +=',left='+myLeft+',top='+myTop;
	}
	
	if(features!='') settings +=','+features;		// add features passed as argument
	ald_opw = window.open('',winName,settings);	
	with (ald_opw.document)
	{
		open('text/html', 'replace');
		write('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n');
		write('<html xmlns="http://www.w3.org/1999/xhtml">\n');
		write('<head><title>');
		write(myTitle);
		write('</title></head>\n');
		write('<body style="border:0;margin:0">\n');
		write('<img src="'+ theURL +'" ');
		write('title="'+ myTitle +'" alt="'+ myTitle +'" ');
		write('/>\n');
		write('</body></html>\n');
		close();
	}

}
