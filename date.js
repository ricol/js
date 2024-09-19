alert = console.log

alert(new Date())

// 0 means 01.01.1970 UTC+0
let Jan01_1970 = new Date(0);
alert( Jan01_1970 );

// now add 24 hours, get 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);
alert( Jan02_1970 );

let date = new Date(2011, 0, 1, 2, 3, 4, 567);
alert( date ); // 1.01.2011, 02:03:04.567

{
	// current date
  let date = new Date();

  // the hour in your current time zone
  alert( date.getHours() );

  // the hour in UTC+0 time zone (London time without daylight savings)
  alert( date.getUTCHours() );
}

{
	let start = Date.now(); // milliseconds count from 1 Jan 1970

  // do the job
  for (let i = 0; i < 100000; i++) {
    let doSomething = i * i * i;
  }

  let end = Date.now(); // done

  alert( `The loop took ${end - start} ms` ); // subtract numbers, not dates
}

{
	function diffSubtract(date1, date2) {
    return date2 - date1;
  }

  function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
  }

  function bench(f) {
    let date1 = new Date(0);
    let date2 = new Date();

    let start = Date.now();
    for (let i = 0; i < 100000; i++) f(date1, date2);
    return Date.now() - start;
  }

  alert( 'Time of diffSubtract: ' + bench(diffSubtract) + 'ms' );
  alert( 'Time of diffGetTime: ' + bench(diffGetTime) + 'ms' );
}

{
	function diffSubtract(date1, date2) {
    return date2 - date1;
  }

  function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
  }

  function bench(f) {
    let date1 = new Date(0);
    let date2 = new Date();

    let start = Date.now();
    for (let i = 0; i < 100000; i++) f(date1, date2);
    return Date.now() - start;
  }

  let time1 = 0;
  let time2 = 0;

  // run bench(upperSlice) and bench(upperLoop) each 10 times alternating
  for (let i = 0; i < 10; i++) {
    time1 += bench(diffSubtract);
    time2 += bench(diffGetTime);
  }

  alert( 'Total time for diffSubtract: ' + time1 );
  alert( 'Total time for diffGetTime: ' + time2 );
}