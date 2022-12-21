#include <iostream>

using namespace std;

int main() 
{
    // for best practice don't use arbitrary letters for var names

    int a;
    cout << a; // random alternating number (for later)
    cout << "\n=============\n";

    int b, c;
    a = 25, b = 10;
    c = 20;
    cout << a + b + c; // 55 => [25 + 10 + 20]
    cout << "\n=============\n";

    int d, e=90, f;
    d = f = 5;
    cout << d + e + f; // 100 => [5 + 90 + 5]
    cout << "\n=============\n";

    return 0;
}