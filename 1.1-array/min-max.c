#include <stdio.h>

int main()
{
    int arr[5] = {1, 5, 2, -5, 10};
    int min = arr[0], max = arr[0];
    for (int i = 0; i < 5; i++)
    {
        if (arr[i] > max)
        {
            max = arr[i];
        }
        if (arr[i] < min)
        {
            min = arr[i];
        }
    }

    printf("Min Value (%d). Max Value (%d).", min, max);
    return 0;
}