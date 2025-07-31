

#include <iostream>
using namespace std;

void stars(int n)
{
    for (char i = 0; i < n; i++)
    {
        char ch = 'A' + i;
        for (int j = 0; j <= i ; j++)
        {
            cout << ch;
        }

        cout << endl;
    }
}

int main()
{
    stars(5);
    return 0;
}
