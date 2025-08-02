// understand this code

#include <iostream>
using namespace std;

void stars(int n)
{
    for (int i = 0; i < 2 * n - 1; i++)
    {
        for (int j = 0; j < 2 * n - 1; j++)
        {
            int dist_up = i;
            int dist_down = (2 * n - 2) - i;
            int dist_right = (2 * n - 2) - j;
            int dist_left = j;

            cout << n - min(min(dist_up, dist_down), min(dist_right, dist_left));
            // using 2 min cause cpp min dont allow 4 params
        }
        cout << endl;
    }
}

int main()
{
    stars(4);
    return 0;
}
