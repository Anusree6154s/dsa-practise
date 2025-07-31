#include <iostream>
using namespace std;

void stars(int n)
{
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j <n-i; j++)
        {
            cout << " ";
        }
         for (int j = 0; j <2*i+1; j++) //2n+1 logic for pyramid
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