<script type='text/javascript'>
//text and image summary script
var thumbnail_mode = &quot;no-float&quot; ;
summary_noimg = 400;
summary_img = 470;
img_thumb_height = 120;
img_thumb_width = 125;

//<![CDATA[
function removeHtmlTag(strx,chop){
if(strx.indexOf("<")!=-1)
{
var s = strx.split("<");
for(var i=0;i<s.length;i++){
if(s[i].indexOf(">")!=-1){
s[i] = s[i].substring(s[i].indexOf(">")+1,s[i].length);
}
}
strx = s.join("");
}
chop = (chop < strx.length-1) ? chop : strx.length-2;
while(strx.charAt(chop-1)!=' ' && strx.indexOf(' ',chop)!=-1) chop++;
strx = strx.substring(0,chop-1);
return strx+'...';
}
function createSummaryAndThumb(pID){
var div = document.getElementById(pID);
var imgtag = "";
var img = div.getElementsByTagName("img");
var summ = summary_noimg;
if(img.length>=1) { 
imgtag = '<span style="float:left; padding:0px 10px 5px 0px;"><img src="'+img[0].src+'" width="'+img_thumb_width+'px" height="'+img_thumb_height+'px"/></span>';
summ = summary_img;
}
var summary = imgtag + '<div>' + removeHtmlTag(div.innerHTML,summ) + '</div>';
div.innerHTML = summary;
}
//]]>

//show related post script
var relatedpoststitle=&quot;<font style='background-color:#ffff00;'> Related articles </font>&quot;;
//<![CDATA[
var relatedTitles=new Array();var relatedTitlesNum=0;var relatedUrls=new Array();function related_results_labels(c){for(var b=0;b<c.feed.entry.length;b++){var d=c.feed.entry[b];relatedTitles[relatedTitlesNum]=d.title.$t;for(var a=0;a<d.link.length;a++){if(d.link[a].rel=="alternate"){relatedUrls[relatedTitlesNum]=d.link[a].href;relatedTitlesNum++;break}}}}function removeRelatedDuplicates(){var b=new Array(0);var c=new Array(0);for(var a=0;a<relatedUrls.length;a++){if(!contains(b,relatedUrls[a])){b.length+=1;b[b.length-1]=relatedUrls[a];c.length+=1;c[c.length-1]=relatedTitles[a]}}relatedTitles=c;relatedUrls=b}function contains(b,d){for(var c=0;c<b.length;c++){if(b[c]==d){return true}}return false}function printRelatedLabels(a){for(var b=0;b<relatedUrls.length;b++){if(relatedUrls[b]==a){relatedUrls.splice(b,1);relatedTitles.splice(b,1)}}var c=Math.floor((relatedTitles.length-1)*Math.random());var b=0;if(relatedTitles.length>1){document.write("<h2>"+relatedpoststitle+"</h2>")}document.write("<ol>");while(b<relatedTitles.length&&b<20&&b<maxresults){document.write('<li><a href="'+relatedUrls[c]+'">'+relatedTitles[c]+"</a></li>");if(c<relatedTitles.length-1){c++}else{c=0}b++}document.write("</ul>");relatedUrls.splice(0,relatedUrls.length);relatedTitles.splice(0,relatedTitles.length)};
//]]>
</script>