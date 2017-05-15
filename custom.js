$(document).ready(function () {
    getContacts();
})

function getContacts(){
    $.get("https://wrihyfqhqkejkhq.form.io/contact/submission",{"limit":15},function(data){
        var tbody = "";
        $.each(data, function (key, value){
            var d = new Date(value['data']['dob']);
            var dob = (d.getMonth()+1)+"/"+d.getDate()+"/"+d.getFullYear();
            tbody += "<tr id="+value['_id']+"><td>"+value['data']['firstName']+"</td><td>"+value['data']['lastName']+"</td><td>"+value['data']['email']+"</td><td>"+value['data']['phone']+"</td><td>"+dob+"</td><td><a onclick=\"deleteContact('"+value['_id']+"')\"><span class=\"glyphicon glyphicon-trash\"></span></a></td></tr>";
        });
        $("#tbody").html(tbody);
    });
}

function deleteContact(id){
    $.ajax({
        url: 'https://wrihyfqhqkejkhq.form.io/contact/submission/'+id,
        type: 'DELETE',
        success: function(result) {
            $('#'+id).remove();
        }
    });

}