#include <iostream>

using namespace std;

int a = 50, c;

int second()
{
    cout << a << " => comming from global";
    cout << "\n================\n";

    int b = 40;
    cout << b << " => comming from local";
    cout << "\n================\n";

    c = 10; // val for local usage
    cout << c << " => edited in local scope";
    cout << "\n================\n";

    return 0;
}

int main()
{
    // second(); // u can use at first
    cout << a << " => comming from global";
    cout << "\n================\n";

    // cout << b; // will not work as it's declared in another func local
    // cout << "\n================\n";

    cout << c << " => modified in local scope"; // 
    cout << "\n================\n";

    second(); // or use it wherever u want

    return 0;
}