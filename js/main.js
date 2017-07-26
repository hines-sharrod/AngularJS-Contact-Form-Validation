var app = angular.module('addBulletin', []);

app.controller('FormCtrl', function($scope, $http) {
    $scope.formModel = {};
    
    $scope.onSubmit = function(valid) {
        
        if(valid) {
            console.log("Hey I'm Submitted");
            console.log($scope.formModel);
            
//            $http.post('https://minmax-server.herokuapp.com/register/', $scope.formModel).
//                success(function(data) {
//                    console.log(":)")
//                }).error(function(data) {
//                    console.log(":(") 
//            });
        } else {
            console.log("Invalid Form!");
        }
        
    };
});

 $(function () {
   var bindDatePicker = function() {
		$(".date").datetimepicker({
        format:'YYYY-MM-DD',
			icons: {
				time: "fa fa-clock-o",
				date: "fa fa-calendar",
				up: "fa fa-arrow-up",
				down: "fa fa-arrow-down"
			}
		}).find('input:first').on("blur",function () {
			// check if the date is correct. We can accept dd-mm-yyyy and yyyy-mm-dd.
			// update the format if it's yyyy-mm-dd
			var date = parseDate($(this).val());

			if (! isValidDate(date)) {
				//create date based on momentjs (we have that)
				date = moment().format('YYYY-MM-DD');
			}

			$(this).val(date);
		});
	}
   
   var isValidDate = function(value, format) {
		format = format || false;
		// lets parse the date to the best of our knowledge
		if (format) {
			value = parseDate(value);
		}

		var timestamp = Date.parse(value);

		return isNaN(timestamp) == false;
   }
   
   var parseDate = function(value) {
		var m = value.match(/^(\d{1,2})(\/|-)?(\d{1,2})(\/|-)?(\d{4})$/);
		if (m)
			value = m[5] + '-' + ("00" + m[3]).slice(-2) + '-' + ("00" + m[1]).slice(-2);

		return value;
   }
   
   bindDatePicker();
 });