#include <stdio.h>
#include <string.h>

int main()
{
    int arr[5] = {4, 3, 1, 1, 5};
    int max = arr[0];
    for (int i = 0; i < 5; i++)
    {
        if (arr[i] > max)
        {
            max = arr[i];
        }
    }
    int count[max + 1];
    memset(count, 0, sizeof(count));

    for (int i = 0; i < 5; i++)
    {
        count[arr[i]]++;
    }

    for (int i = 0; i < max + 1; i++)
    {
        if (count[i])
        {
            printf("%d -> %d, ", i, count[i]);
        }
    }

    return 0;
}