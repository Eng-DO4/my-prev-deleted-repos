#include <iostream>

using namespace std; // u can use cout direct instead of std::cout

int main()
{
    int price = 100;
    price = 200; // don't declare again
    cout << price;
    cout << "\n============\n";

    // int price = 400; // should de unique

    int Price = 500; // case sensetive
    cout << Price;
    cout << "\n============\n";

    // int 1price = 100; // can't start with number
    int n1223fdsj23 = 30; // can contain numbers but not first
    cout << n1223fdsj23;
    cout << "\n============\n";

    // int *pr@$i--ce? = 90; // can't use special charecters anywhere
    int _price = 50; // but u can use "_" (underscore) anywhere
    cout << _price;
    cout << "\n============\n";

    // int number of days = 1000; // can't use multi-words var using " " (white spaces)
    // int public = 1000; // don't use reserved keywords
    int publics = 1000;
    cout << publics;
    cout << "\n============\n";

    return 0;
}