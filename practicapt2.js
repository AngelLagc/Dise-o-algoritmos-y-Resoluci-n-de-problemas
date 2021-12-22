let a = prompt("Dame el primer numero");
let b = prompt("Dame el segundo numero");
let c = prompt("Dame el tercer numero");
let d = prompt("Dame el cuarto numero");
let e = prompt("Dame el quinto numero");

comparar(a,b,c,d,e);

function comparar(a, b, c, d, e) {
    if (a > b && a > c && a > d && a > e) {
      alert (a);
    }
    if (b > a && b > c && b > d && b > e) {
      alert(b);
    }
    if (c > a && c > b && c > d && c > e) {
      alert(c);
    }
    if (d > a && d > b && d > c && d > e) {
      alert(d);
    }
    if (e > a && e > b && e > c && e > d) {
      alert(e);
    }
  }
