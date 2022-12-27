#include <iostream>

using namespace std;

int main()
{
 cout << "one\n"; // print a new line
 cout << "two\\\"three\"\n"; // print the char after \\
 // if u use one backslach at the end of a line it causes err
 // if u use \" at the end of cout statement instead of \"" it causes err
 cout << "\tfour\n"; // print one tap
 cout << "\'five\*\n"; // print whatever special char u want
 // Note that u can't use escapeChar method without be in ""
 cout << "six6\b"; // simulate backspace button on keyboard
 cout << "seven\a\n"; // print alert
 cout << "eight\rnine"; // make whatever after at the first
}
