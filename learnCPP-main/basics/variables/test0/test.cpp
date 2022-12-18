#include <iostream>

using namespace std; // u can use cout direct instead of std::cout

int main()
{
    int price = 200;
    cout << "The price is " << price;
    cout << "\nThe price after adding 12: " << price + 12;
    price = 250;
    cout << "\nThe new price is: " << price;
    return 0;
}