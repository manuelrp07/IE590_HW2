$(document).ready(function () {
	$.getJSON("http://yijisoo.github.io/ie59000/2015spring/hw2/students.json", function (jsonfile) {
    var tr =[];         //make empty array
        for (var i = 0; i < jsonfile.length; i++) {
            tr = $('<tr/>');
            tr.push("<td>" + json[i].Name + "</td>");
            tr.push("<td>" + json[i].GPA + "</td>");
            tr.push("<td>" + json[i].GRE_V + "</td>");
            tr.push("<td>" + json[i].GRE_Q + "</td>");
            tr.push("<td>" + json[i].Essay + "</td>");
            tr.push("<td>" + json[i].Recom + "</td>");
            tr.push('</tr>');
            }
        $('tbody').append(tr); 
	});
});
