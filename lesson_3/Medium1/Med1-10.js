function foo(param = "no") {
  return "yes"; //always returns "yes"
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}
//"yes" === "no" is always fase
//output "no"

bar(foo());