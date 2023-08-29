---
prev:
  text: 'Игры'
  link: './games'

next: false
---

# Посадка на луну
Посадка на Луну – игра для двух разных алгоритмов. Каждый алгоритм
управляет посадочной капсулой, которую нужно мягко посадить на Луну. В
начальный момент времени капсула зависает над поверхностью Луны на
некоторой заданной высоте. Капсула притягивается к поверхности Луны, и
для того, чтобы предотвратить падение капсулы, используется тормозной
двигатель. Для осуществления мягкой посадки на скорости не более 2 м/с
необходимо на каждом шаге игры задавать расход топлива на очередную
секунду полета.

Выигрывает игрок, совершивший мягкую посадку за наименьшее время.
Ничья возможна в двух случаях: обе капсулы разбились (скорость посадки
больше 2 м/с) или обе капсулы мягко прилунились на одном и том же ходу.


## Алгоритм
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