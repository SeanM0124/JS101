//Exclusive Or

/*
Further Exploration

Can you think of a situation in which a boolean xor
function would be useful? Suppose you were modeling a light at
the top of a flight of stairs wired in such a way that the light
can be turned on or off using either the switch at the bottom of
the stairs or the switch at the top of the stairs.
This is an xor configuration, and it can be modeled in JavaScript
using the xor function. Think of some additional examples.

Maybe some other examples could be with water from a faucet - if hot is on,
the water is hot, if cold is on, the water is cold,
if both are on, the water is neither, and if both are off, the water is off

other ideas:
a game show button -> only one can answer, not both.
using an umbrella -> raining, not raining, inside, or not inside

a football game -> one team has a flag, there is a penalty, other has a penalty,
then there is a penalty, if neither team has a penalty, there is no penalty,
if both have a penalty, penalties offset, there is no penalty.


|| and && are so-called short circuit operators in that the second
operand is not evaluated if its value is not needed. Does the xor
function perform short-circuit evaluation of its operands? Why or why not?
Does short-circuit evaluation in xor operations even make sense?

i believe a xor function can be both short circuit and not if applied to realife
it may depend on the scenario

in the literal sense of the code, it is not short circuit, since it must check
both values, because if both are true, over all it is false.

*/