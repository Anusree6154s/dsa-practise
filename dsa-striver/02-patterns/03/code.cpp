#include <iostream>
using namespace std;

void stars(int n)
{
    for (int i = 0; i <= n; i++)
    {
        for (int j = 0; j < i; j++)
        {
            cout << j+1;
        }
        cout << endl;
    }
}

int main()
{
    stars(5);
    return 0;
}