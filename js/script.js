//

//

//

$(document).ready(function () {
	$.ajax({
		url: "https://reqres.in/api/users",
		success: function (response) {
			console.log(response.data);
			var korisnik1 = response.data[0];
			var korisnik2 = response.data[1];
			var korisnik3 = response.data[2];
			var korisnik4 = response.data[3];
			var korisnik5 = response.data[4];
			var korisnik6 = response.data[5];
			$("#img1").attr("src", korisnik1.avatar);
			$("#img2").attr("src", korisnik2.avatar);
			$("#img3").attr("src", korisnik3.avatar);
			$("#img4").attr("src", korisnik4.avatar);
			$("#img5").attr("src", korisnik5.avatar);
			$("#img6").attr("src", korisnik6.avatar);
			$("#firstUser").append(
				"<b>" + korisnik1.first_name+ "</b>"
			);
            $("#firstUser").append(
				"<i>" + korisnik1.email+ "</i>"
			);
            $("#secondUser").append(
				"<b>" + korisnik2.first_name+ "</b>"
			);
            $("#secondUser").append(
				"<i>" + korisnik2.email+ "</i>"
			);
            $("#thirdUser").append(
				"<b>" + korisnik3.first_name+ "</b>"
			);
            $("#thirdUser").append(
				"<i>" + korisnik3.email+ "</i>"
			);
            $("#fourthUser").append(
				"<b>" + korisnik4.first_name+ "</b>"
			);
            $("#fourthUser").append(
				"<i>" + korisnik4.email+ "</i>"
			);
            $("#fifthUser").append(
				"<b>" + korisnik5.first_name+ "</b>"
			);
            $("#fifthUser").append(
				"<i>" + korisnik5.email+ "</i>"
			);
            $("#sixthUser").append(
				"<b>" + korisnik6.first_name+ "</b>"
			);
            $("#sixthUser").append(
				"<i>" + korisnik6.email+ "</i>"
			);
			
			
			
			
		},
	});
});
