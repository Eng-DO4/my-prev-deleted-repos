#include <iostream>

using namespace std;

int main()
{
 ////////////////// Data Types //////////////////////
 // int => integer number without fractions
 // double, float => number with floating point
 // string => text btw quotes
 // boolean => yes/no .. true/false .. on/off
 // array => sequence of different or same data types
 ////////////////////////////////////////////////////

 int salary = 5000;
 double age = 28.5;
 string name = "Mohamed";
 bool isPaid = true;

 cout << sizeof(salary) << "\n";
 cout << sizeof(age) << "\n";
 cout << sizeof(name) << "\n";
 cout << sizeof(isPaid) << "\n";
 return 0;
}
