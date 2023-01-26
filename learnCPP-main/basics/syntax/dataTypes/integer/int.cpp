#include <iostream>
#include <limits.h> // u can see limits of integer datatype

using namespace std;

int main ()
{
    int num1 = 100;
    int num2 = -200;
    int num3 = 0;
    int num4;
    int num5 = true;
    int num6 = false;
    // int num7 = "Elzero"; // different datatype
    int num8 = 'x'; // different data type but works
    // int num9 = 'xyz'; // still works but with a problem
    // int num10 = 'Elzero' // now not work
    int num11 = 10.5; // floating point number

    cout << sizeof(int) << '\n'; // the size of integer value/type is 4 bytes
    cout << num1 << endl; // (endl) = ('\n')
    cout << num2 << '\n'; // -ve value
    cout << num3 << '\n'; // zero value
    cout << num4 << '\n'; // garbage value
    cout << num5 << '\n'; // 1
    cout << num6 << '\n'; // 0
    cout << num8 << '\n'; // to be explained later
    // cout << num9 << '\n'; // to be explained later
    cout << num11 << '\n'; // tranckated (ignores the floating point)
    cout << INT_MIN << '\n'; // minimum integer number
    cout << INT_MAX << '\n'; // maximum integer number

    return 0;
}