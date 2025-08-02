// understand this code

#include <iostream>
using namespace std;

void stars(int n)
{
    for (char i = 0; i < n; i++)
    {
        for (int j = n; j > i; j--)
        {
            cout << "*";
        }

        for (int j = 0; j < 2 * i; j++)
        {
            cout << " ";
        }

        for (int j = n; j > i; j--)
        {
            cout << "*";
        }

        cout << endl;
    }

    for (char i = 0; i < n; i++)
    {
        for (int j = 0; j <= i; j++)
        {
            cout << "*";
        }

        for (int j = 2 * n - 3; j >= 2 * i; j--)
        {
            cout << " ";
        }

        for (int j = 0; j <= i; j++)
        {
            cout << "*";
        }

        cout << endl;
    }
}

int main()
{
    stars(5);
    return 0;
}
