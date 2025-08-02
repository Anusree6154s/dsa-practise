// understand this code

#include <iostream>
using namespace std;

void stars(int n)
{
    for (char i = 0; i < n; i++)
    {
        for (char j = 'A' + n - i - 1; j >= 'A'; j--)
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
