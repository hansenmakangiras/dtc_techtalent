app.directive("people", ['$window', '$q', function ($window, $q) {
	function load_script() {
		var c = document.getElementById("connection");
		var ctx = c.getContext("2d");		

		/*----------  Center  ----------*/
		
		ctx.moveTo(400,300);
		ctx.lineTo(350,100);

		ctx.moveTo(400,300);
		ctx.lineTo(220,230);
		
		ctx.moveTo(400,300);
		ctx.lineTo(220,390);
		
		ctx.moveTo(400,300);
		ctx.lineTo(520,200);

		ctx.moveTo(400,300);
		ctx.lineTo(600,320);

		ctx.moveTo(400,300);
		ctx.lineTo(550,430);

		ctx.moveTo(400,300);
		ctx.lineTo(350,450);

		/*----------  /Center  ----------*/


		// 2

		ctx.moveTo(350,100);
		ctx.lineTo(120,130);

		ctx.moveTo(350,100);
		ctx.lineTo(220,230);

		ctx.moveTo(350,100);
		ctx.lineTo(700,140);

		ctx.moveTo(350,100);
		ctx.lineTo(520,200);


		// 3

		ctx.moveTo(220,230);
		ctx.lineTo(220,390);

		ctx.moveTo(220,230);
		ctx.lineTo(30,200);

		ctx.moveTo(220,230);
		ctx.lineTo(100,300);


		// 4

		ctx.moveTo(220,390);
		ctx.lineTo(350,450);

		ctx.moveTo(220,390);
		ctx.lineTo(100,300);


		// 6

		ctx.moveTo(600,320);
		ctx.lineTo(520,200);

		ctx.moveTo(600,320);
		ctx.lineTo(800,250);

		ctx.moveTo(600,320);
		ctx.lineTo(700,500);

		ctx.moveTo(600,320);
		ctx.lineTo(750,400);


		// 7

		ctx.moveTo(550,430);
		ctx.lineTo(600,320);

		ctx.moveTo(550,430);
		ctx.lineTo(700,500);


		// 8

		ctx.moveTo(350,450);
		ctx.lineTo(550,430);


		// 9

		ctx.moveTo(120,130);
		ctx.lineTo(30,200);

		ctx.moveTo(120,130);
		ctx.lineTo(220,230);


		// 10

		ctx.moveTo(700,140);
		ctx.lineTo(520,200);

		ctx.moveTo(700,140);
		ctx.lineTo(600,320);

		ctx.moveTo(700,140);
		ctx.lineTo(800,250);


		// 11

		ctx.moveTo(30,200);
		ctx.lineTo(100,300);

		ctx.moveTo(30,200);
		ctx.lineTo(0,400);


		// 12

		ctx.moveTo(100,300);
		ctx.lineTo(0,400);

		ctx.moveTo(100,300);
		ctx.lineTo(90,500);


		// 14

		ctx.moveTo(90,500);
		ctx.lineTo(0,400);

		ctx.moveTo(90,500);
		ctx.lineTo(220,390);

		ctx.moveTo(90,500);
		ctx.lineTo(350,450);


		// 17

		ctx.moveTo(750,400);
		ctx.lineTo(700,500);

		ctx.moveTo(750,400);
		ctx.lineTo(800,250);



		
		ctx.strokeStyle="#ccc";
		ctx.stroke();


		$('.hexagon-1').css({
			"background-image": "url(/assets/img/users/1.jpg)",
			"left": "calc(400px - 40px)",
			"top": "calc(300px - 40px)"
		});	

		$('.hexagon-2').css({
			"background-image": "url(/assets/img/users/2.jpg)",
			"left": "calc(350px - 40px)",
			"top": "calc(100px - 40px)"
		});

		$('.hexagon-3').css({
			"background-image": "url(/assets/img/users/3.jpg)",
			"left": "calc(220px - 40px)",
			"top": "calc(230px - 40px)"
		});

		$('.hexagon-4').css({
			"background-image": "url(/assets/img/users/4.jpg)",
			"left": "calc(220px - 40px)",
			"top": "calc(390px - 40px)"
		});

		$('.hexagon-5').css({
			"background-image": "url(/assets/img/users/5.jpg)",
			"left": "calc(520px - 40px)",
			"top": "calc(200px - 40px)"
		});

		$('.hexagon-6').css({
			"background-image": "url(/assets/img/users/6.jpg)",
			"left": "calc(600px - 40px)",
			"top": "calc(320px - 40px)"
		});

		$('.hexagon-7').css({
			"background-image": "url(/assets/img/users/7.jpg)",
			"left": "calc(550px - 40px)",
			"top": "calc(430px - 40px)"
		});

		$('.hexagon-8').css({
			"background-image": "url(/assets/img/users/8.jpg)",
			"left": "calc(350px - 40px)",
			"top": "calc(450px - 40px)"
		});

		$('.hexagon-9').css({
			"background-image": "url(/assets/img/users/9.jpg)",
			"left": "calc(120px - 40px)",
			"top": "calc(130px - 40px)"
		});

		$('.hexagon-10').css({
			"background-image": "url(/assets/img/users/10.jpg)",
			"left": "calc(700px - 40px)",
			"top": "calc(140px - 40px)"
		});

		$('.hexagon-11').css({
			"background-image": "url(/assets/img/users/11.jpg)",
			"left": "calc(30px - 40px)",
			"top": "calc(200px - 40px)"
		});

		$('.hexagon-12').css({
			"background-image": "url(/assets/img/users/12.jpg)",
			"left": "calc(100px - 40px)",
			"top": "calc(300px - 40px)"
		});

		$('.hexagon-13').css({
			"background-image": "url(/assets/img/users/13.jpg)",
			"left": "calc(0px - 40px)",
			"top": "calc(400px - 40px)"
		});

		$('.hexagon-14').css({
			"background-image": "url(/assets/img/users/14.jpg)",
			"left": "calc(90px - 40px)",
			"top": "calc(500px - 40px)"
		});

		$('.hexagon-15').css({
			"background-image": "url(/assets/img/users/15.jpg)",
			"left": "calc(800px - 40px)",
			"top": "calc(250px - 40px)"
		});

		$('.hexagon-16').css({
			"background-image": "url(/assets/img/users/16.jpg)",
			"left": "calc(700px - 40px)",
			"top": "calc(500px - 40px)"
		});

		$('.hexagon-17').css({
			"background-image": "url(/assets/img/users/17.jpg)",
			"left": "calc(750px - 40px)",
			"top": "calc(400px - 40px)"
		});



		$(".hexagon").html("<div class='hexTop'></div><div class='hexBottom'></div>");
	}
	return {
		templateUrl : "views/site/people.html",
		link: function (scope, element, attrs) {
			load_script()
		}
	};
}]);