# Moonlander
Landing on the Moon is a game for two different algorithms. Each algorithm
controls a landing capsule that needs to be gently planted on the moon. B
the initial moment of the capsule hovers above the surface of the moon on
some given altitude. The capsule is attracted to the surface of the Moon, and
to prevent the capsule from falling, use the
engine. For soft landing at a speed not exceeding 2 m/s
it is necessary at each step of the game to set fuel consumption on the next
second of flight.

The player who makes a soft landing in the least time wins.
Tie possible in two cases: both capsules crashed (landing speed
more than 2 m/s) or both capsules gently landed on the same stroke.

## Algorithm
::: code-group
```pascal
program {name of the program}
uses {comma delimited names of libraries you use}
const {global constant declaration block}
var {global variable declaration block}

function {function declarations, if any}
{ local variables }
begin
...
end;

procedure { procedure declarations, if any}
{ local variables }
begin
...
end;

begin { main program block starts}
...
end. { the end of main program block }
```

```cpp
#include <iostream>
using namespace std;

int main() {
  cout << "Hello World!";
  return 0;
}
```

```python
def fib(n):
    a, b = 0, 1
    while a < n:
        print(a, end=' ')
        a, b = b, a+b
    print()
fib(1000)
```
:::
