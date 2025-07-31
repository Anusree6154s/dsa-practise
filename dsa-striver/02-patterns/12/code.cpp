#include <iostream>
using namespace std;

void stars(int n)
{
    for (int i = 0; i < n - 1; i++)
    {
        for (int j = 0; j <= i; j++)
        {
            cout << j + 1;
        }
        for (int j = 0; j < 2 * (n - i) - 4; j++)
        {
            cout << " ";
        }
        for (int j = 0; j <= i; j++)
        {
            cout << i - j + 1;
        }
        cout << endl;
    }
}

int main()
{
    stars(5);
    return 0;
}