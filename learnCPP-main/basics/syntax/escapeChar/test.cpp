#include <iostream>

using namespace std;

int main()
{
    // Note that u can't use escapeChar method without be in ""
    // if u use \ at the end of a line it causes err if the next line begin with code
    // if u use \ at the end of a line ends with a comment it comments the next line even if it is code
    // if u use \" at the end of cout statement instead of \"" it causes err cuz escaping "

    cout << "one\n"; // print a new line

    cout << "two\\\'three\"\n"; // print the char after \ this 3 chars => (\ - ' - ")

    cout << "\tfour\n"; // print one tap (8 spaces)

    cout << "six6\b"; // simulate backspace button on keyboard (remove the prev char in this line)

    cout << "seven\a\n"; // print alert => (I can't see the result here 😅)

    cout << "0123456789"; // any special char can be written in quotes except (\ - " - ')
    cout << "eight nine ten \releven twelve\n"; // replace whatever after with the first ame no of chars in this line

    return 0;
}
