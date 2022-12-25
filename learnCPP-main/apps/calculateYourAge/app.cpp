#include <iostream>

using namespace std;

int main()
{
    cout << "============================\n";
    cout << "== Calculate your age App ==\n";
    cout << "============================\n";

    cout << "Your Age in years: ";
    int age_in_years;
    cin >> age_in_years; // getting input from user

    int age_in_days = age_in_years * 365;
    cout << age_in_days << " Days\n";

    int age_in_hours = age_in_days * 24;
    cout << age_in_hours << " Hours\n";

}