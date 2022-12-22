#include <iostream>

#define DAYS 9

using namespace std;

int main ()
{
    const int workHours = 8; // ex
    int salary = 10000; // ex

    // workHours = 9; // read only var
    salary = 15000;
    cout << workHours;
    cout << "\n============\n";
    cout << salary;
    cout << "\n============\n";

    // const int constantVar; // can't declare without a value

    cout << DAYS; // u can use #define too for constant vars
    return 0;
}