#include <iostream>
using namespace std;

void stars(int n)
{
    int count = 0;
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < i; j++)
        {
            if (count % 2 == 0)
            {
                cout << 1;
            }
            else
            {
                cout << 0;
            }
            count++;
        }
        cout << endl;
    }
}

int main()
{
    stars(5);
    return 0;
}