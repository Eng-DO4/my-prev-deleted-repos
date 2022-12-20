#include <iostream>

using namespace std; // u can use cout direct instead of std::cout

int main()
{
    /*************************** Best Practices *********************************/

    int OSAMA = 20; // will not cause error but bad style
    cout << OSAMA;
    cout << "\n============\n";

    int x = 20; // will not cause error but not relate to the perpose of using this var
    cout << x;
    cout << "\n============\n";

    int oldMen = 21;
    cout << oldMen; // use camelCase for best practice
    cout << "\n============\n";

    int numberOfStudentsHowPlaysFootball = 46; // will not cause error but very large name
    cout << numberOfStudentsHowPlaysFootball; // 😩
    cout << "\n============\n";

    return 0;
}