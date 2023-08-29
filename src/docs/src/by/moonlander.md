---
prev:
  text: 'Гульні'
  link: './games'

next: false
---

# Пасадка на месяц
Пасадка на Месяц - гульня для двух розных алгарытмаў. Кожны алгарытм
кіруе пасадачнай капсулай, якую трэба мякка пасадзіць на Месяц. У
пачатковы момант часу капсула завісае над паверхняй Месяца на
некаторай зададзенай вышыні. Капсула прыцягваецца да паверхні Месяца, і
для таго, каб прадухіліць падзенне капсулы, выкарыстоўваецца тармазной
рухавік. Для ажыццяўлення мяккай пасадкі на хуткасці не больш за 2 м/с
неабходна на кожным кроку гульні задаваць выдатак паліва на чарговую.
секунду палёту.

Выйграе гулец, які здзейсніў мяккую пасадку за найменшы час.
Нічыя магчымая ў двух выпадках: абедзве капсулы разбіліся (хуткасць пасадкі
больш за 2 м / с) або абедзве капсулы мякка прытуліліся на адным і тым жа ходу.

## Алгарытм
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