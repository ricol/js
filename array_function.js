'use strict'

{
	function count() 
	{
		var arr = []

		for (var i = 1; i <= 3; i++) 
		{
			arr.push(function () 
			{
				console.log("i = " + i)
				return i * i
			})
		}

		return arr
	}

	var results = count()
	var f1 = results[0]
	var f2 = results[1]
	var f3 = results[2]
	console.log(f1())
	console.log(f2())
	console.log(f3())
}

{
	function count()
	{
		var arr = []
		for (var i = 1; i <= 3; i++)
		{
			arr.push((function (n) 
			{
				console.log('n1 = ' + n)
				return function() 
				{
					console.log('n2 = ' + n)
					return n * n
				}
			})(i))
		}
		return arr
	}

	var results = count()
	var f1 = results[0]
	var f2 = results[1]
	var f3 = results[2]
	console.log(f1())
	console.log(f2())
	console.log(f3())
}
