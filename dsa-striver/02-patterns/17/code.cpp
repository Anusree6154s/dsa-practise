// understand this code

#include <iostream>
using namespace std;

void stars(int n)
{
    for (char i = 0; i < n - 1; i++)
    {
        for (int j = 0; j < n - i; j++)
        {
            cout << " ";
        }

        for (char j = 'A'; j <= 'A' + i; j++)
        {
            cout << j;
        }

        for (char j = 'A' + i - 1; j >= 'A'; j--)
        {
            cout << j;
        }

        cout << endl;
    }
}

int main()
{
    stars(5);
    return 0;
}
