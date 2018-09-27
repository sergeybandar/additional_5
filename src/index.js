module.exports = function check(str, bracketsConfig) {
var i =0;
var j=0;
var a = str.split('');
var b = a.length/2;
for(var k=0; k<b;k++)
{
j=0;
	for(var j=0;j<bracketsConfig.length;j++)
	{
		var temp = bracketsConfig[j];
		i=0;
		while(i<a.length)
		{
			if(a[i]==temp[0] && a[i+1]==temp[1])
			{
				a.splice(i,2);
				i=0;
			}
			else i++;
		}

	}
}

if (a.length>0)
{
	return false;
}
else{
	return true;
}
if (a.length>0)
{
	return false;
}
else{
	return true;
}
}