// understand this code

#include <iostream>
using namespace std;

void stars(int n)
{
    for (char i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            if (i == 0 || i == (n - 1) || j == 0 || j == (n - 1))
                cout << "*";
            else
                cout << " ";
        }
        cout << endl;
    }
}

int main()
{
    stars(5);
    return 0;
}
