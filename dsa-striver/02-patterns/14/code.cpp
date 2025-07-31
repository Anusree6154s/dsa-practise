

#include <iostream>
using namespace std;

void stars(int n)
{
    for (int i = 0; i <= n; i++)
    {
        for (char j = 'A'; j < 'A' + i; j++)
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
